const userRoutes = require("./routes/user");
const staffRoutes = require("./routes/staff");
const express = require("express");
const authRoutes = require("./routes/auth");
const cors = require("cors");

const app = express();

// const corsOptions = {
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
// };

app.use(cors());

app.use(express.json()); // to parse incoming requests with JSON payloads

// Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/staff", staffRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
