import axios from "axios";
import React, { useEffect, useState } from "react";
import "./cloudsolutions.css";

const CloudSolutions = () => {
  const imgurl = "http://localhost:1337";
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/cloud-solutions?populate[Header][populate]=*&populate[Portals][populate]=*&populate[MiddleBlock][populate]=*"
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
      <div></div>
      <div className="container">
        {data &&
          data.map((item, index) => (
            <div key={index} className="card-container ">
              <div className="card text-bg d-flex">
                <img
                  className="img-fluid card-image"
                  src={
                    imgurl +
                    (item.attributes.Header?.titleImage?.data?.attributes
                      ?.url || "")
                  }
                  alt=""
                  width={100}
                />
                <div
                  className="card-img-overlay"
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
                      {item.attributes.Header?.Title}
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
                  <span property="name">Cloud-Solutions</span>

                  <meta property="position" content="3" />
                </span>
              </div>
              <div className="main-content">
                <h1 className="fontsize-2 main-content-header">
                  {item.attributes.MiddleBlock.Title}
                </h1>
                <div className="row">
                  <div className="col-md-6">
                    <p className="right-margin">
                      {item.attributes.MiddleBlock.lDesc}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h3>
                      {item.attributes.MiddleBlock.rSubTitle}
                    </h3>
                    <p>{item.attributes.MiddleBlock.rDesc}</p>
                  </div>
                  <div className="service-hr-tag">
                    <hr />
                    <h2 className="color-pink fontsize-3">
                      {item.attributes.MiddleBlock.lSubTitle}
                    </h2>
                   
                  </div>
                  <div className="section-gap20"></div>
                </div>
              </div>
              <div className="container d-flex flex-wrap">
                {item.attributes.Portals.map((card, cardIndex) => (
                  <div key={cardIndex} className="col-md-4 card-column">
                    <div className="d-flex flex-wrap">
                      <img
                        src={imgurl + (card.image?.data?.attributes?.url || "")}
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
            </div>
          ))}
        {console.log(data)}
      </div>
    </>
  );
};

export default CloudSolutions;
