import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./client.css";

const Clients = () => {
  const imgurl = "http://localhost:1337";
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/clients?populate[Header][populate]=*&populate[MiddleBlock][populate]=*&populate[Footer][populate]=*&populate[images][populate]=*"
      );
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <nav></nav>
      {data.length > 0 && (
        <div className="header-container card text-bg d-flex">
          <img
            className="bg-banner-img"
            src={
              imgurl +
              data[0].attributes.Header?.titleImage?.data?.attributes?.url
            }
            alt=""
            width={100}
            height={350}
          />
          <div className="banner-text">
            <h2>
              <span className="bgcolor-sunglow fontsize-1">
                {data[0].attributes.Header?.Title}
              </span>
            </h2>
          </div>
        </div>
      )}
      <div className="container">
        {data &&
          data.map((item, index) => (
            <div key={index} className="card-container ">
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
                    <span property="name">Zool Tech Solutions Pvt Ltd/</span>
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
                    <span property="name"> Services/</span>
                  </a>
                  <meta property="position" content="3" />
                </span>
                <span property="itemListElement" typeof="ListItem">
                  <span property="name"> Clients</span>

                  <meta property="position" content="3" />
                </span>
              </div>
              <div className="main-content">
                <h1 className="fontsize-2 main-content-header">
                  {item.attributes.MiddleBlock.Title}
                </h1>
                <div className="row">
                  <div className="service-hr-tag">
                    <hr />
                    <h2 className="color-pink fontsize-3">
                      {item.attributes.MiddleBlock.lSubTitle}
                    </h2>
                  </div>
                  <div className="section-gap20"></div>
                </div>
              </div>
              <div className="ecommerceBlocks ">
                <div className="row">
                  {item.attributes.images.data.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="col-md-2 col-sm-4 col-xs-6 col-md-offset-2 "
                    >
                      <img
                        src={imgurl + image.attributes.url}
                        alt="webContent"
                        className=" attachment img-thumbnail img-fluid m-2 p-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <footer id="colophon" className="d-flex" role="contentinfo">
                <div className="footer-widgets section-padding">
                  <div className="container">
                    <div className="row">
                      {item.attributes.Footer.Heading.map(
                        (content, headingIndex) => (
                          <div
                            key={headingIndex}
                            className="col-md-3 col-sm-12 footer-column widget-area sidebar"
                          >
                            <aside></aside>
                            <h6 className="widget-title">
                              <strong>{content.content_title}</strong>
                            </h6>
                            <div className="d-flex flex-column">
                              {content.Content.map((category, catIndex) => (
                                <span
                                  key={catIndex}
                                  className="text-muted"
                                  style={{ marginBottom: "5px" }} // Add some margin to separate items
                                >
                                  {category.category}
                                </span>
                              ))}
                            </div>
                          </div>
                        )
                      )}

                      <div className="col-md-3 ">
                        <div>
                          <h3 className="footer-title">
                            {item.attributes.Footer.Title}
                          </h3>
                          <p className="text-muted">
                            {item.attributes.Footer.Desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          ))}
        {console.log(data)}
        <Link to="/Ecommerce">eCommerce & Portals</Link>
      </div>
    </>
  );
};

export default Clients;
