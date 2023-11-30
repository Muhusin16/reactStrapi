import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState("");
  const imgurl = "http://localhost:1337";
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



  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          {navbar &&
            navbar.map((data) => (
              <div className="site-branding" key={data.id}>
                <a
                  href="https://zool.in"
                  className="custom-logo-link"
                  rel="home"
                >
                  <img
                    src={imgurl + data.attributes.logo.data.attributes.url}
                    alt="Zool Tech Solutions Pvt Ltd"
                    className="custom-logo"
                  />
                </a>
              </div>
            ))}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-1 ms-auto">
              {navbar &&
                navbar[0].attributes.Header &&
                navbar[0].attributes.Header.map((item) => (
                  <li className="nav-item dropdown" key={item.id}>
                    <strong>
                      <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item.Title}
                      </Link>
                    </strong>
                    <ul className="dropdown-menu show-on-hover nav-menu">
                      {item &&
                        item.content.map((data) => (
                          <li key={data.id}>
                            <Link className="dropdown-item" to={data.category === "eCommerce & Portals" ? "/Ecommerce" : "/"  }>
                              {data.category}
                            </Link>
                           
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
