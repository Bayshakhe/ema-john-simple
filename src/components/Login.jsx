import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeOceania } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from "./AuthProvider";

const Login = () => {
    const {user, login} = useContext(AuthContext);
    const [error, setError] = useState('');
    console.log(user)

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, confirm);

        setError('')

        login(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
        })
        .catch(error => {
            setError(error.message)
        })
    }
  return (
    <div className="hero min-h-screen">
      <div className=" flex-col lg:w-2/6 border-l-8 border-b-8 border-orange-200 rounded-3xl">
        <form onSubmit={handleLogin} className="card w-full  bg-base-100 border rounded-md rounded-b-2xl">
          <h1 className="text-3xl font-semitbold text-center">Login now!</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p>{error && error}</p>
            <div className="form-control mt-6">
              <button className="btn bg-orange-300 hover:bg-orange-400 rounded-sm">Login</button>
            </div>
            <p className="text-sm">New to Ema-John? <Link className="text-orange-600" to='/signup'>Create new account.</Link></p>
            <div className="grid grid-cols-5 gap-0 justify-center items-center divided-y text-center">
                <hr className="col-span-2 border"/> or
                <hr className="col-span-2 border"/>
            </div>
            <div className="btn bg-white rounded-sm normal-case text-black border-gray-400">
            <FontAwesomeIcon icon={faGlobeOceania} />
            Create with Google
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
