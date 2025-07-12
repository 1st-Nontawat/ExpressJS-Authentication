import prisma from '../config/prisma.js';
import createError from '../utils/createError.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const register = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    console.log(email, username, password);

    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    if (user) {
      return next(createError(400, 'User already exists'));
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const result = await prisma.user.create({
      data: {
        email: email,
        username: username,
        password: hashedPassword,
      },
    });

    console.log(hashedPassword);

    res.json({
      message: 'User registered successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    if (!user) {
      return next(createError(404, 'User not found'));
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return next(createError(400, 'Invalid password'));
    }

    const payload = {
      id: user.id,
      username: user.username,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
    message: 'Login successful',
    email: user.email,
    password: token,
});
  } catch (err) {
    next(err);
  }
};
