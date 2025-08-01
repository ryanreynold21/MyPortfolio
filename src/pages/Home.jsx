import React, { useEffect, useState } from "react";
import RootLayout from "../layout/RootLayout";
import akw from "../images/akw2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebookSquare,
  FaLine,
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <RootLayout>
        <section className="hero min-h-screen">
          <div className="" data-aos="fade-right" data-aos-duration="1000">
            <div className=" hero-content flex-col xl:flex-row gap-10 pt-4 lg:pt-10">
              {/* photo */}
              <div className="ml-10 mr-10 lg:ml-10 lg:mr-5">
                <img
                  className="w-[250px] lg:w-[300px] h-[250px] lg:h-[300px] object-cover border-[10px] border-[#4D4D4D] rounded-full"
                  src={akw}
                  alt=""
                />
              </div>
              {/* content */}
              <div class=" mt-5 flex flex-col items-center xl:items-start gap-5 cursor-none">
                <h1 className=" text-white text-[40px] lg:text-[54px] font-[700] font-montserrat">
                  Aung Kyaw Win
                </h1>
                <span className=" text-[#BBBBBB] w-[350px] lg:w-[500px] text-md leading-[30px] lg:text-lg text-center lg:text-start">
                  Hi, I'm Aung Kyaw Win — a frontend developer with 4+ years of
                  experience in React, Redux, Tailwind CSS, and Next.js. I’ve
                  built responsive, user-friendly apps .I’m passionate about
                  clean, efficient UI that works seamlessly across devices.
                </span>
                <div className=" flex text-white text-2xl mt-2 gap-5">
                  <span className="hover:text-[#BBBBBB] transition-colors duration-300">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100026937290228"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookSquare />
                    </a>
                  </span>
                  <span className="hover:text-[#BBBBBB] transition-colors duration-300">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/aung-kyaw-win-473388287"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </span>
                  <span className="hover:text-[#BBBBBB] transition-colors duration-300">
                    <a
                      target="_blank"
                      href="https://github.com/ryanreynold21"
                      rel="noopener noreferrer"
                    >
                      <FaGithubSquare />
                    </a>
                  </span>
                  <span className="hover:text-[#BBBBBB] transition-colors duration-300">
                    <a
                      target="_blank"
                      href="https://t.me/aungKyaw_win"
                      rel="noopener noreferrer"
                    >
                      <FaTelegram />
                    </a>
                  </span>
                  <span className="hover:text-[#BBBBBB] transition-colors duration-300">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/aungkyawwin106?igsh=MTB4cWtrejl0NG9rOQ=="
                      rel="noopener noreferrer"
                    >
                      <FaInstagramSquare />
                    </a>
                  </span>
                  <span className="hover:text-[#BBBBBB] transition-colors duration-300">
                    <a
                      target="_blank"
                      href="https://line.me/ti/p/aungKyaw_win"
                      rel="noopener noreferrer"
                    >
                      <FaLine />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RootLayout>
    </>
  );
};

export default Home;
