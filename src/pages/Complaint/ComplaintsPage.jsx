import React, { useState,useEffect,useContext } from "react";
import "./ComplaintsPage.css";
import ComplaintCard from "../../components/ComplaintCard";
import NavBar from "../../components/NavBar-Main/Navbar";
import { AuthContext } from "../../context/AuthContext";

const ComplaintPage = () => {
    const [activeTab, setActiveTab] = useState("incoming");
    const [data, setData] = useState([]);
    const [tenantNames, setTenantNames] = useState([]);
    const { user } = useContext(AuthContext);
    
    const fetchInfo = () => {
        let apiUrl = `https://houserentalapi-production.up.railway.app/api/notice/getall`;
        return fetch(apiUrl, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((d) => setData(d));
    };
    const fetchTenantName = (tenantId) => {
        let apiUrl = `https://houserentalapi-production.up.railway.app/api/tenant/${tenantId}`;
        return fetch(apiUrl, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((tenant) => {
                // Store the fetched tenant name
                setTenantNames((prevTenantNames) => ({
                    ...prevTenantNames,
                    [tenantId]: tenant.name,
                }));
            });
    };

    useEffect(() => {
      fetchInfo();
    // Fetch tenant names for all complaints
    const tenantIds = data.map((complaint) => complaint.from);
    tenantIds.forEach((tenantId) => {
      fetchTenantName(tenantId);
    });
  }, [data]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    let fromName = ""; // Initialize fromName variable
    let toName = ""; // Initialize fromName variable
    const filteredComplaints = data.filter((complaint) => {
        if (activeTab === "incoming") {
            fromName = "" // Assign fromName to complaint.from
            toName = user.name;
            return complaint.to === user.id;
        } else if (activeTab === "outgoing") {
            fromName = user.name;
            toName = "" // Assign fromName to user.name
            return complaint.from === user.id;
        }
        return false;
    });

    return (
        <div>
            <NavBar />
            <div className="main-content">
                <h2 className="px-5 pt-5">Complaints</h2>
                <div className="complaints-page">
                    <div className="tabs">
                        <button
                            className={`tab ${
                                activeTab === "incoming" ? "active" : ""
                            }`}
                            onClick={() => handleTabClick("incoming")}
                        >
                            Incoming
                        </button>
                        <button
                            className={`tab ${
                                activeTab === "outgoing" ? "active" : ""
                            }`}
                            onClick={() => handleTabClick("outgoing")}
                        >
                            Outgoing
                        </button>
                    </div>
                    <div className="complaints-container">
                        {filteredComplaints.map((complaint) => (
                            <ComplaintCard
                                key={complaint.id}
                                title={complaint.title}
                                message={complaint.content}
                                from={fromName?fromName:tenantNames[complaint.from]}
                                to={toName?toName:tenantNames[complaint.to]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplaintPage;
