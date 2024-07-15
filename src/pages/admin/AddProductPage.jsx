import React, { useContext, useState } from 'react'
import myContext from '../../context/myContext'
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { fireDB, store } from '../../firebase/FirebaseConfig';
import { v4 } from 'uuid';
import toast from 'react-hot-toast';
import Loader from '../../loader/Loader';


const AddProductPage = () => {
  
  const context = useContext(myContext);
  const {loading , setLoading } = context;

  const navigate = useNavigate();

    const [product , setProduct ] = useState({
      title:"",
      price : "",
      productImageUrl : "",
      description : "",
      quantity : 1,
      time :  Timestamp.now(),
      date : new Date().toLocaleString(
        "en-US",
        {
          month : "short",
          day : "2-digit",
          year : "numeric",
        }
      )
    });

   

    const handleChange = (e) => {
      setProduct({ ...product, [e.target.name] : e.target.value });
    };

    const handleUpload = (e) =>{
      // console.log(e.target.files[0]);
      const imgs = ref(store, `Img/${v4()}`);
      uploadBytes(imgs , e.target.files[0]).then(data=>{
        // console.log(data, "imgs");
        getDownloadURL(data.ref).then(val=>{
          // console.log(val)
          setProduct({ ...product, [e.target.name] : val });
        })
      })
    }

    console.log(product)

     const handleSubmit = async (e)=>{
          e.preventDefault();
          
          if(product.title === "" || product.productImageUrl === "" || product.description === "" || product.price === ""){
            return toast.error("all fields are required");
          }

          setLoading(true);

          try{
            const productRef = collection(fireDB , 'product');
            await addDoc(productRef , product);
            toast.success("Add Product Successfully");
            navigate('/admin-dashboard');
            setLoading(false);
          }catch(error){
            console.log(error)
            setLoading(false)
            toast.error("Add Product failed"); 
          }
     }




  return (
    <div>
      <div className=''>{loading && <Loader/>}</div>
    <div className='flex justify-center items-center h-screen'>
   
        {/* Login Form  */}
        <div className="login_Form px-8 py-6 bg-white p-8 border-2 border-neutral-400 rounded-3xl shadow-md">
            {/* Top Heading  */}
            <div className="mb-5">
                <h2 className='text-center text-2xl font-bold text-black '>
                  Add Product
                </h2>
            </div>
            {/* Input One  */}
            <div className="flex flex-col justify-center items-center mb-4">
                 <label className='text-xl mb-1'>Product Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder='Product Title'
                    className=' text-black bg-white p-8 border-2 border-neutral-400 rounded-md  px-2 py-2 w-96 outline-none placeholder-blue-gray-200'
                    value = {product.title} 
                    onChange={(e) => handleChange(e)}
                />
            </div>
            {/* Input Two  */}
           
            {/* Input Three  */}
            <div className="flex flex-col justify-center items-center mb-3">
            <label className='text-xl mb-1'>Upload Product Image</label>
                <input
                    name = "productImageUrl"
                    type="file"
                    placeholder='Product Image Url'
                    className=' text-black bg-white p-8 border-2 border-neutral-400 rounded-md  px-2 py-2 w-96 outline-none placeholder-blue-gray-200'                     
                    onChange={(e)=>handleUpload(e)}
                 
               />
            </div>
            {/* Input Four  */}
            <div className="flex flex-col justify-center items-center mb-3">
            <label className='text-xl mb-1'>Product Description</label>
                <textarea
                 name="description" 
                 placeholder="Product Description" 
                 rows="5" 
                 className=" w-full px-2 py-1 text-black bg-white border-2 border-neutral-400 rounded-md outline-none placeholder-blue-gray-200 "
                 value = {product.description} 
                 onChange={(e) => handleChange(e)}
                 >
                </textarea>
            </div>

            <div className="flex flex-col justify-center items-center mb-3">
            <label className='text-xl mb-1 '>Product Price</label>
                <input
                    type="number"
                    name = "price"
                    placeholder='Product Price'
                    className=' text-black bg-white p-8 border-2 border-neutral-400 rounded-md  px-2 py-2 w-96 outline-none placeholder-blue-gray-200'
                    value = {product.price} 
                    onChange={(e) => handleChange(e)}
                />
            </div>


            {/* Add Product Button  */}
            <div className="flex flex-col justify-center items-center mb-3">
                <button
                    type='button'
                    className='bg-white border-2 border-neutral-400 rounded-md hover:bg-blue-gray-200 w-full text-black text-center py-2 font-bold '
                    onClick={(e)=>{handleSubmit(e)}}
                >
                  Add Product
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default AddProductPage