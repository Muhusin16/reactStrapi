import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ecommerce.css"; // Import your CSS file if needed

const Ecommers = () => {
  const imgurl = "http://localhost:1337";
  const [data, setData] = useState("");
  const [selectedBox, setSelectedBox] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/e-commerce-portals?populate[Header][populate]=*&populate[Portals][populate]=*&populate[MiddleBlock][populate]=*&populate[images][populate]=*&populate[Footer][populate]=*"
      );
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBoxClick = (index) => {
    // Toggle the selected state of the clicked box
    setSelectedBox((prevSelectedBox) =>
      prevSelectedBox === index ? null : index
    );
  };

  return (
    <>
      <div className="container">
        {data &&
          data.map((item, index) => (
            <div key={index} className="card-container ">  
              <div className="card text-bg d-flex" >
                <img
                  className="img-fluid card-image"
                  src={imgurl + item.attributes.Header.titleImage.data.attributes.url}
                  alt=""
                 width={100}
                />
                <div className="card-img-overlay"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
                >
                  <h2>
                    <span className="card-title fontsize-1">
                      {item.attributes.Header.Title}
                    </span>
                  </h2>
                </div>
              </div>
              <div className="container">
               <div
                    className="breadcrumbs"
                    typeof="BreadcrumbList"
                    vocab="https://schema.org/"
                  ></div>
                  <span property="itemListElement" typeof="ListItem">
                    <a
                      property="item"
                      typeof="WebPage"
                      href="https://zool.in"
                      title="Go to Zool Tech Solutions Pvt Ltd"
                      className="home"
                    >
                      
                      <span property="name">Zool Tech Solutions Pvt Ltd /</span>
                    </a>
                    <meta property="position" content="1" />
                  </span>
                  <span property="itemListElement" typeof="ListItem">
                    <a
                      href="https://zool.in/services/zool-labs"
                      property="item"
                      typeof="WebPage"
                      title="Go to Services"
                      className="post post-page"
                    >
                      <span property="name">Services /</span>
                    </a>
                    <meta property="position" content="3" />
                  </span>
                  <span property="itemListElement" typeof="ListItem">
                    <span property="name">eCommerce Portals</span>

                    <meta property="position" content="3" />
                  </span>
              </div>
              <div className="main-content">
                <h1 className="fontsize-2 main-content-header">
                  {item.attributes.MiddleBlock.Title}
                </h1>
                <div className="row">
                  <div className="col-md-6">
                    <p className="right-margin">{item.attributes.MiddleBlock.lDesc}</p>
                  </div>
                  <div className="col-md-6">
                    <h3>
                      <strong>{item.attributes.MiddleBlock.rSubTitle}</strong>
                    </h3>
                    <p>{item.attributes.MiddleBlock.rDesc}</p>
                  </div>
                  <div className="service-hr-tag">
                    <hr />
                    <h2 className="color-pink fontsize-3">
                      {item.attributes.MiddleBlock.lSubTitle}
                    </h2>
                    <div className="section-gap20"></div>
                  </div>
                </div>
              </div>
              <div className="services-hr-tag">
                <h2 className="color-pink fontsize-3">{item.attributes.lSubTitle}</h2>
              </div>
              <div className="container d-flex flex-wrap">
                {item.attributes.Portals.map((card, cardIndex) => (
                  <div key={cardIndex} className="col-md-4 card-column">
                    <div className="d-flex flex-wrap">
                      <img
                        src={imgurl + card.Image.data.attributes.url}
                        alt=""
                        className="card-image"
                      />
                    </div>
                    <div>
                      <h3 className="block-desc fontsize-4 top-margin">
                        <p>{card.Title}</p>
                      </h3>
                    </div>
                    <div className="block-content">
                      <p className="fontsize-5">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ecommerceBlocks">
                <div className="row">
                  {item.attributes.images.data.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className={`col-md-2 col-sm-4 col-xs-6 ${
                        selectedBox === imageIndex ? 'selected-box' : ''
                      }`}
                      onClick={() => handleBoxClick(imageIndex)}
                    >
                      <span className="border border-primary-subtle">
                        <img
                          src={imgurl + image.attributes.url}
                          alt="webContent"
                          className="attachment"
                        />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <footer id="colophon" className="site-footer" role="contentinfo">
  <div className="footer-widgets section-padding">
    <h3 className="footer-title">{item.attributes.Footer.Title}</h3>
    <p className="text-muted">{item.attributes.Footer.Desc}</p>
    <div className="footer-heading">
      {item.attributes.Footer.Heading.map((content, headingIndex) => (
        <div key={headingIndex} className="col-md-3 col-sm-12 footer-column widget-area sidebar">
          <h4><strong>{content.content_title}</strong></h4>
          <ul className="horizontal-list">
            {content.Content.map((category, catIndex) => (
              <li key={catIndex} className="horizontal-list-item">{category.category}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</footer>
            </div>
          ))}
      </div>
    </>
  );
};

export default Ecommers;



// import axios from "axios";
// import React, { useEffect, useState } from "react";
// // import "./ecommerce.css"
// // import Navbar from "../Navbar/Navbar";

// export const Ecommers = () => {
//   const imgurl = "http://localhost:1337";
//   const [data, setData] = useState("");
//   console.log(data);
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
//   useEffect(() => {
//     fetchData();
//   }, []);
  
//   return (
//     <>
//       <div>
//         <div>
//           {data &&
//             data.map((item) => {
//               return (
//                 <>
//                   <div
//                     className="card text-bg"
//                     style={{ position: "relative" }}
//                   >
//                     <img
//                       className="img-fluid"
//                       src={
//                         imgurl +
//                         item.attributes.Header.titleImage.data.attributes.url
//                       }
//                     />
//                     <div
//                       className="card-img-overlay"
                      // style={{
                      //   display: "flex",
                      //   justifyContent: "center",
                      //   alignItems: "center",
                      //   position: "absolute",
                      //   top: 0,
                      //   bottom: 0,
                      //   left: 0,
                      //   right: 0,
                      // }}
//                     >
//                       <h2>
//                         <span className="card-title fontsize-1">
//                           {item.attributes.Header.Title}
//                         </span>
//                       </h2>
//                     </div>
//                   </div>
//                 </>
//               );
//             })}
//         </div>
//       </div>
//       <div>
//         {data &&
//           data.map((item) => {
//             return (
//               <>
//                 <div className="container">
//                   <div
//                     className="breadcrumbs"
//                     typeof="BreadcrumbList"
//                     vocab="https://schema.org/"
//                   ></div>
//                   <span property="itemListElement" typeof="ListItem">
//                     <a
//                       property="item"
//                       typeof="WebPage"
//                       href="https://zool.in"
//                       title="Go to Zool Tech Solutions Pvt Ltd"
//                       className="home"
//                     >
                      
//                       <span property="name">Zool Tech Solutions Pvt Ltd /</span>
//                     </a>
//                     <meta property="position" content="1" />
//                   </span>
//                   <span property="itemListElement" typeof="ListItem">
//                     <a
//                       href="https://zool.in/services/zool-labs"
//                       property="item"
//                       typeof="WebPage"
//                       title="Go to Services"
//                       className="post post-page"
//                     >
//                       <span property="name">Services /</span>
//                     </a>
//                     <meta property="position" content="3" />
//                   </span>
//                   <span property="itemListElement" typeof="ListItem">
//                     <span property="name">eCommerce Portals</span>

//                     <meta property="position" content="3" />
//                   </span>

                //   <div className="main-content">
                //     <h1 className="fontsize-2 main-content-header">
                //       {" "}
                //       {item.attributes.MiddleBlock.Title}
                //     </h1>
                //     <div className="row">
                //       <div className="col-md-6">
                //         <p className="right-margin">
                //           {item.attributes.MiddleBlock.lDesc}
                //         </p>
                //       </div>
                //       <div className="col-md-6">
                //         <h3>
                //           <strong>
                //             {item.attributes.MiddleBlock.rSubTitle}
                //           </strong>
                //         </h3>
                //         <p>{item.attributes.MiddleBlock.rDesc}</p>
                //       </div>
                //       <div className="service-hr-tag">
                //         <hr />
                //         <h2 className="color-pink fontsize-3">
                          
                //           {item.attributes.MiddleBlock.lSubTitle}
                //         </h2>
                //         <div className="section-gap20"></div>
                //       </div>
                //     </div>
                //   </div>
                // </div>
//               </>
//             );
//           })}
//       </div>

//       {/* <div class="bg-banner-img" style="background-image: url('https://zool.in/wp-content/uploads/2016/12/services-ecommerce.jpg')"></div> */}
//       <div>
//         {data &&
//           data.map((item) => {
//             return (
//               <div className="services-hr-tag">
//                 <h2 class="color-pink fontsize-3">
//                   {item.attributes.lSubTitle}
//                 </h2>
//               </div>
//             );
//           })}
//         <div class="section-gap20">&nbsp;</div>
//       </div>
//       <>
//       <div className="container d-flex flex-wrap">
//                 {item && item.attributes.Portals.map((card, cardIndex) => (
//                   <div key={cardIndex} className="col-md-4 card-column">
//                     <div className="d-flex flex-wrap">
//                       <img
//                         src={imgurl + card.Image.data.attributes.url}
//                         alt=""
//                         className="img-fluid card-image"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="block-desc fontsize-4 top-margin">
//                         <p>{card.Title}</p>
//                       </h3>
//                     </div>
//                     <div className="block-content">
//                       <p className="fontsize-5">{card.description}</p>
//                     </div>
//                   </div>
//                 ))}
            
//         </div>
//       </>
//       <div className="container">
//         {data[0] && (
//           <div className="ecommerceBlocks">
//             <div className="row">
//               {data[0].attributes.images.data.map((item, index) => (
//                 <div key={index} className="col-md-2 col-sm-4 col-xs-6">
//                   <img
//                     src={imgurl + item.attributes.url}
//                     alt="webContent"
//                     className="attachment"
                    
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//       <footer id="colophon" className="container" role="contentinfo">
//         {data &&
//           data.map((item) => (
//             <div key={item.id}>
//               <div className="footer-content">
//                 <p>{item.attributes.Footer.Desc}</p>
//                 <div className="footer-heading">
//                   {item.attributes.Footer.Heading.map((content, index) => (
//                     <div key={index} className="footer-section">
//                       <h4><strong>{content.content_title}</strong></h4>
//                       <ul className="horizontal-list">
//                         {content.Content.map((category, catIndex) => (
//                           <li key={catIndex}>{category.category}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//       </footer>
//     </>
//   );
// };

// export default Ecommers;