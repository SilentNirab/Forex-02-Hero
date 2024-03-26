// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// react icons
import {
  FaFacebookF,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

// image import
import ajijul from "../../../assets/images/ajijul.jpg";

import "swiper/css/bundle";

// import required modules
import { Autoplay } from "swiper/modules";

const Teams = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          140: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="w-full bg-white rounded-lg p-8 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={ajijul}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Engineer Azizul Haque
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> Assalamu Allaikum I'm Engineer Azizul Haque I am
                working as Forex 02 hero virtual assistant so if anyone has any
                problem please let me know or call me directly.
                <p>Thank you</p>
              </p>
            </div>

            <div className="flex items-center mt-6 space-x-5">
              <FaFacebookF />
              <FaTwitter />
              <FaTelegram />
              <FaInstagram />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-full bg-white rounded-lg p-8 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={ajijul}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Engineer Azizul Haque
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> Assalamu Allaikum I'm Engineer Azizul Haque I am
                working as Forex 02 hero virtual assistant so if anyone has any
                problem please let me know or call me directly.
                <p>Thank you</p>
              </p>
            </div>

            <div className="flex items-center mt-6 space-x-5">
              <FaFacebookF />
              <FaTwitter />
              <FaTelegram />
              <FaInstagram />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-full bg-white rounded-lg p-8 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={ajijul}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Engineer Azizul Haque
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> Assalamu Allaikum I'm Engineer Azizul Haque I am
                working as Forex 02 hero virtual assistant so if anyone has any
                problem please let me know or call me directly.
                <p>Thank you</p>
              </p>
            </div>

            <div className="flex items-center mt-6 space-x-5">
              <FaFacebookF />
              <FaTwitter />
              <FaTelegram />
              <FaInstagram />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-full bg-white rounded-lg p-8 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={ajijul}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Engineer Azizul Haque
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> Assalamu Allaikum I'm Engineer Azizul Haque I am
                working as Forex 02 hero virtual assistant so if anyone has any
                problem please let me know or call me directly.
                <p>Thank you</p>
              </p>
            </div>

            <div className="flex items-center mt-6 space-x-5">
              <FaFacebookF />
              <FaTwitter />
              <FaTelegram />
              <FaInstagram />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-full bg-white rounded-lg p-8 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={ajijul}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Engineer Azizul Haque
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> Assalamu Allaikum I'm Engineer Azizul Haque I am
                working as Forex 02 hero virtual assistant so if anyone has any
                problem please let me know or call me directly.
                <p>Thank you</p>
              </p>
            </div>

            <div className="flex items-center mt-6 space-x-5">
              <FaFacebookF />
              <FaTwitter />
              <FaTelegram />
              <FaInstagram />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-full bg-white rounded-lg p-8 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={ajijul}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Engineer Azizul Haque
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> Assalamu Allaikum I'm Engineer Azizul Haque I am
                working as Forex 02 hero virtual assistant so if anyone has any
                problem please let me know or call me directly.
                <p>Thank you</p>
              </p>
            </div>

            <div className="flex items-center mt-6 space-x-5">
              <FaFacebookF />
              <FaTwitter />
              <FaTelegram />
              <FaInstagram />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-full bg-white rounded-lg p-8 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={ajijul}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Engineer Azizul Haque
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> Assalamu Allaikum I'm Engineer Azizul Haque I am
                working as Forex 02 hero virtual assistant so if anyone has any
                problem please let me know or call me directly.
                <p>Thank you</p>
              </p>
            </div>

            <div className="flex items-center mt-6 space-x-5">
              <FaFacebookF />
              <FaTwitter />
              <FaTelegram />
              <FaInstagram />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-full bg-white rounded-lg p-8 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={ajijul}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Engineer Azizul Haque
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> Assalamu Allaikum I'm Engineer Azizul Haque I am
                working as Forex 02 hero virtual assistant so if anyone has any
                problem please let me know or call me directly.
                <p>Thank you</p>
              </p>
            </div>

            <div className="flex items-center mt-6 space-x-5">
              <FaFacebookF />
              <FaTwitter />
              <FaTelegram />
              <FaInstagram />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-full bg-white rounded-lg p-8 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={ajijul}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Engineer Azizul Haque
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> Assalamu Allaikum I'm Engineer Azizul Haque I am
                working as Forex 02 hero virtual assistant so if anyone has any
                problem please let me know or call me directly.
                <p>Thank you</p>
              </p>
            </div>

            <div className="flex items-center mt-6 space-x-5">
              <FaFacebookF />
              <FaTwitter />
              <FaTelegram />
              <FaInstagram />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Teams;
