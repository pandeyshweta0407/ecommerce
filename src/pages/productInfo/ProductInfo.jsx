import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'

import {
  Button,
  IconButton,
  Rating,
  Typography,
} from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/outline";
import myContext from '../../context/myContext';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';


const ProductInfo = () => {

   const context = useContext(myContext);
   const {loading , setLoading} = context;
   
   const [product , setProduct ] = useState('');
   
   const {id} = useParams()

   const getProduct = async () =>{
    setLoading(true);
    try{
      const productTemp = await getDoc(doc(fireDB , "product" , id));
      console.log(productTemp.data())
      setProduct(productTemp.data());
      setLoading(false);
    }catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(()=>{
      getProduct();
  },[]);







  return (
     <Layout>
        <section className="py-16 px-8 text-black">
      <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
        <img
          src={product?.productImageUrl}
          alt="pink blazer"
          className="h-[36rem]"
        />
        <div className='flex flex-col items-start'>
          <Typography className="mb-4 w-10" variant="h3">
             {product?.title}
          </Typography>
          <Typography variant="h5 ">₹{product?.price}</Typography>
          <Typography className="!mt-4 m-2 text-base font-normal leading-[27px] !text-black">
           {product.description}
          </Typography>
         
        
          
          <div className="my-8   flex justify-center items-center gap-3 md:w-1/2 ">
            <Button color="gray" className="w-full">
              Add to Cart
            </Button>
           
          </div>
        </div>
      </div>
    </section>
     </Layout>
  )
}

export default ProductInfo