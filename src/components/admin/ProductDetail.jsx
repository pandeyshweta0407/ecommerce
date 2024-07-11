import React from 'react'
import { Link } from 'react-router-dom'

const ProductDetail = () => {
  return (
    <div>
            <div className="py-5 flex justify-between items-center">
                {/* text  */}
                <h1 className=" text-xl text-black-300 font-bold">All Product</h1>
                {/* Add Product Button  */}
                <Link to={'/addproduct'} ><button className="px-5 py-2  bg-white p-8 border-2 border-neutral-400 rounded-3xl">Add Product</button></Link>
            </div>
            {/* table  */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate  bg-white p-8 border-2 border-neutral-400 rounded-3xl text-black-400" >
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 bg-white p-8 border-2 border-neutral-400 rounded-3xl text-black-700 bg-slate-100 font-bold fontPara">S.No.</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0  bg-white p-8 border-2 border-neutral-400 rounded-3xl text-black-700  bg-slate-100">Location Name</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0  bg-white p-8 border-2 border-neutral-400 rounded-3xl text-black-700  bg-slate-100">Action</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0  bg-white p-8 border-2 border-neutral-400 rounded-3xl text-black-700  bg-slate-100">Action</th>
                        </tr>
                        <tr className="text-black-300">
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 bg-white p-8 border-2 border-neutral-400 rounded-3xl stroke-slate-500 text-slate-500 ">
                            1
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0  bg-white p-8 border-2 border-neutral-400 rounded-3xl stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                {'name'}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0  bg-white p-8 border-2 border-neutral-400 rounded-3xl stroke-slate-500 text-slate-500 text-green-500 cursor-pointer ">
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0  bg-white p-8 border-2 border-neutral-400 rounded-3xl stroke-slate-500 text-slate-500 text-red-500 cursor-pointer ">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default ProductDetail