import React, { useContext, useEffect, useState } from 'react'
import Loader from '../../loader/Loader';
import myContext from '../../context/myContext';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import toast from 'react-hot-toast';

const UpadateProductPage = () => {

  const context = useContext(myContext);
  const {loading , setLoading ,   getAllProductFunction} = context;

    const navigate = useNavigate();
    const {id} = useParams();
    // console.log(id)


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

      const getSingleProductFunction = async ()=>{
        setLoading(true);
        try{
          const productTemp = await getDoc(doc(fireDB, "product" , id))
          const product = productTemp.data();
          console.log(product)

          setProduct({
            title:product?.title,
            price : product?.price,
            productImageUrl : product?.productImageUrl,
            description : product?.description,
            quantity : product?.quantity,
            time :  product?.time,
            date : product?.date,
        
          })
          setLoading(false);
        }catch(error){
            console.log(error)
            setLoading(false);
           
        }
      } 

      useEffect(()=>{
          getSingleProductFunction();
      },[]);
  
 
  
       const handleSubmit = async (e)=>{
            e.preventDefault();
            setLoading(true);
  
            try{
              
              await setDoc(doc(fireDB , 'product' , id), product);
              toast.success("Product updated Successfully");
              getAllProductFunction();
              setLoading(false);
              navigate('/admin-dashboard');
            
            }catch(error){
              console.log(error)
              setLoading(false)
              toast.error("Update Product failed"); 
            }
       }
  
  
  
  


  return (
    <div>
    {loading && <Loader/>}
  <div className='flex justify-center items-center h-screen'>
      {/* Login Form  */}
      <div className="login_Form px-8 py-6 bg-white p-8 border-2 border-neutral-400 rounded-3xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
              <h2 className='text-center text-2xl font-bold text-black '>
                Update Product
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
                Update Product
              </button>
          </div>
      </div>
  </div>
</div>
  )
}

export default UpadateProductPage