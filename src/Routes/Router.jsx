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
import ManageReviews from "../Pages/DashBoard/ManageReviews/ManageReviews";
import PropertyDetails from "../Pages/Home/PropertyDetails/PropertyDetails";
import OfferPropertyForm from "../Pages/DashBoard/Wishlist/OfferPropertyForm"
import RequestedProperties from "../Pages/DashBoard/RequestedProperties/RequestedProperties";
import Payment from "../Pages/DashBoard/Payment/Payment";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/propertyDetails/:id',
                element: <PropertyDetails></PropertyDetails>,
                loader: async ({ params }) => {
                    const propertiesPromise = fetch(`http://localhost:5000/singleProperties/${params.id}`).then(res => res.json());
                    const reviewsPromise = fetch(`http://localhost:5000/singleReviews/${params.id}`).then(res => res.json());
                    const [properties, reviews] = await Promise.all([propertiesPromise, reviewsPromise]);
                    return { properties, reviews };
                }
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
        element: <PrivateRoute> <DashBoard></DashBoard></PrivateRoute>,
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
            {
                path: 'manageReviews',
                element: <ManageReviews></ManageReviews>
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
                loader: ({ params }) => fetch(`http://localhost:5000/properties/${params.id}`)

            },
            {
                path: "requestedProperties",
                element: <RequestedProperties></RequestedProperties>
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
                path: "propertyBought",
                element: <PropertyBought></PropertyBought>
            },
            {
                path: "myReviews",
                element: <MyReviews> </MyReviews>
            },
            {
                path: "wishlist/offerProperties/:id",
                element: <OfferPropertyForm></OfferPropertyForm>,
                loader: ({ params }) => fetch(`http://localhost:5000/wishlist/${params.id}`)
            },
            {
                path: "propertyBought/payment/:id",
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/propertyBought/${params.id}`)
            }
        ]
    }
])
export default router;