import React, { useContext, useState } from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import myContext from '../../context/myContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../firebase/FirebaseConfig';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import Loader from '../../loader/Loader';
import { EyeIcon } from 'lucide-react';
import { EyeSlashIcon } from '@heroicons/react/24/solid';


   

const Signup = () => {

  
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

    const context = useContext(myContext) ;
    const {loading , setLoading } = context;

    const navigate = useNavigate();

    const [values , setValues ] = useState({
      name : "",
      email:"",
      password: "",
      currentPassword: "",
      role:"user",

    });

    const handleSignUp = async () => {
      if(values.name === "" || values.email === "" || values.password === "" || values.currentPassword === ""){
        return toast.error("All Fields are required");
      }
     
      if(values.password.length < 6 ){
        return toast.error("password should have at least 6 characters");
      }

      if(values.password !== values.currentPassword){
        return toast.error("password and current password should be same");
      }

      setLoading(true);

      try{
        const users = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const user ={
          name : values.name,
          email : users.user.email,
          uid : users.user.uid,
          role : values.role,
          time : Timestamp.now(),
          date : new Date().toLocaleString(
            "en-US",
            {
              month : "short",
              day : "2-digit",
              year : "numeric"
            }
          )
        }

        const userReference  = collection(fireDB , "user");
        
        addDoc(userReference , user);

        setValues({
          name : "",
          email : "",
          password :"",
          currentPassword : "",
        })

        toast.success("Signup Succcessfully");

        setLoading(false);

        navigate("/login");

      }catch(error){
        console.log(error);
        setLoading(false);
      }
    }


  return (
    <div className='flex flex-col items-center justify-center'>
      {
        loading && <Loader/>
      }
  <Card className="transparent " shadow={false}>
    <Typography variant="h4" color="blue-gray">
      Sign Up
    </Typography>
    <Typography className="mt-1 font-normal">
      Nice to meet you! Enter your details to register.
    </Typography>
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Your Name
        </Typography>
        <Input
          type='text'
          placeholder="Enter your name "
          name = "name"
          value = {values.name}
          onChange={(e)=>{
            setValues({...values , name : e.target.value});
          }}
          size="lg"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Your Email
        </Typography>
        <Input
         type='email'
         placeholder="Enter your email"
         name = "email"
         value = {values.email}
         onChange={(e)=>{
           setValues({...values , email : e.target.value});
         }}
          size="lg"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Password
        </Typography>
        <Input
         placeholder="********"
         name = "password"
         value = {values.password}
         onChange={(e)=>{
           setValues({...values , password : e.target.value});
         }}
          size="lg"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "hidden",
          }}
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
         <Typography variant="h6" color="blue-gray" className="-mb-3">
          Current Password
        </Typography>
        <Input
            placeholder="********"
            name = "currentPassword" 
           value = {values.currentPassword}
           onChange={(e)=>{
             setValues({...values , currentPassword : e.target.value});
           }}
          size="lg"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "hidden",
          }}
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
     
      <Button onClick={handleSignUp}  className="mt-6" fullWidth>
        sign up
      </Button>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account?{" "}
        <a href="/login" className="font-medium text-gray-900 underline">
          Sign In
        </a>
      </Typography>
    </form>
  </Card>
    </div>
  
  )
}

export default Signup