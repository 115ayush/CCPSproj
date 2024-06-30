const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const xlsx = require("xlsx");
const connectDB = require("./db");
const NUser = require('./models/User');

const app = express();
const port = 4001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Models
const User = require('./models/User');
const Student = require('./models/Student');


// Login Endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ exists: 1, data: { email: user.email, isCoordi: user.isCoordi } });
    } else {
      res.status(200).json({ exists: 0 });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ exists: 0 });
  }
});

// Students Endpoint
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

// Companies Endpoint
app.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find({ isContacted: false||0 });
    res.status(200).json(companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});


const Company = require('./models/Company');

// Configure Multer for file upload (using in-memory storage)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Upload Endpoint
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    const { memMail } = req.body;

    if (!file) {
      console.error('No file uploaded');
      return res.status(400).send("No file uploaded.");
    }

    // Read the file buffer
    const workbook = xlsx.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet);

    // Add memMail to each row of the data
    const modifiedData = data.map(row => ({ ...row, memMail }));

    for (const row of modifiedData) {
      const company = new Company({
        name: row.name,
        hrname: row.hrname,
        Description: row.Description,
        hremail: row.hrEmail,
        memMail: row.memMail,
        isContacted: row.isContacted
      });

      await company.save();
    }

    res.status(200).send("File uploaded and data processed successfully.");
  } catch (error) {
    console.error('Error uploading and processing file:', error);
    res.status(500).send("An error occurred while processing the file.");
  }
});

// Submit Response Endpoint
app.post('/submit-response', async (req, res) => {
  try {
    const {
      name,
      hrname,
      hrNumber,
      hremail,
      response,
      date,
      message,
      userId,
      memMail
    } = req.body;

    // Create a new Response document
    const newResponse = new Response({
      name,
      hrname,
      hrNumber,
      hremail,
      response,
      date,
      message,
      userId,
      memMail
    });

    // Save the response to the database
    await newResponse.save();

    // Update the company's isContacted status
    await Company.findOneAndUpdate(
      { name: name }, // Assuming name is used to find the company
      { isContacted: true }
    );

    res.status(200).json({ message: "Response submitted successfully" });
  } catch (error) {
    console.error('Error submitting response:', error);
    res.status(500).json({ error: 'Failed to submit response' });
  }
});

// Signup Endpoint
app.post('/signup', async (req, res) => {
  const { email, password, isCoordi } = req.body;

  try {
    // Check if user already exists
    let existingUser = await NUser.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new NUser({ email, password, isCoordi });

    // Save user to database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

const Response = require('./models/Response');
// GET endpoint to retrieve all responses

app.get('/responses', async (req, res) => {
  try {
    const responses = await Response.find();
    console.log('Fetched responses:', responses); // Log the fetched responses
    res.status(200).json(responses);
  } catch (error) {
    console.error('Error fetching responses:', error);
    res.status(500).json({ error: 'Failed to fetch responses' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});