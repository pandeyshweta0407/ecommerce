import { Typography } from "@material-tailwind/react";

// className="w-10"

const Footer = () => {
  return (
    <footer className="w-full bg-white p-8 border-2 border-neutral-400 rounded-3xl">
    <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
       <div className="mr-4 cursor-pointer text-2xl py-1.5 font-medium text-transparent bg-gradient-to-r bg-clip-text  from-blue-500 to-green-500">Response</div>

      <ul className="flex flex-row flex-wrap items-center justify-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal underline transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal underline transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal underline transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal underline transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </div>
    <hr className="my-8 border-blue-gray-50" />
    <Typography color="blue-gray" className="text-center font-normal ">
      &copy; 2024 <span className="text-transparent bg-gradient-to-r bg-clip-text  from-blue-500 to-green-500">Response</span>.All Rights Reserved.
    </Typography>
  </footer>
  )
}

export default Footer
