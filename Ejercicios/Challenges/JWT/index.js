const express = require("express");
const { Client } = require("pg");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const server = express();
const PORT = 3001;

server.use(express.json());

const dbCred = {
  host: "localhost",
  port: 5432,
  database: "jwtchallenge",
  user: "postgres",
  password: "123456",
};

server.get("/users", async (req, res) => {
  try {
    const client = new Client(dbCred);
    await client.connect();
    const response = await client.query("SELECT * FROM users");
    await client.end();
    res.json(response.rows);
  } catch (error) {
    res.json({ message: error.message });
  }
});

server.post("/signup", async (req, res) => {
  try {
    let { email, password } = req.body;
    password = await bcrypt.hash(password.toString(), 8);
    const client = new Client(dbCred);
    await client.connect();
    await client.query("INSERT INTO users(email, password) VALUES ($1, $2)", [
      email,
      password,
    ]);
    const newUser = await client.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    await client.end();
    jwt.sign({ id: newUser.id }, "secretKey", (error, token) => {
      res.json(token);
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

const ensureToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== undefined) {
    // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTU4MzQyODV9.yBjrG7U0MfBKHEoS85DKUFHX8k60Ai5pxd9hIDjaAxM
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.user = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};

server.get("/api", ensureToken, (req, res) => {
  jwt.verify(req.user, "secretKey", (error, data) => {
    if (error) {
      res.sendStatus(403);
    } else {
      console.log(data);
      res.json({ message: "Access OK" });
    }
  });
});

server.post("/login", async (req, res) => {
  // Tomamos del body: email y password
  // Hash de la password
  // Nos conectamos a la DB
  // Buscamos el user por el email
  // Cerrar la conexión a la DB
  // Verificamos que las password sean iguales
  // Creamos y devolvemos un token
  // Manejar errores
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
