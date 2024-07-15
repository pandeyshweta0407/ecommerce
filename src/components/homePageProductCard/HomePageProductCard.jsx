import React, { useContext, useEffect } from 'react'
import myContext from '../../context/myContext';
import Loader from '../../loader/Loader';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';

const HomePageProductCard = () => {

  const navigate = useNavigate();

  const context = useContext(myContext);
  const { loading , getAllProduct} = context ;

  //   console.log(getAllProduct);

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
    <div className="mt-10">
    {/* Heading  */}
    <div className="">
        <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
    </div>
    {/* main  */}
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">   
             <div>
             {
                loading && <Loader/>
             }
             </div>
            <div className="flex flex-col md:flex-row justify-center items-center flex-wrap m-4 ">
                {getAllProduct.slice(0,8).map((item, index) => {
                    const { id, title, price, description ,productImageUrl } = item
                    return (
                        <div key={index} className="p-4 w-full md:w-4/12  mx-5 my-2  ">
                            <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                <img
                                onClick={()=> navigate(`/productinfo/${id}`)}
                                    className="lg:h-80  h-96 w-full"
                                    src={productImageUrl}
                                    alt="blog"
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                    Response
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        {title.substring(0, 25)}
                                    </h1>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        ₹{price}
                                    </h1>
                                    <div>
                                      {description}
                                    </div>
                                    <div className="flex justify-center my-4 ">
                                        
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
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
</div>

  )
}

export default HomePageProductCard