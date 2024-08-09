import React from "react";
import { Navigate } from "react-router-dom";

function RedirectIfAuthenticated({ children }) {
    if (localStorage.getItem("DashBoardUserLoggedIn")) {
        return <Navigate to="/dashboard" />;
    }
    return children;
}

export default RedirectIfAuthenticated;
