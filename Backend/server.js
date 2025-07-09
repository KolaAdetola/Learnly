import path from 'path';
import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.routes.js';
import messageRoute from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import examRoutes from './routes/exam.routes.js';
import connectdb from './db/db.js'; // Adjusted path for ESM context

const app = express();
const port = 2500;

const __dirname = path.resolve();

// Connect to database
connectdb();

// Middleware
const allowedOrigins = [
  'http://localhost:3000', // Local frontend
  'https://learnly-five.vercel.app/' // Vercel frontend (adjust this)
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, // Needed if you're using cookies
}));
app.use(express.json());
app.use(cookieParser());

// Routes
// app.get('/', (req, res) => {
//   res.send('<h1>hello world</h1>');
// });
app.use('/api/auth', authRoute);
app.use('/api/messages', messageRoute);
app.use('/api/users', userRoutes);
app.use('/api/exams', examRoutes);

app.use(express.static(path.join(__dirname, '/Frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
