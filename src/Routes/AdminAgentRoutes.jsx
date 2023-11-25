/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth/useAuth";
import useCheckRole from "../Hooks/useCheckRole/useCheckRole";


const AdminAgentRoutes = ({children}) => {
    const {user,loading} = useAuth()
    const [isCheckRole, isCheckRoleLoading] = useCheckRole()
    const location = useLocation()
    if(loading || isCheckRoleLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user && isCheckRole){
        return children;
    }
   return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default AdminAgentRoutes;