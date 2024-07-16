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
import Loader from '../../loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';
import toast from 'react-hot-toast';


const ProductInfo = () => {

   const context = useContext(myContext);
   const {loading , setLoading} = context;
   
   const [product , setProduct ] = useState('');
   
   const {id} = useParams()

   const getProduct = async () =>{
    setLoading(true);
    try{
      const productTemp = await getDoc(doc(fireDB , "product" , id));
      // console.log(productTemp.data())
      setProduct({...productTemp.data() , id : productTemp.id});
      setLoading(false);
    }catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item)=>{
    dispatch(addToCart(item));
    toast.success("Added to cart")
  }

  const deleteCart = (item)=>{
    dispatch(deleteFromCart(item));
    toast.success("deleted from cart")
  }

  useEffect(()=>{
    localStorage.setItem('cart' , JSON.stringify(cartItems));
  },[cartItems]);

  useEffect(()=>{
      getProduct();
  },[]);







  return (
     <Layout>
        <section className="py-16 px-8 text-black border-2 border-neutral-500 rounded-lg  my-5 ">
        
         {
          loading ? <> 
              <Loader/> 
          </> :  <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
      
      <div className=''>
      <img
         src={product?.productImageUrl}
         alt="pink blazer"
         className="w-full border-2 border-neutral-500 rounded-lg"
       />
      </div>



       <div className='flex flex-col justify-center items-center mx-5 '>
         <Typography className="mb-4" variant="h3">
            {product?.title}
         </Typography>
         <Typography variant="h5">₹{product?.price}</Typography>
         <Typography className="!mt-4 m-2 text-base font-normal leading-[27px] !text-black">
          {product.description}
         </Typography>
        
       
         
         <div className="my-8   flex justify-center items-center gap-3 md:w-1/2 ">
                {
                     cartItems.some((p)=> p.id === product.id) ? 
                     <button onClick={()=>{deleteCart(product)}} className=" bg-red-500 hover:bg-red-900 w-full text-white py-[4px] rounded-lg font-bold">
                     Delete from Cart 
                    </button> :
                     <button onClick={()=>{addCart(product)}} className=" bg-green-500 hover:bg-green-900 w-full text-white py-[4px] rounded-lg font-bold">
                     Add to Cart 
                    </button>
                  }
          
         </div>
       </div>
     </div>
         }
    
    </section>
     </Layout>
  )
}

export default ProductInfo