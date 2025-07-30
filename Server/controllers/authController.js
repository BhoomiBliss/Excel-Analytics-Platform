// Server/controllers/authController.js
import jwt from 'jsonwebtoken';

export const login = (req, res) => {
  const { email, password } = req.body;

  // Temporary hardcoded check — replace with DB logic
  if (email === 'admin@example.com' && password === '123456') {
    const token = jwt.sign({ id: 1, isAdmin: true }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return res.json({ token });
  }

  res.status(401).json({ message: 'Invalid credentials' });
};

export const register = (req, res) => {
  const { name, email, password } = req.body;

  // Dummy response — replace with database save logic
  const token = jwt.sign({ id: 2, isAdmin: false }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.status(201).json({ token });
};
