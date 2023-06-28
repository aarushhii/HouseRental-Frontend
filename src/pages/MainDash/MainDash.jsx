import React from 'react'
import './MainDash.css'
import Cards from "../../components/Cards";
import Sidebar from '../../components/sidebar/Sidebar';


const HouseObj = {
  title: "Houses",
  totalNumber: "5",

};

const TenantObj = {
  title: "Tenants",
  totalNumber: "3",

};

const PaymentObj = {
  title: "Payments",
  totalNumber: "82",
  
};

const VacantObj = {
  title: "Vacant Houses",
  totalNumber: "3",

};

const RentObj = {
  title: "Rent collected",
  totalNumber: "21000",

};
const PendingObj = {
  title: "Rend updaid",
  totalNumber: "2",
  
};

const MainDash = () => {
  return (
    <div className='Main'>
      <Sidebar>
    <div className="dashboard">
        <div className="dashboard__wrapper">
          <h1>Dashboard</h1>
          <div className="dashboard__cards">
            <Cards item={HouseObj} />
            <Cards item={TenantObj} />
            <Cards item={PaymentObj} />
            <Cards item={RentObj} />
            <Cards item={VacantObj} />
            <Cards item={PendingObj} />
          </div> 
        </div>
        </div>
      </Sidebar>
    </div >
  );
};
export default MainDash;