const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const notesRoutes = require('./routes/notesRoutes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes);
app.use('/api', notesRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});