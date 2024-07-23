import React, { useContext } from 'react'
import myContext from '../../context/myContext'

const UserDetail = () => {


   const context = useContext(myContext);
   const {getAllUser} = context;

   console.log(getAllUser)


  return (
    <div>
    <div>
        <div className="py-5 flex justify-between items-center">
            {/* text  */}
            <h1 className=" text-xl text-black font-bold">All User</h1>
        </div>
        {/* table  */}
        <div className="w-full overflow-x-auto">
            <table className="w-full text-left border border-collapse sm:border-separate border-neutral-900 rounded-2xl text-black" >
                <tbody>
                    <tr>
                        <th scope="col"
                            className="h-12 px-6 text-md border-l first:border-l-0 border-neutral-900 text-black  font-bold fontPara">
                        S.No  
                        </th>
                        <th scope="col"
                            className="h-12 px-6 text-md border-l first:border-l-0 border-neutral-900 text-black font-bold fontPara">
                        Name 
                        </th>
                        <th scope="col"
                            className="h-12 px-6 text-md border-l first:border-l-0 border-neutral-900 text-black font-bold fontPara">
                        Email
                        </th>
                        <th scope="col"
                            className="h-12 px-6 text-md border-l first:border-l-0 border-neutral-900 text-black font-bold fontPara">
                        Uid
                        </th>
                            <th scope="col"
                            className="h-12 px-6 text-md border-l first:border-l-0 border-neutral-900 text-black font-bold fontPara">
                        Role
                        </th>
                        <th scope="col"
                            className="h-12 px-6 text-md border-l first:border-l-0 border-neutral-900 text-black font-bold fontPara">
                        Date
                        </th>
                    </tr>

                    {
                        getAllUser.map((user , index)=>{
                            const {name , email , uid , role , date } = user;
                            return(
                                <tr  key={index} className="text-pink-300">
                                <td 
                                className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-neutral-900 text-black ">
                                {index + 1 } 
                                </td>
                                <td 
                                className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-neutral-900 text-black first-letter:uppercase ">
                                    {name}
                                </td>
                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-neutral-900 text-black cursor-pointer ">
                                    {email}
                                </td>
                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-neutral-900 text-black cursor-pointer ">
                                    {uid}
                                </td>
                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-neutral-900 text-black cursor-pointer ">
                                    {role}
                                </td>
                                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-neutral-900 text-black cursor-pointer ">
                                    {date}
                                </td>
                                   </tr>
                            )
                        

                           
                        })
                    }


                     
                </tbody>
            </table>
        </div>
    </div>
</div>
    

  )
}

export default UserDetail