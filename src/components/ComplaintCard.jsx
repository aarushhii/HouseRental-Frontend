import React from "react";
import "../pages/Complaint/ComplaintsPage.css";

const ComplaintCard = ({ title, message, from, to }) => {
    return (
        <div className="complaint-card">
            <div className="card-header">
                <h3>{title}</h3>
            </div>
            <div className="metadata">
                <span>From:</span>
                <span className="from">{from}</span>
            </div>
            <div className="metadata">
                <span>To:</span>
                <span className="to">{to}</span>
            </div>
            <div className="message">{message}</div>
        </div>
    );
};

export default ComplaintCard;
