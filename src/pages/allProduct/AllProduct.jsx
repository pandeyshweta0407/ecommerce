import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/myContext';
import Loader from '../../loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';
import toast from 'react-hot-toast';




const AllProduct = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const {loading , getAllProduct} = context;

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


  return (
    <Layout>
         <div className=' flex flex-col items-center justify-center w-full '  >
       <div className='text-3xl text-black my-5'>ALL Products</div>
          <div className='container px-5 py-5 mx-auto flex flex-row flex-wrap items-center justify-center '  >
            {loading && <Loader/>}
          {
              getAllProduct.map((item )=>{
                const {id , title , price , description , productImageUrl } = item;
                 return (
                  <div key ={id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 ml-2.5">
                  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                    <img
                      onClick={()=>navigate(`/productinfo/${id}`)}
                      src={productImageUrl}
                      alt="card-image" className="object-cover w-full h-full" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                       {title}
                      </p>
                      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                     {price}
                      </p>
                    </div>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                    {description}
                    </p>
                  </div>
                  <div className="p-6 pt-0">  
                  {
                     cartItems.some((p)=> p.id === item.id) ? 
                     <button onClick={()=>{deleteCart(item)}} className=" bg-red-500 hover:bg-red-900 w-full text-white py-[4px] rounded-lg font-bold">
                     Delete from Cart 
                    </button> :
                     <button onClick={()=>{addCart(item)}} className=" bg-green-500 hover:bg-green-900 w-full text-white py-[4px] rounded-lg font-bold">
                     Add to Cart 
                    </button>
                  }
                  </div>
                </div> 
                 )
              })
            }


          </div>
    </div>
    </Layout>
  )
}

export default AllProduct