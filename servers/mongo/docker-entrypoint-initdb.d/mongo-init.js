print('Start #################################################################');

db.createUser({
  user: "iwill",
  pwd: "iwill",
  roles: [{ role: "dbOwner", db: "my_will" }]
  })

db.grantRolesToUser(
      "iwill",
    [
    { role: "dbOwner", db: "my_will" }
    ]
      )
print('END #################################################################');

