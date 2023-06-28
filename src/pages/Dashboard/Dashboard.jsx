import NavBar from "../../components/NavBar-Main/Navbar";
import React from 'react'
import '../../App.css';


function Dashboard() {
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
                                    <h4 className="text-success">4</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 mb-3 my-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Houses</h5>
                                    <h4 className="text-success">5</h4>
                                </div>
                            </div>
                        </div>



                        <div className="col-sm-12 col-md-6 col-lg-4 mb-3 my-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Payments</h5>
                                    <h4 className="text-success">3</h4>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-12 col-md-6 col-lg-4 mb-3 my-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Unpaid Rent</h5>
                                    <h4 className="text-success">1</h4>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-12 col-md-6 col-lg-4 mb-3 my-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Vacanices</h5>
                                    <h4 className="text-success">1</h4>
                                </div>
                            </div>
                        </div>

                    </div>
            </>
        </div>
    )

};
export default Dashboard
