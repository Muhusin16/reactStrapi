import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  // const [isNavbarFixed, setIsNavbarFixed] = useState(false);
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

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent fixed-top">
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
            className="navbar-toggler "
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
            <ul className="navbar-nav mb-2 mb-lg-1 ms-auto">
              {navbar &&
                navbar[0].attributes.Header &&
                navbar[0].attributes.Header.map((item) => (
                  <li className="nav-item dropdown" key={item.id}>
                    <strong>
                      <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        role="button"
                        onClick={toggleDropdown}
                        aria-expanded={dropdownVisible}
                      >
                        {item.Title}
                      </Link>
                    </strong>
                    <ul
                      className={`dropdown-menu show-on-hover nav-menu ${
                        dropdownVisible ? "show" : ""
                      }`}
                    >
                      {item &&
                        item.content.map((data, index) => (
                          <li key={data.id || index}>
                            <Link
                              className="dropdown-item"
                              to={generateLink(data.category)}
                            >
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

const generateLink = (category) => {
  switch (category) {
    case "eCommerce & Portals":
      return "/Ecommerce";
    case "Mobile Apps":
      return "/MobileApp";
    case "Cloud Solutions":
      return "/CloudSolutions";
    case "Web Products":
      return "/WebProduct";
    case "Designs":
      return "/Design";
    case "Labs":
      return "/Labs";
    case "Mobile Hybrid Development":
      return "/MobileHybrid";
      case "UI Engineering":
        return "/UIEngineering";
        case "Partners":
        return "/Partner";
        case "Clients":
          return "/Client";
    default:
      return "/About";
  }
};

export default Navbar;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";


// const CombinedComponent = () => {
//   const [navbar, setNavbar] = useState("");
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const imgurl = "http://localhost:1337";
//   const [data, setData] = useState("");

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:1337/api/e-commerce-portals?populate[Header][populate]=*&populate[Portals][populate]=*&populate[MiddleBlock][populate]=*&populate[images][populate]=*&populate[Footer][populate]=*"
//       );
//       setData(response.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchNavbar = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:1337/api/navbars?populate=*"
//       );
//       setNavbar(response.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//     fetchNavbar();
//   }, []);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-transparent fixed">
//         <div className="container">
//           {navbar &&
//             navbar.map((data) => (
//               <div className="site-branding" key={data.id}>
//                 <a
//                   href="https://zool.in"
//                   className="custom-logo-link"
//                   rel="home"
//                 >
//                   <img
//                     src={imgurl + data.attributes.logo.data.attributes.url}
//                     alt="Zool Tech Solutions Pvt Ltd"
//                     className="custom-logo"
//                   />
//                 </a>
//               </div>
//             ))}

//           <button
//             className="navbar-toggler "
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mb-2 mb-lg-1 ms-auto">
//               {navbar &&
//                 navbar[0].attributes.Header &&
//                 navbar[0].attributes.Header.map((item) => (
//                   <li className="nav-item dropdown" key={item.id}>
//                     <strong>
//                       <Link
//                         className="nav-link dropdown-toggle"
//                         to="#"
//                         role="button"
//                         onClick={toggleDropdown}
//                         aria-expanded={dropdownVisible}
//                       >
//                         {item.Title}
//                       </Link>
//                     </strong>
//                     <ul
//                       className={`dropdown-menu show-on-hover nav-menu ${
//                         dropdownVisible ? "show" : ""
//                       }`}
//                     >
//                       {item &&
//                         item.content.map((data, index) => (
//                           <li key={data.id || index}>
//                             <Link
//                               className="dropdown-item"
//                               to={generateLink(data.category)}
//                             >
//                               {data.category}
//                             </Link>
//                           </li>
//                         ))}
//                     </ul>
//                   </li>
//                 ))}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {data.length > 0 && (
//         <div className="header-container card text-bg d-flex">
//           <img
//             className="bg-banner-img"
//             src={
//               imgurl +
//               data[0].attributes.Header?.titleImage?.data?.attributes?.url
//             }
//             alt=""
//             width={100}
//             height={350}
//           />
//           <div className="banner-text">
//             <h2>
//               <span className="bgcolor-sunglow fontsize-1">
//                 {data[0].attributes.Header?.Title}
//               </span>
//             </h2>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const generateLink = (category) => {
//   switch (category) {
//     case "eCommerce & Portals":
//       return "/Ecommerce";
//     case "Mobile Apps":
//       return "/MobileApp";
//     case "Cloud Solutions":
//       return "/CloudSolutions";
//     case "Web Products":
//       return "/WebProduct";
//     case "Designs":
//       return "/Design";
//     case "Labs":
//       return "/Labs";
//     case "Mobile Hybrid Development":
//       return "/MobileHybrid";
//       case "UI Engineering":
//         return "/UIEngineering";
//         case "Partners":
//         return "/Partner";
//     default:
//       return "/About";
//   }
// };

// export default CombinedComponent;
