import React from "react";
import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, LinkProps, Location, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo.</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
            <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location}/>

            <Li url="/admin/products" text="Products" Icon={RiShoppingBag3Fill} location={location}/>

            <Li url="/admin/customers" text="Customers" Icon={IoIosPeople} location={location}/>

            <Li url="/admin/transactions" text="Transactions" Icon={AiFillFileText} location={location}/>
          
        </ul>
      </div>
    </aside>
  );
};
interface LiProps {
  url: string;
  text: string;
  Icon: IconType;
  location: Location;
}
const Li = ({ url, text, Icon, location }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url)
          ? "rgba(0,115,255)"
          : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
