import React, { useContext } from 'react'
import myContext from '../../context/myContext';

const OrderDetail = () => {

    const context = useContext(myContext);
    const {getAllOrder , deleteOrder } = context;
    console.log(getAllOrder);
 
  return (    
    <div>
        <div className="py-5">
            <h1 className=" text-xl text-black font-bold">All Order</h1>
        </div>
        <div className="w-full overflow-x-auto">
            <table className="w-full text-left border border-collapse sm:border-separate border-neutral-900 rounded-2xl text-black" >
                <thead key="thead">
                    <tr className='' >
                        <th scope="col" className="h-12 px-2 text-md border-l first:border-l-0  border-neutral-900 text-black  font-bold fontPara">
                         S.No.
                        </th>
                        <th scope="col"
                            className="h-12 px-2 text-md font-bold fontPara border-l first:border-l-0 border-neutral-900 text-black">
                        Order Id 
                        </th>
                        <th scope="col"
                            className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0  border-neutral-900 text-black">
                        Image  
                        </th>
                        <th scope="col"
                            className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0  border-neutral-900 text-black">
                        Tittle 
                        </th>
                        <th scope="col"
                            className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0  border-neutral-900 text-black">
                        Price
                        </th>
                        <th scope="col"
                            className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0  border-neutral-900 text-black">
                        Quantity
                        </th>
                        <th scope="col"
                            className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0  border-neutral-900 text-black">
                        Total Price 
                        </th>
                        <th scope="col"
                            className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0  border-neutral-900 text-black">
                        Status
                        </th>
                        <th scope="col"
                            className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0  border-neutral-900 text-black">
                        Name 
                        </th>
                        <th scope="col"
                            className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0  border-neutral-900 text-black">
                        Address
                        </th>
                        <th scope="col"
                            className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0  border-neutral-900 text-black">
                        Pincode 
                        </th>
                        <th scope="col"
                            className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0  border-neutral-900 text-black">
                        Phone number 
                        </th>
                        <th scope="col"
                            className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0  border-neutral-900 text-black">
                        Email
                        </th>
                        <th scope="col"
                            className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0  border-neutral-900 text-black">
                        Date
                        </th>
                        <th scope="col"
                            className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0  border-neutral-900 text-black">
                        Action
                        </th>
                    </tr>

                   </thead>

                   <tbody key="tbody">
                    {
                        getAllOrder.map((order , index)=>{
                            return (
                             <>
                              {
                                order.cartItems.map((item)=>{
 
                                    const {id , productImageUrl , title , price , quantity } =item;

                                    return (
                                        <tr key={index} className="text-black">
                                <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0  border-neutral-900 text-black">
                                {index + 1}
                                </td>
                                <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0  border-neutral-900 text-black ">
                                    {id}
                                </td>
                                <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0  border-neutral-900 text-black first-letter:uppercase ">
                                    <img src={productImageUrl} alt="" />
                                </td>
                                <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0  border-neutral-900 text-blackfirst-letter:uppercase ">
                                    {title}
                                </td>
                                <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0 border-neutral-900 text-black first-letter:uppercase ">
                                    ₹ {price}
                                </td>
                                <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0  border-neutral-900 text-black first-letter:uppercase ">
                                    {quantity}
                                </td>
                                <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0  border-neutral-900 text-black first-letter:uppercase ">
                                    ₹ {quantity * price }
                                </td>
                                <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0  border-neutral-900 text-blackfirst-letter:uppercase ">
                                    {order.status}
                                </td>
                                <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0  border-neutral-900 text-black first-letter:uppercase ">
                                    {order.addressInfo.name}
                                </td>
                                <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0  border-neutral-900 text-black first-letter:uppercase ">
                                    {order.addressInfo.address}
                                </td>
                                <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0  border-neutral-900 text-black first-letter:uppercase ">
                                    {order.addressInfo.pincode}
                                </td>
                                <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0  border-neutral-900 text-black first-letter:uppercase ">
                                    {order.addressInfo.mobileNum}
                                </td>
                                <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0  border-neutral-900 text-black first-letter:uppercase ">
                                    {order.email}
                                </td>
                                <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0  border-neutral-900 text-black first-letter:uppercase ">
                                    {order.date}
                                </td>
                                <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0  border-neutral-900 text-black  cursor-pointer ">
                                <button 
                                onClick={() => { deleteOrder(order.id) }}   
                                className="bg-red-300 text-xl  rounded-md  mb-2 hover:bg-red-500 text-black border-2 border-red-400"
                                >
                                Delete
                                </button>
                                </td>
                            </tr>
                                    )
                                })
                              }
                             
                             </>
                            )
                        })
                
                    }


                   
                </tbody>
            </table>
        </div>
    </div>

  )
}

export default OrderDetail