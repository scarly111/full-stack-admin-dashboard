import connectDB from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await connectDB();
  const { name, email, password } = await req.json();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ message: 'User already exists' }), { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ name, email, password: hashedPassword });

  return new Response(JSON.stringify({ message: 'User created', user: newUser }), { status: 201 });
}
