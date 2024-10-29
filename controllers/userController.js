const fs = require("fs");

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

const getUsers = (req, res) => {
  res
    .status(200)
    .json({ status: "sucess", results: users.length, data: { users: users } });
};

const createUser = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newUser = Object.assign({ id: newId }, req.body);

  users.push(newUser);

  fs.writeFile(
    `${__dirname}/../dev-data/data/users.json`,
    JSON.stringify(users),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    }
  );
}

module.exports = {
  getUsers,
  createUser,
  
}