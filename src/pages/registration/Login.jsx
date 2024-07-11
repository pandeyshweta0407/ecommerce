import React, { useContext } from 'react'
import { useState } from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import myContext from '../../context/myContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/FirebaseConfig';

const Login = () => {

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const context = useContext(myContext);
  const {loading , setLoading } = context;

  const navigate = useNavigate();

  const [values , setValues ] = useState({
    email:"",
    password: ""
  });

  const handleLogin = async () =>{
    if(values.email === "" || values.password === "" ){
      return toast.error("All Fields are required");
    }
  
    setLoading(true);
    
    try {
       const users = await signInWithEmailAndPassword(auth , values.email , values.password);
       console.log(users);
       
    } catch (error) {
      console.log(error);
      setLoading(false);
    }










  }
  




  return (
    <section className="grid text-center h-screen items-center p-8">
    <div>
      <Typography variant="h3" color="blue-gray" className="mb-2">
        Sign In
      </Typography>
      <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
        Enter your email and password to sign in
      </Typography>
      <form action="#" className="mx-auto max-w-[24rem] text-left">
        <div className="mb-6">
          <label htmlFor="email">
            <Typography
              variant="small"
              className="mb-2 block font-medium text-gray-900"
            >
              Your Email
            </Typography>
          </label>
          <Input
            type='email'
            placeholder="Enter your email address "
            name="email"
            value = {values.email}
            onChange={(e)=>{
              setValues({...values , email : e.target.value});
            }}
            id="email"
            color="gray"
            size="lg"
            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password">
            <Typography
              variant="small"
              className="mb-2 block font-medium text-gray-900"
            >
              Password
            </Typography>
          </label>
          <Input
           placeholder="********"
           name = "password"
           value = {values.password}
           onChange={(e)=>{
             setValues({...values , password : e.target.value});
           }}
            size="lg"
            labelProps={{
              className: "hidden",
            }}
            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            type={passwordShown ? "text" : "password"}
            icon={
              <i onClick={togglePasswordVisiblity}>
                {passwordShown ? (
                  <EyeIcon className="h-5 w-5" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" />
                )}
              </i>
            }
          />
        </div>
        <Button onClick={handleLogin} color="gray" size="lg" className="mt-6" fullWidth>
          sign in
        </Button>
        <div className="!mt-4 flex justify-end">
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            variant="small"
            className="font-medium"
          >
            Forgot password ?
          </Typography>




        </div>
        <div className="!mt-4 flex justify-center">
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            variant="small"
            className="font-medium"
          >
            or
          </Typography>          
        </div>
        <Button
          variant="outlined"
          size="lg"
          className="mt-6 flex h-12 items-center justify-center gap-2"
          fullWidth
        >
          <img
            src={`https://www.material-tailwind.com/logos/logo-google.png`}
            alt="google"
            className="h-6 w-6"
          />{" "}
          sign in with google
        </Button>
        <Typography
          variant="small"
          color="gray"
          className="!mt-4 text-center font-normal"
        >
          Not registered?{" "}
          <a href="/signup" className="font-medium text-gray-900 underline">
            Create account
          </a>
        </Typography>
      </form>
    </div>
  </section>
  )
}

export default Login