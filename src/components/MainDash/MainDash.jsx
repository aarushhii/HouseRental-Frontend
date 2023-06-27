import React from 'react'
import './MainDash.css'
import Cards from "../Cards";


const HouseObj = {
  title: "Houses",
  totalNumber: "5",
   
};

const TenantObj = {
  title: "Tenants",
  totalNumber: "3",
  
};

const ClientObj = {
  title: "Clients Annually",
  totalNumber: "85k",
  // icon: "ri-user-line",
};

const RentObj = {
  title: "Rent collected",
  totalNumber: "21000",
  // icon: "ri-timer-flash-line",
};

const MainDash = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <Cards item={HouseObj} />
          <Cards item={TenantObj} />
          <Cards item={ClientObj} />
          <Cards item={RentObj} />
        </div>

      </div>
    </div>
  );
};
export default MainDash;