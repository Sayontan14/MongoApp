const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profile');
const jobRoutes = require('./routes/jobRoutes');
const adminRoutes = require('./routes/admin');
const recruiterRoutes = require('./routes/recruiter');
const messageRoutes = require('./routes/message');

// Connect to MongoDB
mongoose.connect('mongodb+srv://saptashwachakra2:Fnoh3EnzKgIpQM5u@cluster0.dpwjcuv.mongodb.net/recruitment?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error connecting to MongoDB:', error);
});

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Route middlewares
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/job', jobRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/recruiter', recruiterRoutes);
app.use('/api/message', messageRoutes);

// Start server
app.listen(3008, () => {
  console.log('Server running on port 3008');
});
