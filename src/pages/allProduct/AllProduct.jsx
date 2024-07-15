import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/myContext';
import Loader from '../../loader/Loader';




const AllProduct = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const {loading , getAllProduct} = context;


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
                    <button
                      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                      type="button">
                      Add to Cart
                    </button>
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