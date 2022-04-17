const express = require("express");
const app = new express();
const cors = require("cors");
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

require("./db/conn");
const User = require("./models/users");
const LoginUser = require("./models/loginuser");
const Product = require("./models/product");

//get users
app.get("/users", async (req, res) => {
  try {
    const result = await User.find();
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

//get user by id

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await User.findById(id);
    if (!result) {
      return res.status(404).send();
    } else {
      res.status(201).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

//create users

// app.post("/users", (req, res) => {
//     console.log(req.body);
//     const user = new User(req.body);
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((e) => {
// res.status(400).send(e)
//     })
// })

//create user with async

app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

//delete users
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // const result = await Playlist.deleteOne(id);
    const result = await User.findByIdAndDelete(id);
    console.log(result);
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

//update user data by id using patch

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await User.findByIdAndUpdate(id, data, {
      new: true,
      useFindAndModified: false,
    });
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

//app listen
app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`listen port ${port}`);
});

//login and signup api

app.get("/loginuser", async (req, res) => {
  try {
    const result = await LoginUser.find();
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

app.post("/loginuser", async (req, res) => {
  try {
    const signupuser = new LoginUser(req.body);
    const result = await signupuser.save();
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

//Product  API

app.get("/product", async (req, res) => {
  try {
    const result = await Product.find();
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

app.post("/product", async (req, res) => {
  try {
    const addproduct = new Product(req.body);
    const result = await addproduct.save();
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

app.patch("/product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await Product.findByIdAndUpdate(id, data, {
      new: true,
      useFindAndModified: false,
    });
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.delete("/product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // const result = await Playlist.deleteOne(id);
    const result = await Product.findByIdAndDelete(id);
    console.log(result);
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});
