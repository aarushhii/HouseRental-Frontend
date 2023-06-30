import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import NavBar from "../../components/NavBar-Main/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { useContext,useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Property = () => {

    const [data, setData] = useState([]);
    const [tenant, setTenant] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const fetchInfo = () => {
        let apiUrl = `https://houserentalapi-production.up.railway.app/api/landlord/get/properties/${user.id}`;
        return fetch(apiUrl, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((d) => setData(d));
    };

    const fetchTenant = () => {
        let apiUrl = `https://houserentalapi-production.up.railway.app/api/landlord/get/tenants/${user.id}`;
        return fetch(apiUrl, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((d) => setTenant(d));
    };
    
    const handleAddTenant = (e, propertyIdForTenant) =>{
        e.preventDefault();
        navigate("/addtenant", { state: { propertyId: propertyIdForTenant } });
    }

    const handleAddComplaint=(e,tenantId)=>{
        e.preventDefault();
        navigate("/raiseComplaint", { state: { to: tenantId, from:user.id } });
    }

    const handleDeleteTenant=(e,tenantId)=>{
        e.preventDefault();
        let apiUrl = `https://houserentalapi-production.up.railway.app/api/tenant/delete/${tenantId}`;
        return fetch(apiUrl, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((d) => setTenant(d));

    }
    const handlePayRent = (e, tenantId) => {
        e.preventDefault();
        let apiUrl = `https://houserentalapi-production.up.railway.app/api/tenant/paid/${tenantId}`;
        return fetch(apiUrl, {
            method: "POST",
        })
            .then((res) => res.json());
    };

    const handleRemoveProperty=(e, propertyId)=>{
        e.preventDefault();
        let apiUrl = `https://houserentalapi-production.up.railway.app/api/property/delete/${propertyId}`;
        return fetch(apiUrl, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((d) => setData(d));
    }

    useEffect(() => {
        fetchInfo();
        fetchTenant();
    }, [data, tenant]);

    return (
        <div >
      <NavBar />
        <>
                <h2 className="px-5 pt-5">Properties</h2>
                <div className="row px-5 gx-3">
                {data.length > 0 ? (
                    <>
                    {data.map((dataObj,index)=>{
                        return (
                            <>
                                <div className="col-sm-12 col-md-6 col-lg-4 mb-3 my-3">
                                    <div className="card">
                                        <div
                                            className="card-header d-flex"
                                            key={index}
                                        >
                                            Id : {dataObj.id}
                                            {dataObj.tenantId ? (
                                                <div className="badge text-bg-success ms-auto">
                                                    Rented
                                                </div>
                                            ) : (
                                                <div className="badge text-bg-danger ms-auto">
                                                    Not Rented
                                                </div>
                                            )}
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {dataObj.name}
                                            </h5>
                                            <h4 className="text-success">
                                                {dataObj.rent}
                                            </h4>
                                            <p className="card-text">
                                                {dataObj.type} <br />
                                                {dataObj.city} <br />
                                                {dataObj.address}
                                            </p>
                                            {dataObj.tenantId ? (
                                                <>
                                                Tenant : {dataObj.tenantId}
                                                _________________________________________________
                                                {tenant
                                                    .filter((tenantObj) => tenantObj.propertyId === dataObj.id)
                                                    .map((filteredTenant, index2) => (
                                                        <>
                                                      <ul key={index2}>
                                                        <li>id- {filteredTenant.id}</li>
                                                        <li>name- {filteredTenant.name}</li>
                                                        <li>email- {filteredTenant.email}</li>
                                                        <li>phone- {filteredTenant.phone}</li>
                                                        <li>rentpaid- {filteredTenant.rentPaid?(<>Yes</>):(<>No</>)}</li>
                                                        <li>rentdue- {filteredTenant.rentDue}</li>
                                                      </ul>
                                                    ___________________________________________________
                                                
                                                    {filteredTenant.rentPaid?null :<button className="btn btn-success" onClick={(e) =>
                                                            handlePayRent(
                                                                e,
                                                                dataObj.tenantId
                                                                )
                                                            }>Mark Rent as Paid</button>}
                                                    </>
                                                    ))}
                                                <button className="btn btn-warning" onClick={(e) =>
                                                        handleAddComplaint(
                                                            e,
                                                            dataObj.tenantId
                                                        )
                                                    }>Raise Complaint</button>    
                                                <button className="btn btn-danger" onClick={(e) =>
                                                        handleDeleteTenant(
                                                            e,
                                                            dataObj.tenantId
                                                        )
                                                    }>Remove Tenant
                                                </button>    
                                                <button className="btn btn-danger" onClick={(e) =>
                                                        handleRemoveProperty(
                                                            e,
                                                            dataObj.id
                                                        )
                                                    }>Remove Property
                                                </button>   

                                                </>

                                            ) : (
                                                <>
                                                <Link
                                                    onClick={(e) =>
                                                        handleAddTenant(
                                                            e,
                                                            dataObj.id
                                                        )
                                                    }
                                                    className="btn btn-primary"
                                                >
                                                    Add Tenant here
                                                </Link>
                                                <button className="btn btn-danger" onClick={(e) =>
                                                        handleRemoveProperty(
                                                            e,
                                                            dataObj.id
                                                        )
                                                    }>
                                                    Remove Property
                                                </button>   
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </>):
                (
                    <h3>No properties yet</h3>
                )}
                </div>
        </>
        </div>
    );
};

export default Property;
