import axios from "axios";
import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const [navbar, setNavbar] = useState("");
  console.log(navbar);
  const fetchNavbar = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/navbars?populate=*"
      );
      setNavbar(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNavbar();
  }, []);
  return(
div
  )};