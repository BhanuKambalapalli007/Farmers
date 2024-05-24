const express = require("express");
const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const uri =
  "mongodb+srv://21pa1a1246:21pa1a1246@cluster0.iek8idc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

const app = express();
app.use(cors());
app.use(express.json());

const connection = async () => {
  try {
    const res = await client.connect();
    if (res.topology.isConnected()) {
      console.log("DB is connected");
    }
  } catch (err) {
    console.log(err);
  }
};

app.get("/data", async (req, res) => {
  await connection();
  const collection = client.db("").collection("");
  const data = await collection.find().toArray();
  res.json(data);
});

app.post("/register", async (req, res) => {
  await connection();
  const collection = client.db("user").collection("users");
  const { name, email, password } = req.body;

  const existingUser = await collection.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = { name, email, password: hashedPassword };
  const result = await collection.insertOne(newUser);
  res.status(201).json({ message: "User registered successfully" });
});

app.post("/login", async (req, res) => {
  await connection();
  const collection = client.db("user").collection("users");
  const { email, password } = req.body;
  const user = await collection.findOne({ email });
  console.log(user);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign({ username: user.username }, "your_secret_key_here", {
    expiresIn: "1h",
  });
  res.json({ token, user });
});

app.post("/form", async (req, res) => {
  await connection();
  const collection = client.db("user").collection("users");
  const { formData } = req.body;
  console.log(formData);
  await collection.insertOne(formData);
  res.json({ message: "Company data submitted successfully" });
});


app.listen(3003, () => {
  console.log("server started");
});