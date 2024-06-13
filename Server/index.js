const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 4001;

// MongoDB URI
const URI = "mongodb://localhost:27017/ccpsdb";

// Connect to MongoDB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define User Schema and Model
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);



// Login Endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      res.status(200).json({ exists: 1, data: { email: user.email } });
    } else {
      res.status(200).json({ exists: 0 });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ exists: 0 });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
