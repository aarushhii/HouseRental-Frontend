import React from "react";
import "../pages/Complaint/ComplaintsPage.css";


const ComplaintCard = ({ key,title, message, status, from, to }) => {

    const markAsResolved=(e)=>{
        // e.preventDefault();
        let apiUrl = `https://houserentalapi-production.up.railway.app/api/notice/delete/${key}`;
         fetch(apiUrl, {
            method: "DELETE",
        })
        window.location.pathname='/complaints';
    };

    return (

        <div className={`card mb-3 ${status === 'resolved' ? 'border-success' : 'border-danger'}`}>
            <div className="card-header d-flex align-items-start">
                <h3 className="card-title mb-0 text-start">{title}</h3>
                {status === 'resolved' ? (
                    <button className="btn btn-success btn-sm" disabled>
                        Resolved
                    </button>
                ) : (
                    <button className="btn btn-danger btn-sm" onClick={(e) => markAsResolved(e)}>
                        Mark as Resolved
                    </button>
                )}

            </div>
            <div className="card-body">
                <div className="metadata">
                    <div className="metadata">
                        <span>From:</span>
                        <span className="from">{from}</span>
                    </div>
                    <div className="metadata">
                        <span>To:</span>
                        <span className="to">{to}</span>
                    </div>
                </div>
                <div className="message">{message}</div>
            </div>
        </div>

    );
};

export default ComplaintCard;
