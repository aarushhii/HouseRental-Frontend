import NavBar from "../../components/NavBar-Main/Navbar";
import React from 'react'
import '../../App.css';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";

function Dashboard() {

    const { user } = useContext(AuthContext);
    const [property, setProperty] = useState([]);
    const [tenant, setTenant] = useState([]);
    const [rentLeft, setRentLeft] = useState([]);

    const fetchProperty = async () => {
        let apiUrl = `https://houserentalapi-production.up.railway.app/api/landlord/get/properties/${user.id}`;
        return fetch(apiUrl, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((d) => setProperty(d));
    }

    const fetchTenant = async () => {
        let apiUrl = `https://houserentalapi-production.up.railway.app/api/landlord/get/tenants/${user.id}`;
        return fetch(apiUrl, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((d) => setTenant(d));
    }

    const fetchRentLeft = async () => {
        let apiUrl = `https://houserentalapi-production.up.railway.app/api/landlord/totalrent/${user.id}`;
        return fetch(apiUrl, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((d) => setRentLeft(d));
    }
    useEffect(() => {
        fetchProperty();
        fetchTenant();
        fetchRentLeft();
    }, []);

    return (
        <div>
            <NavBar />
            <>
                <h2 className="px-5 pt-5">Dashboard</h2>

                <div className="row px-5 gx-10">
                    <div className="col-sm-12 col-md-6 col-lg-4 lg-3 my-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Tenants</h5>
                                <h4 className="text-success">
                                    {Object.keys(tenant).length}
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3 my-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Houses</h5>
                                <h4 className="text-success">
                                    {Object.keys(property).length}
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3 my-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Payments Left</h5>
                                <h4 className="text-success">{rentLeft}</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3 my-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Unpaid Rent</h5>
                                <h4 className="text-success">
                                    {
                                        Object.values(tenant).filter(
                                            (tenant) => !tenant.rentPaid
                                        ).length
                                    }
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3 my-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Vacanices</h5>
                                <h4 className="text-success">
                                    {
                                        Object.values(property).filter(
                                            (property) => !property.tenantId
                                        ).length
                                    }
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );

};
export default Dashboard
