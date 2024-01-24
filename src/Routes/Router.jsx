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
import ALlProperties from "../Pages/AllProperties/ALlProperties";
import SoldProperty from "../Pages/DashBoard/SoldProperty/SoldProperty";
import AdvertiseProperty from "../Pages/DashBoard/AdvertiseProperty/AdvertiseProperty";
import Contact from "../Pages/DashBoard/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ReportedProperty from "../Pages/DashBoard/ReportedProperty/ReportedProperty";
import VirtualTour from "../Pages/VirtualTour/VirtualTour";

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
                element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
                loader: async ({ params }) => {
                    const propertiesPromise = fetch(`https://real-estate-project-server.vercel.app/singleProperties/${params.id}`).then(res => res.json());
                    const reviewsPromise = fetch(`https://real-estate-project-server.vercel.app/singleReviews/${params.id}`).then(res => res.json());
                    const [properties, reviews] = await Promise.all([propertiesPromise, reviewsPromise]);
                    return { properties, reviews };
                }
            },
            {
                path: "/allProperties",
                element: <PrivateRoute><ALlProperties></ALlProperties></PrivateRoute>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: "/virtualTour",
                element: <VirtualTour></VirtualTour>
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
                path: "advertiseProperties",
                element: <AdvertiseProperty></AdvertiseProperty>
            },
            {
                path: "reportedProperties",
                element: <ReportedProperty></ReportedProperty>
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
                loader: ({ params }) => fetch(`https://real-estate-project-server.vercel.app/properties/${params.id}`)

            },
            {
                path: "requestedProperties",
                element: <RequestedProperties></RequestedProperties>
            },
            {
                path: "soldProperties",
                element: <SoldProperty></SoldProperty>
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
                loader: ({ params }) => fetch(`https://real-estate-project-server.vercel.app/wishlist/${params.id}`)
            },
            {
                path: "propertyBought/payment/:id",
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://real-estate-project-server.vercel.app/propertyBought/${params.id}`)
            }
        ]
    }
])
export default router;