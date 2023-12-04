import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./home.css";

function Home() {
  const imgurl="http://localhost:1337"

  const [content, setContent] = useState('');
  console.log(content)
  const [activeSlide, setActiveSlide] = useState(0);
  const fetchContent = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/home-pages?populate=*');
      //console.log(response.data.data);
      setContent(response.data.data);
    }
    catch (error) {
      console.log('error', error);
    }
  }
  useEffect(() => {
    fetchContent();
  }, [])
  const handleSlideChange = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  return (
    <>
      <div className="container-fluid">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
          <div className="carousel-indicators">
            {content && content.attributes && content.attributes.header && content.attributes.header.map((item, index) => (
              <input
                type="radio"
                key={index}
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === activeSlide ? 'active' : ''}
                aria-current={index === activeSlide ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
                onChange={() => handleSlideChange(index)}
              />
            ))}
          </div>
          <div className="carousel-inner">
          {content && content.attributes.map((item, index) => (
              <div key={index} className={`carousel-item ${index === activeSlide ? 'active' : ''}`}>
                <img src={imgurl+ item.attributes.image.data.attributes.url} className="d-block w-100" height={500} alt="..." />  
                <div className="carousel-caption d-none d-md-block title">
                  <h1>{item.title}</h1>
                  <h4>{item.sub_title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        {content && content.attributes && content.attributes.top_block && content.attributes.middle && content.attributes.side_block && content.attributes.gallery && (
          <>
            <div className=' main'>
              <div className="row text-center top-title">
                <h1 className='title-font'>{content.attributes.top_block.title}</h1>
              </div>
              <div className="row d-flex top-desc">
                <p>{content.attributes.top_block.description}</p>
              </div>
              <div className='underline w-50 bg-dark'></div>
              {/* <hr className='underline'></hr> */}
              <div className="row ">
                <h5 className='top-sub-title'>{content.attributes.top_block.bottom_title}</h5>
              </div>
            </div>
            <div className='middle-content'>
              <div className='row '>
                <div className='col'>
                  <div className='row middle-title'>
                    <h1>{content.attributes.middle.title}</h1>
                  </div>
                  <div className='underline w-50 bg-dark'></div>
                  <div className='row'>
                    <p>{content.attributes.middle.bottom_title}</p>
                  </div>
                </div>
                <div className='col d-flex'>
                  {content.attributes.side_block.map((item, index) => (
                    <>
                      <div key={index} className='side-content'>
                        <div className='side-img'>
                          <img src={item.img_url} className="" alt="..." />
                        </div>
                        <div className='side-desc'>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Home
