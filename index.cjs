const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

const PORT = 5000;

// mongoose.connect('mongodb://localhost:27017/Anonymous ')
mongoose.connect('mongodb://127.0.0.1:27017/Anonymous', {
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
  socketTimeoutMS: 45000 // Increase socket timeout to 45 seconds
})
.then( () => { console.log("Database Connected Successfully!!") })
.catch( (err) => { console.log("Error while connecting to Database" + err) });


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
    console.log(`App is Running at ${PORT} `);

    try {
        const { saveAdmin } = require('./controllers/adminController.cjs');
    
        await saveAdmin();
        console.log('Admin data saved successfully.');
      } catch (error) {
        console.error('Error saving admin data:', error);
      }
});
