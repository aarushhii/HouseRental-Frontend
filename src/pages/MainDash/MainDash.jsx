import React from 'react'
import './MainDash.css'
import Cards from "../../components/Cards";
// import Sidebar from '../../components/sidebar/Sidebar';
import NavBar from '../../components/NavBar-Main/Navbar';
import '../../components/NavBar-Main/NavBar.css'

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
  // icon: "ri-user-line",
};

const VacantObj = {
  title: "Vacant Houses",
  totalNumber: "3",

};

const RentObj = {
  title: "Rent collected",
  totalNumber: "21000",
  // icon: "ri-timer-flash-line",
};
const PendingObj = {
  title: "Rend updaid",
  totalNumber: "2",
  // icon: "ri-timer-flash-line",
};

const MainDash = () => {
  return (
    <div>
      <NavBar />
      <h2 className="px-5 pt-5">Properties</h2>
    <div className='Main'>
      {/* <Sidebar> */}
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
      {/* </Sidebar> */}
    </div >
    </div>
  );
};
export default MainDash;