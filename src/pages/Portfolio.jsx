import React, { useEffect } from "react";
import hotelImage from "../images/h2.jpg";
import dashboardImage from "../images/b2.jpg";
import contactImage from "../images/v1.jpg";
import shop from "../images/dp2.jpg";
import port from "../images/p2.jpg";
import developX from "../images/d2.jpg";
import travel from "../images/sp1.jpg";
import RootLayout from "../layout/RootLayout";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const data = [
    {
      id: 6,
      name: "Company Profile",
      using: "React",
      src: developX,
      href: "https://developx.app/",
    },
    {
      id: 2,
      name: "Movie Streaming",
      using: "React",
      src: travel,
      // href: "https://admin-dashboard-xi-one.vercel.app/",
      href: "https://moviespree.netlify.app/",
    },
    {
      id: 3,
      name: "Map Discovery App",
      using: "Typescript",
      src: contactImage,
      href: "https://veteran-driver-v1.netlify.app/",
    },
    {
      id: 4,
      name: "Company Profile",
      using: "React",
      src: shop,
      href: "https://depro.site",
    },
    {
      id: 1,
      name: "Hotel Website",
      using: "React",
      src: hotelImage,
      href: "https://hotel-project-cjahgenxu-khant-nyar-ko-ko.vercel.app/",
    },

    {
      id: 5,
      name: "Portfolio Website",
      using: "React",
      src: port,
      href: "https://incomparable-jalebi-c1894f.netlify.app/",
    },
  ];
  return (
    <RootLayout>
      <section name="portfolio" className="">
        <div className="" data-aos="fade-right" data-aos-duration="1000">
          {/* portfolio */}
          <div className=" mt-[100px] lg:mt-[120px] mb-[50px] lg:mb-[80px] ml-[20px] lg:ml-[50px] flex flex-col gap-5">
            <div className=" p-2 bg-[#3C3D42] text-[#959595] w-[100px] text-center">
              <span className=" font-bold">Portfolio</span>
            </div>
            <h1 className=" text-white text-[25px] lg:[text-30px] font-[800]">
              Creative Portfolio
            </h1>
          </div>
          {/* card */}
          <div className=" container md:px-10 mb-[100px]">
            <div className=" grid z-[-1] lg:grid-cols-2 2xl:grid-cols-3 gap-10 mx-10 ">
              {data?.map((pot) => {
                return (
                  <a
                    key={pot?.id}
                    href={pot?.href}
                    className=" link-overlay"
                    target="_blank"
                  >
                    <div className=" overflow-hidden relative group bg-black rounded-[10px] shadow-lg">
                      <img
                        src={pot?.src}
                        className="min-w-full h-[350px] object-cover object-top transition duration-900 ease-in-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:opacity-60 "
                        alt=""
                      />
                      <div className=" absolute top-[40%] left-[30%] hidden group-hover:flex flex-col justify-start items-start duration-900 ease-in-out">
                        <h3 className=" text-black text-[17px] p-2 font-[500] bg-white">
                          {pot?.name}
                        </h3>
                        <p className=" text-slate-500 text-start p-2 bg-white">
                          {pot?.using}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

export default Portfolio;
