import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Carrepair from "../../Pages/CarRepair/Carrepair";
import Checkout from "../../Pages/Checkout/Checkout";
import ForgetPass from "../../Pages/ForgetPassword/ForgetPass";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Newor from "../../Pages/Orders/Newor";
import Orders from "../../Pages/Orders/Orders";
import ResetPassword from "../../Pages/ResetPassword/ResetPassword";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/checkout/:id',
          element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5006/service/${params.id}`)
        },
        {
          path:'/forgotpass',
          element:<ForgetPass></ForgetPass>
        },
        {
          path:'/reset-password',
          element:<ResetPassword></ResetPassword>
        },
        {
          path:'/orders',
          element:<PrivateRoute> <Orders></Orders></PrivateRoute>
        },
        {
          path:'/carrepair',
          element:<Carrepair></Carrepair>
        },
        {
          path:'/new',
          element:<Newor></Newor>
        }
      ]
    }
  ]);
  export default router;