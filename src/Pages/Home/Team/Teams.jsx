// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

// import required modules
import { Autoplay } from "swiper/modules";

const Teams = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
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
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className=" rounded overflow-hidden text-center py-10  shadow-indigo-500">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>{" "}
            <div className="px-6 py-4">
              <div className="font-bold text-white text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-200 text-base max-w-sm mx-auto">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam, neque?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" rounded overflow-hidden text-center py-10 shadow-lg">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>{" "}
            <div className="px-6 py-4">
              <div className="font-bold text-white text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-200 text-base max-w-sm mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                harum quis possimus velit consectetur minima veritatis debitis
                nemo provident voluptatem.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" rounded overflow-hidden text-center py-10 shadow-lg">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>{" "}
            <div className="px-6 py-4">
              <div className="font-bold text-white text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-200 text-base max-w-sm mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                harum quis possimus velit consectetur minima veritatis debitis
                nemo provident voluptatem.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" rounded overflow-hidden text-center py-10 shadow-lg">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>{" "}
            <div className="px-6 py-4">
              <div className="font-bold text-white text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-200 text-base max-w-sm mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                harum quis possimus velit consectetur minima veritatis debitis
                nemo provident voluptatem.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" rounded overflow-hidden text-center py-10 shadow-lg">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>{" "}
            <div className="px-6 py-4">
              <div className="font-bold text-white text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-200 text-base max-w-sm mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                harum quis possimus velit consectetur minima veritatis debitis
                nemo provident voluptatem.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" rounded overflow-hidden text-center py-10 shadow-lg">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>{" "}
            <div className="px-6 py-4">
              <div className="font-bold text-white text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-200 text-base max-w-sm mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                harum quis possimus velit consectetur minima veritatis debitis
                nemo provident voluptatem.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" rounded overflow-hidden text-center py-10 shadow-lg">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>{" "}
            <div className="px-6 py-4">
              <div className="font-bold text-white text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-200 text-base max-w-sm mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                harum quis possimus velit consectetur minima veritatis debitis
                nemo provident voluptatem.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" rounded overflow-hidden text-center py-10 shadow-lg">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>{" "}
            <div className="px-6 py-4">
              <div className="font-bold text-white text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-200 text-base max-w-sm mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                harum quis possimus velit consectetur minima veritatis debitis
                nemo provident voluptatem.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" rounded overflow-hidden text-center py-10 shadow-lg">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>{" "}
            <div className="px-6 py-4">
              <div className="font-bold text-white text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-200 text-base max-w-sm mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                harum quis possimus velit consectetur minima veritatis debitis
                nemo provident voluptatem.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" rounded overflow-hidden text-center py-10 shadow-lg">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>{" "}
            <div className="px-6 py-4">
              <div className="font-bold text-white text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-200 text-base max-w-sm mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                harum quis possimus velit consectetur minima veritatis debitis
                nemo provident voluptatem.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" rounded overflow-hidden text-center py-10 shadow-lg">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>{" "}
            <div className="px-6 py-4">
              <div className="font-bold text-white text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-200 text-base max-w-sm mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                harum quis possimus velit consectetur minima veritatis debitis
                nemo provident voluptatem.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Teams;
