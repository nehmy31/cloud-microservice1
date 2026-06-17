const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/', async (req, res) => {
  try {
    const dbCheck = await pool.query('SELECT NOW()');
    res.json({
      status: "Healthy",
      runtime: "Node.js Container",
      infrastructure: "WSL Ubuntu Environment",
      database: "Connected",
      timestamp: dbCheck.rows[0].now
    });
  } catch (err) {
    res.status(500).json({ status: "Database Connection Error", error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
