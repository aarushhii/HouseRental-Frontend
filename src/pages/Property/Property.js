import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import NavBar from "../../components/NavBar-Main/Navbar";

const Property = () => {
    return (
        <div >
      <NavBar />
        <>

                <h2 className="px-5 pt-5">Properties</h2>
                <div className="row px-5 gx-3">
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3 my-3">
                        <div className="card">
                            <div className="card-header d-flex">
                                Id : 64erd34fed344
                                <div className="badge text-bg-danger ms-auto">
                                    Not Rented
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Green Appartments</h5>
                                <h4 className="text-success">$5000</h4>
                                <p className="card-text">
                                    Delhi <br /> 44-B new Delhi near Vasant Vihar
                                </p>
                                <Link to="/addtenant" className="btn btn-primary">
                                    Add Tenant here
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3 my-3">
                        <div className="card">
                            <div className="card-header d-flex">
                                Id : 64erd34fed344
                                <div className="badge text-bg-info ms-auto">
                                    Rented
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Green Appartments</h5>
                                <h4 className="text-success">$5000</h4>
                                <p className="card-text">
                                    Delhi <br /> 44-B new Delhi near Vasant Vihar
                                </p>
                                <Link to="#" className="btn btn-primary">
                                    Tenant : Mayank Dhankar
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3 my-3">
                        <div className="card">
                            <div className="card-header d-flex">
                                Id : 64erd34fed344
                                <div className="badge text-bg-danger ms-auto">
                                    Not Rented
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Green Appartments</h5>
                                <h4 className="text-success">$5000</h4>
                                <p className="card-text">
                                    Delhi <br /> 44-B new Delhi near Vasant Vihar
                                </p>
                                <Link to="/addtenant" className="btn btn-primary">
                                    Add Tenant here
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3 my-3">
                        <div className="card">
                            <div className="card-header d-flex">
                                Id : 64erd34fed344
                                <div className="badge text-bg-info ms-auto">
                                    Rented
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Green Appartments</h5>
                                <h4 className="text-success">$5000</h4>
                                <p className="card-text">
                                    Delhi <br /> 44-B new Delhi near Vasant Vihar
                                </p>
                                <Link to="#" className="btn btn-primary">
                                    Tenant : Mayank Dhankar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </>
        </div>
    );
};

export default Property;
