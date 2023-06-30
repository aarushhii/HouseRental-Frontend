import React from "react";
import NavBar from "../../components/NavBar-Main/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const TenantDashboard = () => {
    const { tenantUser, tenantLogout } = useContext(AuthContext);

    const handleLogout = () => {
        tenantLogout();
    };

    if (tenantUser) {
        return (
            <div>
                <NavBar />
                <div>tenantDashboard</div>
                <div>{tenantUser.id}</div>
                <div>{tenantUser.name}</div>
                <div>{tenantUser.email}</div>
                <div>{tenantUser.password}</div>
                <div>{tenantUser.phone}</div>
            </div>
        );
    } else {
        return <h1>Sign In</h1>;
    }
};

export default TenantDashboard;
