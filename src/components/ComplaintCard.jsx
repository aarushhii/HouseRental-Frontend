import React, { useState } from 'react';
import '../pages/Complaint/ComplaintsPage.css';

const ComplaintCard = ({ title, message, status, type, from, to }) => {
  return (
    <div className={`complaint-card ${status}`}>
      <div className="card-header">
        <h3>{title}</h3>
        <div className="status-indicator"></div>
      </div>
      <div className="metadata">
        <span>{type === 'incoming' ? 'From:' : 'To:'}</span>
        <span className={type === 'incoming' ? 'from' : 'to'}>
          {type === 'incoming' ? from : to}
        </span>
      </div>
      <div className="message">{message}</div>
    </div>
  );
};
export default ComplaintCard;


