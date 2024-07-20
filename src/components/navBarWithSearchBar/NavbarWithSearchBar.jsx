import React from "react";
import {
  Navbar,
  Typography,

  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { House } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { Grid2X2 } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const NavbarWithSearchBar = () => {

  const user = JSON.parse(localStorage.getItem('users'));

  const navigate = useNavigate();

  const [openNav, setOpenNav] = React.useState(false);

  const cartItems = useSelector((state)=>state.cart);

  

     
 





  
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium hover:text-color "
      >
       <House />
        <Link to="/" className="flex items-center underline ">Home</Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Grid2X2 />
        <a href="/allproduct" className="flex items-center">
          All Products
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
         <ShoppingCart />
        <a href="/cart" className="flex items-center">
          Cart({cartItems.length})
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <CircleUserRound />
        <a href="/user-dashboard" className="flex items-center">
          Account
        </a>
      </Typography>

    </ul>
  );



  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
    <div className="container mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
      <Typography
        as="a"
        href="/"
        className="mr-4 cursor-pointer text-2xl py-1.5 font-medium text-transparent bg-gradient-to-r bg-clip-text  from-blue-500 to-green-500"
      >
        Response
      </Typography>
      <div className="hidden lg:block">{navList}</div>
     
      <IconButton
        variant="text"
        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
        ripple={false}
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </IconButton>
    </div>
    <Collapse open={openNav}>
      <div className="container mx-auto">
        {navList}
       
      </div>
    </Collapse>
  </Navbar>
  )
}

export default  NavbarWithSearchBar









