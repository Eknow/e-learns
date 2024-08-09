import React from "react";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
    if (!localStorage.getItem("DashBoardUserLoggedIn")) {
        return <Navigate to="/" />;
    }
    return children;
}

export default RequireAuth;
