'use client';

import { login } from "@lms/entities/requests/authRequets";
import { useDispatch } from "react-redux";
import { decrement, increment } from "@lms/features/counter/counterSlice";

export const dynamic = 'force-dynamic'

export default function Home() {
  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const user = await login(email, password);
      console.log('Logged in user:', user);
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div className="flex flex-col items-center justify-start h-screen gap-4">
      <h1 className="text-2xl font-bold">Home</h1>
      <p>Welcome to the home page</p>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input name="email" type="text" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
