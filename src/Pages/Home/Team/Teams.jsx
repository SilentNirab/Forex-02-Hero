// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Teams = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className=" rounded overflow-hidden text-center py-10 shadow-lg">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>{" "}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-700 text-base md:max-w-[500px] mx-auto">
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
              <div className="font-bold text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-700 text-base md:max-w-[500px] mx-auto">
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
              <div className="font-bold text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-700 text-base md:max-w-[500px] mx-auto">
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
              <div className="font-bold text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-700 text-base md:max-w-[500px] mx-auto">
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
              <div className="font-bold text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-700 text-base md:max-w-[500px] mx-auto">
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
              <div className="font-bold text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-700 text-base md:max-w-[500px] mx-auto">
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
              <div className="font-bold text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-700 text-base md:max-w-[500px] mx-auto">
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
              <div className="font-bold text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-700 text-base md:max-w-[500px] mx-auto">
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
              <div className="font-bold text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-700 text-base md:max-w-[500px] mx-auto">
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
              <div className="font-bold text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-700 text-base md:max-w-[500px] mx-auto">
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
              <div className="font-bold text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-700 text-base md:max-w-[500px] mx-auto">
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
              <div className="font-bold text-xl mb-2">Md Ajijul</div>
              <p className="text-gray-700 text-base md:max-w-[500px] mx-auto">
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
