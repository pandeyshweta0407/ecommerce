import React from 'react'
import { useNavigate } from 'react-router-dom'

const productData =[
    {
      id:1,
      image:"https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80",
      title:"Apple AirPods",
      price:" $95.00 " ,
      desc :" With plenty of talk and listen time, voice-activated Siri access, and anavailable wireless charging case.",
      quantity:"2",
    },
    {
      id:2,
      image:"https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80",
      title:"Apple AirPods",
      price:" $95.00 " ,
      desc :" With plenty of talk and listen time, voice-activated Siri access, and anavailable wireless charging case.",
      quantity:"2",
    },
    {
      id:3,
      image:"https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80",
      title:"Apple AirPods",
      price:" $95.00 " ,
      desc :" With plenty of talk and listen time, voice-activated Siri access, and anavailable wireless charging case.",
      quantity:"2",
    }
]


const HomePageProductCard = () => {

   const navigate = useNavigate();

  return (
    <div className=' flex flex-col items-center justify-center w-full '  >
       <div className='text-3xl text-black my-4 '>ALL Products</div>
          <div className='container px-5 py-5 mx-auto flex flex-row flex-wrap items-center justify-center '  >
          {
              productData.map((item )=>{
                 const {id ,image , title , price , desc } = item;
                 return (
                  <div key ={id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 ml-2.5">
                  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                    <img
                      onClick={()=>navigate('/productinfo')}
                      src={image}
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
                    {desc}
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
  )
}

export default HomePageProductCard