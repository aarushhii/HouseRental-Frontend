import React, { useState } from 'react';
import './ComplaintsPage.css';
import ComplaintCard from '../../components/ComplaintCard';
import NavBar from '../../components/NavBar-Main/Navbar'

const ComplaintPage = () => {
  const [activeTab, setActiveTab] = useState('incoming');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const complaints = [
    {
      id: 1,
      title: 'Issue 1',
      message: 'This is the message for issue 1',
      status: 'resolved',
      type: 'incoming',
      from: 'John Doe',
    },
    {
      id: 2,
      title: 'Issue 2',
      message: 'This is the message for issue 2',
      status: 'unresolved',
      type: 'outgoing',
      to: 'Jane Smith',
    },
    // Add more complaint objects as needed
  ];

  const filteredComplaints = complaints.filter(
    (complaint) => complaint.type === activeTab
  );

  return (
    <div>
      <NavBar />
      <div className="main-content">
        <h2 className="px-5 pt-5">Complaints</h2>
    <div className="complaints-page">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'incoming' ? 'active' : ''}`}
          onClick={() => handleTabClick('incoming')}
        >
          Incoming
        </button>
        <button
          className={`tab ${activeTab === 'outgoing' ? 'active' : ''}`}
          onClick={() => handleTabClick('outgoing')}
        >
          Outgoing
        </button>
      </div>
      <div className="complaints-container">
        {filteredComplaints.map((complaint) => (
          <ComplaintCard
            key={complaint.id}
            title={complaint.title}
            message={complaint.message}
            status={complaint.status}
            type={complaint.type}
            from={complaint.from}
            to={complaint.to}
          />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};



export default ComplaintPage;
