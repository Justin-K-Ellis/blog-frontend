import { useState } from "react";

import Back from "../components/Back";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password);
  }

  return (
    <>
      <section className="flex flex-col justify-center items-center border-double my-4">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow hover:shadow-md border border-solid p-4 flex flex-col justify-center items-center gap-2"
        >
          <div className="flex justify-center items-center gap-2">
            <label htmlFor="email" className="w-fit">
              Email
            </label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              id="email"
              className="rounded p-1 border border-solid"
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              id="password"
              className="rounded p-1 border border-solid"
            />
          </div>
          <button
            type="submit"
            className="border border-solid border-black rounded-xl p-1 w-fit hover:bg-black hover:text-white"
          >
            Login
          </button>
        </form>
      </section>
      <Back />
    </>
  );
}

export default Login;
