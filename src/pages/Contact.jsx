import React, { useEffect, useState } from "react";
import RootLayout from "../layout/RootLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {
  FaFacebookSquare,
  FaLine,
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

// G9nyK9ZhU!eGVPK

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const data = { name, email, message };
  const sendEmailHandler = (e) => {
    e.preventDefault();
    console.log(data);
    emailjs.send(
      "service_4dwj2vn",
      "template_jgfcqwt",
      {
        to_name: "Aung",
        from_name: data.name,
        message: data.message,
        reply_to: data.email,
        reciever_mail: "aunkyawin2035gmail.com",
      },
      "zKkYgdkMuAge7WXcD"
    );
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Thanks For Your Messages",
      showConfirmButton: false,
      timer: 2000,
    });
    setEmail("");
    setName("");
    setMessage("");
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <RootLayout>
      <section>
        <div className="" data-aos="fade-right" data-aos-duration="1000">
          {/* contact */}
          <div className=" mt-[100px] lg:mt-[120px] mb-[50px] lg:mb-[80px] ml-[20px] lg:ml-[50px] flex flex-col gap-5">
            <div className=" p-2 bg-[#3C3D42] text-[#959595] w-[100px]">
              <span className=" font-bold">CONTACT</span>
            </div>
            <h1 className=" text-white text-[25px] lg:[text-30px] font-[800]">
              Get In Touch
            </h1>
          </div>
          {/* map */}
          <div className=" mx-[20px] md:mx-[30px] lg:mx-[50px] h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2148121766015!2d106.62965921476361!3d10.794183692311565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529297cf3a659%3A0x3464a4f60729cb56!2zSG8gQ2hpIE1pbmggQ2l0eSwgVmnhu4d0IE5hbQ!5e0!3m2!1sen!2s!4v1699515059823!5m2!1sen!2s"
              className="w-full h-full mt-5"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* form */}
          <div className=" mx-[20px] md:mx-[30px] lg:mx-[50px] mt-[60px] ">
            <form action="" onSubmit={sendEmailHandler}>
              <div className=" grid grid-cols-1 gap-10">
                <div className="w-full">
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    type="text"
                    className="mt-1 block w-full p-4 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-white text-white text-[17px] placeholder:text-[17px]"
                  />
                </div>
                <div className="">
                  <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    className="mt-1 block w-full p-4 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-white text-white text-[17px] placeholder:text-[17px]"
                  />
                </div>
                <div className=" w-full">
                  <textarea
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    name=""
                    placeholder="Message"
                    className="mt-1 block w-full p-4 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-white text-white text-[17px] placeholder:text-[17px]"
                    id=""
                    cols="100"
                    rows="6"
                  ></textarea>
                </div>
                <div className="">
                  <div className="">
                    <button className=" bg-white text-black px-[40px] py-[15px]">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>

            {/* Social Media */}
            <div className="mt-[80px] mb-[50px] text-center">
              <h2 className="text-white text-[20px] lg:text-[22px] font-[700] mb-[30px]">
                Follow Me On
              </h2>
              <div className="flex justify-center text-white text-3xl mt-5 gap-6">
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
  );
};

export default Contact;
