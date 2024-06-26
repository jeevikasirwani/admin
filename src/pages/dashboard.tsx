import React from "react";
import AdminSidebar from "../components/adminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userimg from "../assets/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart } from "../components/charts";
import { BiMaleFemale } from "react-icons/bi";
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
        {/* SECTION 1 */}
        <section className="widgetcontainer">
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgb(0,115,255)"
          />

          <WidgetItem
            percent={-14}
            amount={true}
            value={400}
            heading="Users"
            color="rgb(0,198,202)"
          />

          <WidgetItem
            percent={80}
            value={23000}
            heading="Transaction"
            color="rgb(255,196,0)"
          />
          <WidgetItem
            percent={30}
            value={1000}
            heading="Products"
            color="rgb(75,0,255)"
          />
        </section>
        {/* SECTION 2 */}
        <section className="graphcontainer">
          <div className="revenuechart">
            <h2>Revenue & Transaction</h2>
            {/* graph */}
            <BarChart data1={[300,144,433,655,237,755,190]} data2={[200,444,433,155,230,790,390]} title1="Revenue" title2="Transaction" bgcolor1="rgb(0,115,255)" bgcolor2="rgba(53,162,235,0.8)"/>
          </div>
          <div className="dashboardcategories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((i) => (
                <CategoriesItem
                key={i.heading}
                  heading={i.heading}
                  color={`hsl(${i.value*2},${i.value}%,50%)`}
                  value={i.value}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="transactionContainer">
          <div className="genderChart">
              <h2>Gender Ratio</h2>
              {/* {Chart} */}
              <p><BiMaleFemale/></p>
          </div>
          {/* table */}
          
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
  amount = false,
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
    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(
      ${color} ${(Math.abs(percent) / 100) * 360}deg,
      rgb(255,255,255) 0)`,
      }}
    >
      <span style={{ color }}>{percent}% </span>
    </div>
  </article>
);
interface CategoryItemProps {
  color: string;
  heading: string;
  value: number;
}
const CategoriesItem = ({ heading, color, value }: CategoryItemProps) => (
  <div className="categoryItem">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}%` }}></div>
    </div>
    <span>{value}%</span>
  </div>
);
export default Dashboard;
