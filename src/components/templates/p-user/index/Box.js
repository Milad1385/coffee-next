"use client"
import React from "react";
import styles from "./box.module.css";
import { FaCartShopping } from "react-icons/fa6";
import { IoBook, IoHeart, IoStatsChart, IoTicket } from "react-icons/io5";
import { MdShoppingBag } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
const Box = ({ title, value, icon }) => {
  return (
    <div className={styles.box}>
      <span>{value}</span>
      <div>
        <p>{title}</p>
        {icon === "ticket" && <IoBook className={styles.box_chart_icon} />}
        {icon === "comment" && <IoTicket className={styles.box_chart_icon} />}
        {icon === "order" && <IoStatsChart className={styles.box_chart_icon} />}
        {icon === "wish" && <IoHeart className={styles.box_chart_icon} />}
        {icon === "product" && (
          <FaCartShopping className={styles.box_chart_icon} />
        )}
        {icon === "basket" && <MdShoppingBag className={styles.box_chart_icon} />}
        {icon === "users" && <FaUsers className={styles.box_chart_icon}  />}
      </div>
    </div>
  );
};

export default Box;
