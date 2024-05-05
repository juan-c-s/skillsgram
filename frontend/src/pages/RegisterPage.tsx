import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import {createUser} from "../crud/users"
import { UserCreate } from "../types/user";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserCreate>();
  const navigate = useNavigate();
  const onSubmit = async(data:UserCreate) => {
    try{
        const user = await createUser(data)
        navigate(`/profile/${user.id}`)

    }catch(e){
        console.error(e)
    }
    // navigate("/profile")
  };

  return (
    <div className="">

    <Header/>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create an account
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px ">
            <div>
              <TextField
                fullWidth
                id="name"
                {...register("name", { required: true })}
                type="text"
                required
                label="Name"
                variant="outlined"
                autoComplete="name"
                />
              {errors.name && (
                  <p className="text-red-500">Name is required</p>
                  )}
            </div>
            <div>
              <TextField
                fullWidth
                id="email"
                {...register("email", { required: true })}
                type="email"
                required
                label="Email address"
                variant="outlined"
                autoComplete="email"
                />
              {errors.email && (
                  <p className="text-red-500">Email is required</p>
                  )}
            </div>
            <div>
              <TextField
                fullWidth
                id="company"
                {...register("company", { required: true })}
                type="text"
                required
                label="Company"
                variant="outlined"
                autoComplete="organization"
                />
              {errors.company && (
                  <p className="text-red-500">Company is required</p>
                  )}
            </div>
            <div>
              <TextField
                fullWidth
                id="position"
                {...register("position", { required: true })}
                type="text"
                required
                label="Position"
                variant="outlined"
                autoComplete="off"
                />
              {errors.position && (
                  <p className="text-red-500">Position is required</p>
                  )}
            </div>
            <div>
              <TextField
                fullWidth
                id="avatar_url"
                {...register("avatar_url", { required: true })}
                type="text"
                required
                label="Avatar URL"
                variant="outlined"
                autoComplete="off"
                />
              {errors.avatar_url && (
                  <p className="text-red-500">Avatar URL is required</p>
                  )}
            </div>
            <div>
              <TextField
                fullWidth
                id="year_entered"
                {...register("year_entered", { required: true })}
                type="number"
                required
                label="Year Entered"
                variant="outlined"
                />
              {errors.year_entered && (
                  <p className="text-red-500">Year Entered is required</p>
                  )}
            </div>
            <div>
                <TextField
                  fullWidth
                  id="password"
                  {...register("password", { required: true })}
                  type="password"
                  required
                  label="Password"
                  variant="outlined"
                />
                {errors.password && (
                  <p className="text-red-500">Password is required</p>
                )}
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
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
</div>
  );
};

export default RegisterPage;
