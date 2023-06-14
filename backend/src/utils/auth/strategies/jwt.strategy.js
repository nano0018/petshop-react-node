const { Strategy, ExtractJwt } = require('passport-jwt');
const { config } = require('../../../config/envConfig');


const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtKey,
};

const JwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});

module.exports = JwtStrategy;
