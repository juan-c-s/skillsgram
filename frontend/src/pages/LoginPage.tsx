import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../layout/Header";

import { useNavigate } from "react-router-dom";
import { User, UserLogin } from "../types/user";
import { getUserByEmail } from "../crud/users";
import { hash } from "../utils";
const LoginPage = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm<UserLogin>();
  const navigate = useNavigate();

  const onSubmit = async(data : UserLogin) => {
    const response:User = await getUserByEmail(data.email)
    // console.log("Logged In")
    if(response.hashed_password == hash(data.password)){
      navigate(`/profile/${response.id}`)
    }else{
      setError("password",{
        type: "Incorrect",
      })
    }
    // Perform login action with form data
  };

  return (
    <div className="">
      <Header/>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <TextField
                  fullWidth
                  id="email"
                  {...register("email", { required: true })}
                  type="email"
                  label="Email address"
                  variant="outlined"
                  autoComplete="email"
                />
                {errors.email && <p className="text-red-500">Email is required</p>}
              </div>
              <div>
                <TextField
                  fullWidth
                  id="password"
                  {...register("password", { required: true })}
                  type="password"
                  label="Password"
                  variant="outlined"
                  autoComplete="current-password"
                />
                {errors.password &&
                <p className="text-red-500"> Password is {errors.password.type }</p>}
              </div>
            </div>

            <div>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Sign In
              </Button>
            </div>
            <div className="text-center">
              <p className="text-gray-600">
                Not registered?{" "}
                <Link to="/register" className="text-blue-500 hover:underline">
                  Create an account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
