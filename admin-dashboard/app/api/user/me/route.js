import connectDB from '@/lib/db';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

export async function GET(req) {
  try {
    await connectDB();
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.log('NO TOKEN HEADER');
      return new Response(JSON.stringify({ message: 'No token' }), { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('DECODED:', decoded);

    const user = await User.findById(decoded.userId).select('-password');
    console.log('USER FROM DB:', user);

    if (!user) {
      console.log('USER NOT FOUND');
      return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ user }), { status: 200 });
  } catch (err) {
    console.error('ERROR:', err);
    return new Response(JSON.stringify({ message: 'Invalid token' }), { status: 401 });
  }
}
