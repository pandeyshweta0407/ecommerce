import React, { useContext } from 'react'
import Layout from "../../components/layout/Layout";
import User from '../../assets/user.png';
import { useNavigate } from 'react-router-dom';
import myContext from '../../context/myContext';

const UserDashBoard = () => {

  const user = JSON.parse(localStorage.getItem('users'));

  const navigate = useNavigate();

  const logout = () =>{
      localStorage.clear('users');
      navigate("/login");
  }

  
  const context = useContext(myContext);
  const{loading , getAllOrder} = context; 
  


  return (
    <Layout>
    <div className=" container mx-auto px-4 py-5 lg:py-8">
        {/* Top  */}
        <div className="top ">
            {/* main  */}
            <div className="py-5 bg-white p-8 border-2 border-neutral-400 rounded-3xl flex flex-col justify-center items-center">
                {/* image  */}
                <div className=" w-20 m-5  ">
                    <img src={User} alt="" />
                </div>
                {/* text  */}
                <div className="">
                    <h1 className=" text-center text-lg"><span className=" font-bold">Name : </span>{user?.name}</h1>
                    <h1 className=" text-center text-lg  my-2 "><span className=" font-bold">Email : </span>{user?.email}</h1>
                    <h1 className=" text-center text-lg  my-2 "><span className=" font-bold">Date : </span>{user?.date}</h1>
                    <h1 className=" text-center text-lg  my-2 "><span className=" font-bold">Role : </span>{user?.role}</h1>
                    <button className = "bg-red-200 rounded-lg px-2 py-2 my-2 hover:bg-red-500   " onClick={logout} >Logout</button>
                
                </div>
            </div>
        </div>
        {/* bottom  */}
        <div className="bottom">
            {/* main 1 */}
            <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
                {/* text  */}
                <h2 className=" text-2xl lg:text-3xl font-bold">Order Details</h2>
                {/* main 2 */}
                {getAllOrder.filter((obj) => obj.userId === user?.uid).map((order, index) => {
                            // console.log(order);
                            return (
                                <div key={index}>
                                    {order.cartItems.map((item, index) => {
                                        // console.log('item', item);
                                        const { id, date, quantity, price, title, productImageUrl, category } = item
                                        // console.log('order', order)
                                        const { status } = order
                                        return (
                                            <div key={index} className="mt-5 flex flex-col overflow-hidden rounded-xl border border-pink-100 md:flex-row">
                                                {/* main 3  */}
                                                <div className="w-full border-r border-pink-100 bg-pink-50 md:max-w-xs">
                                                    {/* left  */}
                                                    <div className="p-8">
                                                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold text-black">Order Id</div>
                                                                <div className="text-sm font-medium text-gray-900">#{id}</div>
                                                            </div>
                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold">Date</div>
                                                                <div className="text-sm font-medium text-gray-900">{date}</div>
                                                            </div>
                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold">Total Amount</div>
                                                                <div className="text-sm font-medium text-gray-900">₹ {price * quantity}</div>
                                                            </div>
                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold">Order Status</div>                              
                                                                  <div className="text-sm font-medium text-green-800 first-letter:uppercase">{status}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* right  */}
                                                <div className="flex-1">
                                                    <div className="p-8">
                                                        <ul className="-my-7 divide-y divide-gray-200">
                                                            <li
                                                                className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                                                            >
                                                                <div className="flex flex-1 items-stretch">
                                                                    <div className="flex-shrink-0">
                                                                        <img
                                                                            className="h-40 w-40 rounded-lg border border-gray-200 object-contain"
                                                                            src={productImageUrl}
                                                                            alt="img"
                                                                        />
                                                                    </div>
                                                                    <div className="ml-5 flex flex-col justify-between">
                                                                        <div className="flex-1">
                                                                            <p className="text-sm font-bold text-gray-900">{title}</p>
                                                                            
                                                                        </div>
                                                                        <p className="mt-4 text-sm font-medium text-gray-500">x {quantity}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="ml-auto flex flex-col items-end justify-between">
                                                                    <p className="text-right text-sm font-bold text-gray-900">₹ {price}</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
            </div>
        </div>
    </div>
</Layout>
  )
}

export default UserDashBoard