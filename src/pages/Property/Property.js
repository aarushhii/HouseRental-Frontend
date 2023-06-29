import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import NavBar from "../../components/NavBar-Main/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { useContext,useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Property = () => {

    const [data, setData] = useState([]);
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

    const handleAddTenant = (e, propertyIdForTenant) =>{
        e.preventDefault();
        navigate("/addtenant", { state: { propertyId: propertyIdForTenant } });
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div >
      <NavBar />
        <>
                <h2 className="px-5 pt-5">Properties</h2>
                <div className="row px-5 gx-3">

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
                                                <Link className="btn btn-primary">
                                                    Tenant : {dataObj.tenantId}
                                                </Link>
                                            ) : (
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
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                    
                </div>
        </>
        </div>
    );
};

export default Property;
