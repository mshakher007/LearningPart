require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { errorHandler } = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db');

// Database connection
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/api/leads', require('./routes/leadRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/emails', require('./routes/emailRoutes'));
app.use('/api/quotes', require('./routes/quoteRoutes'));
app.use('/api/proposals', require('./routes/proposalRoutes'));
app.use('/api/ai', require('./routes/aiRoutes'));

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
