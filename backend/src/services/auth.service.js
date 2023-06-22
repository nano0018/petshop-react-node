/**
 * Module dependencies.
 */
const UserService = require('./user.service');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { config } = require('../config/envConfig');
const recoveryMailTemplate = require('../utils/mail/recovery-mail-template');
const userModel = require('../db/model/user.model')

/**
 * Auth class service.
 */
const service = new UserService();
class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtKey, { expiresIn: 3600000 });
    const userData = {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
    };
    return {
      user: userData,
      token,
    };
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, config.jwtRecoveryKey);
      const user = await service.findById(payload.sub);
      if (user.recoveryToken !== token) {
        throw boom.unauthorized();
      }
      const hash = await bcrypt.hash(newPassword, 10);
      await service.update(userModel, payload.sub, {
        recoveryToken: null,
        password: hash,
      })
      return {
        msg: 'The password has been changed',
      };
    } catch (error) {
      throw boom.unauthorized();
    }
  }

  async sendResetPassword(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      return {
        msg: 'An email with recovery instructions has been sent!',
      };
    }
    const payload = {
      sub: user.id,
    };
    const token = jwt.sign(payload, config.jwtRecoveryKey, {
      expiresIn: '15min',
    });
    const link = `http://frontend.store.co/recovery?token=${token}`;

    await service.update(userModel, user.id, {
      recoveryToken: token,
    });

    const mail = {
      from: `"Servicio email - Backend NodeJS" <${config.recoveryServiceEmail}>`, // sender address
      to: `${user.email}`, // list of receivers
      subject: 'Recuperación de contraseña', // Subject line
      html: recoveryMailTemplate(link), // html body
    };

    const mailSent = await this.sendMail(mail);
    return mailSent;
  }

  async sendMail(infoMail) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: config.recoveryServiceEmail,
        pass: config.recoveryServicePassword,
      },
    });

    // send mail with defined transport object
    await transporter.sendMail(infoMail);

    return {
      msg: 'An email with recovery instructions has been sent!',
    };
  }
}

module.exports = AuthService;
