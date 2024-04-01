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
import ajijul from "../../../assets/images/ajijul.webp";
import suma from "../../../assets/images/suma.webp";
import mirazul from "../../../assets/images/mirazul.webp";
import rahima from "../../../assets/images/rahima.webp";
import himel from "../../../assets/images/himel.webp";
import tanvir from "../../../assets/images/tanvir.webp";
import malek from "../../../assets/images/malek.webp";
import din from "../../../assets/images/din.webp";
import bindu from "../../../assets/images/bindu.webp";
import hridoy from "../../../assets/images/hridoy.webp";
import riaz from "../../../assets/images/riaz.webp";
import ariful from "../../../assets/images/ariful.webp";
import mijanur from "../../../assets/images/mijanur.webp";

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
          delay: 4500,
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
          <div className="w-full bg-white rounded-lg p-8  h-[600px] flex flex-col justify-between items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={rahima}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Rahima Sultana
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> I am Rahima Sultana and working as a virtual
                assistant for Forex 02 Hero. I&apos;m thrilled to extend a warm
                invitation to you today to join our team, where we have an
                abundance of opportunities for achieving better and smarter
                passive income in the forex market. We are working for a
                successful trading community.
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
          <div className="w-full bg-white rounded-lg p-8  h-[600px] flex flex-col justify-between items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={suma}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Shuma Akhter
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hi,</p> I am Shuma Akhter and working as a virtual assistant
                for Forex 02 Hero. I'm thrilled to extend a warm invitation to
                you today to join our team, where we have an abundance of
                opportunities for achieving better and smarter passive income in
                the forex market. We are working for a successful trading
                community. Feel free to contact with me for further information.
                <p>Thank you.</p>
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
          <div className="w-full bg-white rounded-lg p-8  h-[600px] flex flex-col justify-between items-center">
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
                <p>Hello,</p> Assalamu Allaikum I&apos;m Engineer Azizul Haque I am
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
          <div className="w-full bg-white rounded-lg p-8  h-[600px] flex flex-col justify-between items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={mirazul}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Md Mirazul islam
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> I am Md Mirazul islam and working as a virtual
                assistant for Forex 02 Hero. I&apos;m thrilled to extend a warm
                invitation to you today to join our team, where we have an
                abundance of opportunities for achieving better and smarter
                passive income in the forex market. We are working for a
                successful trading community. Feel free to contact with me for
                further information.
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
          <div className="w-full bg-white rounded-lg p-8  h-[600px] flex flex-col justify-between items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={himel}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Md Himel Mia{" "}
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> I&apos;m Md Himel Mia. We want to make a successful
                trading community in 2024. We are ready for your support. We
                provide you market analyses, Meta5 Terminal service and others
                trade related issue. Stay with us and Be a Trader✌
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
          <div className="w-full bg-white rounded-lg p-8  h-[600px] flex flex-col justify-between items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={tanvir}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">Tanvir</p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> I&apos;m Tanvir and working as a virtual assistant of
                "Forex02Hero" We are working for a successful trading community
                and you can became a part of us. So for any quarry you can
                contract with us.
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
          <div className="w-full bg-white rounded-lg p-8  h-[600px] flex flex-col justify-between items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={malek}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Md.Abdul Malek
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> I'm Md.Abdul Malek and working as a virtual
                assistant of "Forex 02 Hero" We are working for a successful
                trading community and you became a part of us. So for any quarry
                you can contract with us. 
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
          <div className="w-full bg-white rounded-lg p-8  h-[600px] flex flex-col justify-between items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={din}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">Din Islam </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello Traders,</p>I'm Din Islam. Trading is a journey. If you
                wanna make you profitable you have to follow the rules.. We
                "Forex 02 Hero" Team are working for a successful trading
                community. So stay connected and be a Trader. For more
                information contract with us
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
          <div className="w-full bg-white rounded-lg p-8  h-[600px] flex flex-col justify-between items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={bindu}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Bindu Runa{" "}
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> I'm Bindu Runa working as a virtual assistant of
                "Forex 02 Hero". You all know forex is the largest financial
                markets in the world. Without knowing the market you can't
                sustained here. "Forex 02 Hero"could be a opportunity for you.
                We are going to provide you something better than you think. So
                be connected with us. 
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
          <div className="w-full bg-white rounded-lg p-8  h-[600px] flex flex-col justify-between items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={hridoy}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Md Hridoy Mia{" "}
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> This is Md Hridoy Mia . I'm really very glad to be
                a part of "FOREX ZERO TO HERO". I am here as a virtual
                assistant. The mind is a fascinating instrument that can make or
                break you. For being a successful trader,we are specially
                working on mind game and many other things. Wake up, trade,
                repeat... Stay connected, be happy and make others happy.
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
          <div className="w-full bg-white rounded-lg p-8  h-[600px] flex flex-col justify-between items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={riaz}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Md Riaz Uddin Rana{" "}
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> This is Md Riaz Uddin Rana. I'm really very glad
                to be a part of "FOREX ZERO TO HERO". I am here as a virtual
                assistant. The mind is a fascinating instrument that can make or
                break you. For being a successful trader,we are specially
                working on mind game and many other things. Wake up, trade,
                repeat... Stay connected, be happy and make others happy.
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
          <div className="w-full bg-white rounded-lg p-8  h-[600px] flex flex-col justify-between items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={ariful}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Kh. Arifur Rahman{" "}
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p> I'm Kh. Arifur Rahman, virtual assistant of
                Forex02hero. The world best support team is with Forex02hero and
                DBinvesting. We are open 24 hours and more than that on our
                forum. You can see multiple language supports as well. We assist
                you immediately. Our goal is to make a successful trading
                community. For further info or any queries please contact thanks
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
          <div className="w-full bg-white rounded-lg p-8  h-[600px] flex flex-col justify-between items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={mijanur}
                alt=""
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Md Mijanur Rahman{" "}
              </p>
              <p className="text-base  text-gray-400 font-normal">
                <p>Hello,</p>Md Mijanur Rahman Assalamu Alaikum forex zero to
                hero course working as virtual assistant. I am a very successful
                trader and I have managed to achieve success in forex. I am
                blessed to have successfully completed the Forex02Hero course.
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
