echo "Adding user to MongoDB..."
mongosh --host mongodb --eval "db.createUser({ user: \"$MONGO_USERNAME\", pwd: \"$MONGO_PASSWORD\", roles: [ { role: \"root\", db: \"admin\" } ] });"
echo "User added."
