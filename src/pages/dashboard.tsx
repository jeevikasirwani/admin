import React from "react";
import AdminSidebar from "../components/adminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userimg from "../assets/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar />
      {/* main */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input
            style={{ backgroundColor: "#f7f7f7" }}
            type="text"
            placeholder="Search for data,users,docs"
          />
          <FaRegBell />
          <img src={userimg} alt="User" />
        </div>

        <section className="widgetcontainer">
          <WidgetItem percent={40} amount={true} value={340000} heading="Revenue" color="rgb(0,115,255)"/>

          <WidgetItem percent={40} amount={true} value={340000} heading="Revenue" color="rgb(0,115,255)"/>

          <WidgetItem percent={40} amount={true} value={340000} heading="Revenue" color="rgb(0,115,255)"/>
        </section>
      </main>
    </div>
  );
};
interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}
const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp />+{percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown />
          {percent}%{" "}
        </span>
      )}
    </div>
  </article>
);

export default Dashboard;
