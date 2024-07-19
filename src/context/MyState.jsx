import { useEffect, useState } from "react"
import MyContext from "./myContext"
import { fireDB } from "../firebase/FirebaseConfig";
import { collection, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore";

const MyState = ({children}) => {
  const [loading , setLoading] = useState(false);
  const [getAllProduct , setGetAllProduct] = useState([]);
  const [getAllOrder, setGetAllOrder] = useState([]);



  const getAllProductFunction = async ()=>{
    setLoading(true);
    try{
      const q = query(collection(fireDB , "product"),orderBy('time'));
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

    
  const getAllOrderFunction = async ()=>{
    setLoading(true);
    try{
      const q = query(collection(fireDB , "order"),orderBy('time'));
      const data = onSnapshot(q, (QuerySnapshot)=>{
        let orderArray = [];
        QuerySnapshot.forEach((doc) => {
          orderArray.push({...doc.data() , id: doc.id});
        });
        setGetAllOrder(orderArray);
        setLoading(false);
      })
       return () => data;

    }catch(error){
    console.log(error)
    }
  }



   useEffect(()=>{
      getAllProductFunction();
      getAllOrderFunction();
   },[]);






  return (
    <MyContext.Provider  value = {{
      loading, setLoading , getAllProduct , getAllProductFunction , getAllOrder
    }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyState