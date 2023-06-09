print('Data: ', [
  String(process.env.MONGO_USERNAME),
]);

print('Creating user');

db.createUser({
  user: String(process.env.MONGO_USERNAME),
  pwd: String(process.env.MONGO_PASSWORD),
  roles: [
    { role: 'readWriteAnyDatabase', db: 'admin' },
  ],
});

print('Show users:', db.getUsers());
