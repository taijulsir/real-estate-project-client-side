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
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../Pages/DashBoard/ManageUsers/ManageUsers";
import AdminProfile from "../Pages/DashBoard/AdminProfile/AdminProfile";
import AgentProfile from "../Pages/DashBoard/AgentProfile/AgentProfile";
import AddProperty from "../Pages/DashBoard/AddProperty/AddProperty";
import UserProfile from "../Pages/DashBoard/UserProfile/UserProfile";
import AgentAddProperty from "../Pages/DashBoard/AgentAddProperty/AgentAddProperty";
import UpdateProperTies from "../Pages/DashBoard/AgentAddProperty/UpdateProperTies";
import ManageProperties from "../Pages/DashBoard/ManageProperties/ManageProperties";


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
        element: <PrivateRoute> <DashBoard></DashBoard></PrivateRoute> ,
        children: [
            {
                path: 'profile',
                element: <DashboardProfile></DashboardProfile>
            },
            // admin routes
            {
                path: "adminProfile",
                element: <AdminProfile></AdminProfile>
            },
            {
             path: 'manageUsers',
             element: <ManageUsers></ManageUsers>   
            },
            {
                path: 'manageProperties',
                element: <ManageProperties></ManageProperties>
            },
            // agent routes
            {
                path: 'agentProfile',
                element: <AgentProfile></AgentProfile>
            },
            {
                path: 'addProperty',
                element: <AddProperty></AddProperty>
            },
            {
                path: 'addedProperties',
                element: <AgentAddProperty></AgentAddProperty>
            },
            {
                path: 'addedProperties/updateProperties/:id',
                element: <UpdateProperTies></UpdateProperTies>,
                loader: ({params}) => fetch(`http://localhost:5000/properties/${params.id}`)
                
            },
            // normal user routes
            {
                path: 'usersProfile',
                element: <UserProfile></UserProfile>
            },
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