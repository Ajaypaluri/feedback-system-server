// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended:true}));

// const PORT = 5000;

// const mongoURI = process.env.MongoDB_URL;
// // mongoose.connect('mongodb://localhost:27017/Anonymous ')
// mongoose.connect(mongoURI, {
//   serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
//   socketTimeoutMS: 45000 // Increase socket timeout to 45 seconds
// })
// .then( () => { console.log("Database Connected Successfully!!") })
// .catch( (err) => { console.log("Error while connecting to Database" + err) });


// const studentRoute = require('./routes/studentRoutes.cjs');
// const courseRoute = require('./routes/courseRoutes.cjs');
// const feedbackRoute = require('./routes/feedbackRoutes.cjs');
// const facultyRoute = require('./routes/facultyRoutes.cjs');
// const hodRoute = require('./routes/hodRoutes.cjs');
// const adminRoute = require('./routes/adminRoutes.cjs');


// app.use('/student', studentRoute);
// app.use('/course', courseRoute);
// app.use('/feedback', feedbackRoute);
// app.use('/faculty', facultyRoute);
// app.use('/hod', hodRoute);
// app.use('/admin', adminRoute);

// // Define a route for the root URL
// app.get('/', (req, res) => {
//   res.send('Welcome to the Feedback System API');
// });

// app.listen(PORT, async () => {
//     console.log(`App is Running at ${PORT} `);

//     try {
//         const { saveAdmin } = require('./controllers/adminController.cjs');
    
//         await saveAdmin();
//         console.log('Admin data saved successfully.');
//       } catch (error) {
//         console.error('Error saving admin data:', error);
//       }
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

// Use the MongoDB connection string from the .env file
const mongoURI = process.env.MongoDB_URL;

if (!mongoURI) {
  console.error('MongoDB connection string is not defined in the environment variables.');
  process.exit(1);
}

mongoose.connect(mongoURI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
  socketTimeoutMS: 45000 // Increase socket timeout to 45 seconds
})
.then(() => { console.log("Database Connected Successfully!!") })
.catch((err) => { console.log("Error while connecting to Database: " + err) });

const studentRoute = require('./routes/studentRoutes.cjs');
const courseRoute = require('./routes/courseRoutes.cjs');
const feedbackRoute = require('./routes/feedbackRoutes.cjs');
const facultyRoute = require('./routes/facultyRoutes.cjs');
const hodRoute = require('./routes/hodRoutes.cjs');
const adminRoute = require('./routes/adminRoutes.cjs');

app.use('/student', studentRoute);
app.use('/course', courseRoute);
app.use('/feedback', feedbackRoute);
app.use('/faculty', facultyRoute);
app.use('/hod', hodRoute);
app.use('/admin', adminRoute);

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Feedback System API');
});

app.listen(PORT, async () => {
  console.log(`App is Running at ${PORT}`);

  try {
    const { saveAdmin } = require('./controllers/adminController.cjs');
    await saveAdmin();
    console.log('Admin data saved successfully.');
  } catch (error) {
    console.error('Error saving admin data:', error);
  }
});