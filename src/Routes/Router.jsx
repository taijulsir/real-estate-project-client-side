import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home/Home"
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashBoard from "../Layout/DashBoard/DashBoard";
import DashboardProfile from "../Shared/DashboardProfile/DashboardProfile";
import WishList from "../Pages/DashBoard/Wishlist/WishList";
import PropertyBought from "../Pages/DashBoard/PropertyBought/PropertyBought";
import MyReviews from "../Pages/DashBoard/MyReviews/MyReviews";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    
    },
    // Auth routes
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    // dashboard routes
    {
        path: "dashboard",
        errorElement: <ErrorPage></ErrorPage>,
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'profile',
                element: <DashboardProfile></DashboardProfile>
            },
            // normal user routes
            {
                path: "wishlist",
                element: <WishList></WishList>
            },
            {
                path: "prortyBought",
                element: <PropertyBought></PropertyBought>
            },
            {
                path: "myReviews",
                element: <MyReviews> </MyReviews>
            }
        ]
    }
])
export default router;