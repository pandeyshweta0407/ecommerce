import { useEffect, useState } from "react"
import MyContext from "./myContext"
import { fireDB } from "../firebase/FirebaseConfig";
import { collection, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore";

const MyState = ({children}) => {
  const [loading , setLoading] = useState(false);
  const [getAllProduct , setGetAllProduct] = useState([]);

  const getAllProductFunction = async ()=>{
    setLoading(true);
    try{
      const q = query(collection(fireDB , "products"),orderBy('time'));
      const data = onSnapshot(q, (QuerySnapshot)=>{
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({...doc.data() , id: doc.id});
        });
        setGetAllProduct(productArray);
        setLoading(false);
      })
       return () => data;

    }catch(error){
    console.log(error)
    }
  }


   useEffect(()=>{
      getAllProductFunction();
   },[]);






  return (
    <MyContext.Provider  value = {{
      loading, setLoading , getAllProduct
    }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyState