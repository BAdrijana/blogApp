import React from "react";

function Login() {
  return (
    <div className="container">
      <h1 className="text-center">Log in to create blog post</h1>
      <div className="flex justify-center w-full mt-5 ">
        <form className="flex flex-col gap-4 w-[60%] shadow-inset-custom py-6 px-5 rounded-xl">
          <input
            type="text"
            placeholder="Username"
            className="p-2 bg-[rgba(243,227,204,0.8)]"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 bg-[rgba(243,227,204,0.8)]"
          />
          <button className="btn" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
