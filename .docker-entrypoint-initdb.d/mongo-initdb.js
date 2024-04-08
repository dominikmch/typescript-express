
db.createUser({
  user: "dev",
  pwd: "devpass",
  roles: [
    {
      role: "readWrite",
      db: "typescript-db",
    },
  ],
});
