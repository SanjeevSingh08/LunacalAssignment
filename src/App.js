import logo from "./logo.svg";
import "./App.css";
import { useState, useRef } from "react";
import i1 from "./images/i1.png";
import i2 from "./images/i2.png";
import i3 from "./images/i3.png";
import i4 from "./images/i4.png";
import i5 from "./images/i5.png";
import i6 from "./images/i6.png";
import i7 from "./images/i7.jpg";

function App() {
  document.title = "Lunacal";
  const [tab, setTab] = useState("aboutme");
  const [carouselImages, setCarouselImages] = useState([i7, i7, i7, i7, i7]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHoveringPrev, setIsHoveringPrev] = useState(false);
  const [isHoveringNext, setIsHoveringNext] = useState(false);

  const fileInputRef = useRef(null);

  const handleAddImage = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCarouselImages([...carouselImages, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };
  const nextSlide = () => {
    setIsHoveringNext(true);
    setTimeout(() => setIsHoveringNext(false), 100);
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, Math.max(0, carouselImages.length - 3))
    );
  };

  const prevSlide = () => {
    setIsHoveringPrev(true);
    setTimeout(() => setIsHoveringPrev(false), 100);
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const visibleImages = carouselImages.slice(currentIndex, currentIndex + 3);
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= carouselImages.length - 3;
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center p-4">
        <section className="h-fit w-full flex flex-col lg:flex-row justify-between my-auto rounded-[28px] bg-cg shadow-cs lg:pl-[29px] p-12 lg:pr-[86px] lg:pt-[96px] lg:pb-[112px] gap-[57px]">
          <div className="lg:w-1/2 min-h-[300px]  lg:order-1 order-2 rounded-[27px] border border-[#96BEE7] bg-[#616161D1]"></div>
          <div className="flex lg:w-1/2 lg:order-2 flex-col relative">
            <div className="w-full flex justify-between pl-[12px] pt-[20px] pb-[27px] bg-[#363C43] gap-[17px] rounded-[19px] shadow-cs2">
              <div className="flex flex-none min-w-[24px] ] flex-col justify-between">
                <img src={i1} className="!w-6 h-6" alt="" />
                <img src={i2} className="!w-6 !h-[30px]" alt="question mark" />
                <span></span>
              </div>

              <div className="flex-grow">
                <div className="relative flex  bg-[#171717] rounded-[23px] p-[6px] gap-[6px]">
                  <div
                    className={`absolute top-[6px] h-[calc(100%-12px)] bg-[#28292F] rounded-2xl transition-all duration-500 ${
                      tab === "aboutme"
                        ? "left-[6px] w-[calc(33.33%-12px)]"
                        : tab === "experience"
                        ? "left-[calc(33.33%+4px)] w-[calc(33.33%-12px)]"
                        : "left-[calc(66.66%+2px)] w-[calc(33.33%-10px)]"
                    }`}
                  ></div>

                  <button
                    onClick={() => setTab("aboutme")}
                    className={`relative   z-10 w-1/3 flex justify-center items-center px-6 py-4 text-[16px] xl:text-[18px] leading-4 font-medium rounded-2xl ${
                      tab === "aboutme"
                        ? "text-[#FFFFFF] shadow-custom-1"
                        : "text-[#A3ADB2]  tab"
                    }`}
                  >
                    About Me
                  </button>

                  <button
                    onClick={() => setTab("experience")}
                    className={`relative z-10 w-1/3 flex justify-center items-center px-6 py-[10px] text-[16px] xl:text-[18px] leading-4 font-medium rounded-2xl ${
                      tab === "experience"
                        ? "text-[#FFFFFF]  shadow-custom-1"
                        : "text-[#A3ADB2]  tab "
                    }`}
                  >
                    Experiences
                  </button>

                  <button
                    onClick={() => setTab("recommended")}
                    className={`relative z-10  w-1/3 flex justify-center items-center px-6 py-[10px] text-[16px] xl:text-[18px] leading-4 font-medium rounded-2xl ${
                      tab === "recommended"
                        ? "text-[#FFFFFF]  shadow-custom-1"
                        : "text-[#A3ADB2] tab"
                    }`}
                  >
                    Recommended
                  </button>
                </div>

                <div className="mt-[35px] text-[19px] leading-[25px] text-[#969696]">
                  {tab === "aboutme" ? (
                    <>
                      <p>
                        Hello! I’m Dave, your sales rep here from Salesforce.
                        I’ve been working at this awesome company for 3 years
                        now.
                      </p>
                      <p className="mt-6">
                        I was born and raised in Albany, NY& have been living in
                        Santa Carla for the past 10 years my wife Tiffany and my
                        4 year old daughters- Emma and Ella. Both of them are
                        just starting school, so my calender is usually blocked
                        between 9-10 AM. This is a...
                      </p>
                    </>
                  ) : tab === "experience" ? (
                    <>
                      <p>
                        With over 10 years of experience in sales and customer
                        relationship management, I've had the pleasure of
                        working with a diverse range of clients. My background
                        includes:
                      </p>
                    </>
                  ) : tab === "recommended" ? (
                    <>
                      <p>
                        Based on your interests and previous interactions, I
                        would recommend the following resources and tools that
                        could be beneficial for you:
                      </p>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="flex flex-none min-w-[8px] items-center justify-center">
                <CustomSvgIcon />
              </div>
            </div>

            <div className="mt-[21px]  w-[85%] m-auto mb-[17px]">
              <img src={i6} alt="partition" />
            </div>

            <div className="w-full flex justify-between pl-[12px] pr-[37px] pt-[20px] bg-[#363C43] gap-[17px] rounded-[19px] shadow-cs2">
              <div className="flex flex-none min-w-[24px] mb-[27px] flex-col justify-between">
                <img src={i1} className="!w-6 h-6" alt="" />
                <img src={i2} className="!w-6 !h-[30px]" alt="question mark" />
                <span></span>
              </div>
              <div className="w-[95%]">
                <div className="w-full flex justify-between mb-[20px]">
                  <button className="flex justify-end text-[20px] items-center shadow-gallery-s px-[38px] py-4 font-medium bg-[#171717] rounded-[20px] text-white">
                    Gallery
                  </button>
                  <div className="flex items-center">
                    <button
                      onClick={handleAddImage}
                      className="text-white mr-[40px] font-bold shadow-3d-button rounded-[104px] py-4 text-[12px] px-6"
                    >
                      + ADD IMAGE
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    <div>
                      <button
                        onClick={prevSlide}
                        disabled={isAtStart}
                        className={`p-4 z-[2] mr-[18px] rounded-full shadow-arrow-shadow ${
                          isAtStart || isHoveringPrev
                            ? "bg-arrowhover"
                            : "bg-arrow"
                        } transition-colors duration-200`}
                        onMouseEnter={() => setIsHoveringPrev(true)}
                        onMouseLeave={() => setIsHoveringPrev(false)}
                      >
                        <ArrowIcon
                          color={
                            isAtStart || isHoveringPrev ? "#FFFFFF" : "#6F787C"
                          }
                          className="w-[14px] h-[14px]"
                        />
                      </button>
                      <button
                        onClick={nextSlide}
                        disabled={isAtEnd}
                        className={`p-4 z-[2] rounded-full shadow-arrow-shadow ${
                          isAtEnd || isHoveringNext
                            ? "bg-arrowhover"
                            : "bg-arrow"
                        } transition-colors duration-200`}
                        onMouseEnter={() => setIsHoveringNext(true)}
                        onMouseLeave={() => setIsHoveringNext(false)}
                      >
                        <ArrowIcon
                          color={
                            isAtEnd || isHoveringNext ? "#FFFFFF" : "#6F787C"
                          }
                          className="w-[14px] rotate-180 h-[14px]"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative h-[220px] w-[101%]  flex items-center overflow-hidden">
                  <div
                    className="flex pl-4 transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `${
                        currentIndex >= carouselImages.length - 3
                          ? `translateX(-${currentIndex * 205 + 140}px)`
                          : `translateX(-${currentIndex * 205}px)`
                      }`,
                    }}
                  >
                    {carouselImages
                      .slice()
                      .reverse()
                      .map((image, index) => (
                        <div
                          key={index}
                          className="bg-red w-[178px] !h-[168px] mx-3"
                        >
                          <img
                            src={image}
                            alt="carousel"
                            className="w-[178px] cursor-pointer !h-[168px] rounded-[24px] carousel-image"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <div className=" bottom-[-30px] absolute w-[85%] m-auto left-1/2 transform -translate-x-1/2">
              <img src={i6} alt="partition" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

const CustomSvgIcon = () => {
  return (
    <svg
      width="18"
      height="74"
      viewBox="0 0 18 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2267_3337)">
        <rect
          x="1"
          y="1"
          width="8"
          height="64"
          rx="4"
          fill="url(#paint0_linear_2267_3337)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2267_3337"
          x="0.0999999"
          y="0.0999999"
          width="17.8"
          height="73.8"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="2.45" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2267_3337"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2267_3337"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2267_3337"
          x1="-9"
          y1="8.5"
          x2="10.3151"
          y2="60.0069"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#888989" />
          <stop offset="1" stopColor="#4A4E54" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const ArrowIcon = ({ color, ...props }) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.40222 8.37645H15.5967"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.40222 15.3765L1.40222 8.37646L8.40222 1.37646"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
