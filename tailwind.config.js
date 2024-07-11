import withMT from "@material-tailwind/react/utils/withMT";
 
 module.exports = withMT({
   content: [
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
   ],
   theme: {
     extend: {},
   },
   plugins: [
    require('flowbite/plugin')  
   ],
 });
 