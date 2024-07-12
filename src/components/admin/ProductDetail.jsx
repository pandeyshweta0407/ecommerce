import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/myContext'
import Loader from '../../loader/Loader';

const ProductDetail = () => {
     
   const context = useContext(myContext);
   const {loading , getAllProduct} = context;

   console.log(getAllProduct);


  return (
    <div>
    <div className="py-5 flex justify-between items-center">
        {/* text  */}
        <h1 className=" text-xl text-black-300 font-bold">All Product</h1>
        {/* Add Product Button  */}
        <Link to={'/addproduct'}>
            <button className="px-5 py-2 bg-white-50 border border-balck-100 rounded-lg">Add Product</button>
        </Link>
    </div>

 <div className='flex justify-center items-center'  >
 {
    loading && <Loader/>
  }
 </div>

    {/* table  */}
    <div className="w-full overflow-x-auto mb-5">
        <table className="w-full text-left border-2 border-collapse sm:border-separate rounded-xl border-stone-800 text-black-400" >
            <tbody>
                <tr >
                    <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-stone-100 text-slate-700 bg-slate-100 font-bold fontPara">S.No.</th>
                    <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-stone-100 text-slate-700 bg-slate-100 font-bold fontPara">Image</th>
                    <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-stone-100 text-slate-700 bg-slate-100">Title</th>
                    <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-stone-100 text-slate-700 bg-slate-100">Price</th>
                    <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-stone-100 text-slate-700 bg-slate-100">Date</th>
                    <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-stone-100 text-slate-700 bg-slate-100">Action</th>
                </tr>
                {
                    getAllProduct.map((item, index)=>{

                        const {id , title , price , date , productImageUrl} = item

                        return(
                            <tr  key={index}  className="text-black-300">
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-stone-100 stroke-slate-500 text-slate-500 ">
                      {index+1}.
                    </td>
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-stone-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                        <div className='flex justify-center items-center'   ><img className="w-20" src={productImageUrl} alt={title} /></div>
                    </td>
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-stone-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                        {title}
                    </td>
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-stone-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                        ₹{price}
                    </td>
                  
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                        {date}
                    </td>
                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer ">
                      <div className='flex flex-col'>
                        <button className='bg-green-300 rounded-md  mb-2 hover:bg-green-500 text-black '>edit</button>
                        <button className='bg-red-300  rounded-md  mb-2 hover:bg-red-500 text-black' >Delete</button>
                      </div>
                    </td>
                   
                </tr>
                        
                        
                        
                )})}
















            </tbody>
        </table>
    </div>
</div>
  )
}

export default ProductDetail