import { Navigate } from "react-router-dom";

export  const ProdectedRouteForUser = ({children}) => {

  const user = JSON.parse(localStorage.getItem("users"));
  if(user?.role === "user" ){
    return children;
  }else{
    return <Navigate to={'/login'}/>
  }
}

