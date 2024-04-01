import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

const Analysis = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div className=" sticky top-0 font-inter antialiased">
        <main className="relative  flex flex-col justify-center bg-slate-50 overflow-hidden">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div className="flex justify-center">
              {/* Modal video component */}
              <div className={`[${modalOpen ? "x-cloak" : ""}]:hidden`}>
                {/* Video thumbnail */}
                <button
                  className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
                  onClick={() => setModalOpen(true)}
                  aria-controls="modal"
                  aria-label="Watch the video"
                >
                  <img
                    className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out"
                    src="https://cruip-tutorials.vercel.app/modal-video/modal-video-thumb.jpg"
                    width="768"
                    height="432"
                    alt="Modal video thumbnail"
                  />
                  {/* Play icon */}
                  <svg
                    className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                  >
                    <circle
                      className="fill-white"
                      cx="36"
                      cy="36"
                      r="36"
                      fillOpacity=".8"
                    />
                    <path
                      className="fill-indigo-500 drop-shadow-2xl"
                      d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
                    />
                  </svg>
                </button>
                {/* End: Video thumbnail */}
                {/* Modal backdrop */}
                {modalOpen && (
                  <div
                    className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
                    onClick={() => setModalOpen(false)}
                  ></div>
                )}
                {/* End: Modal backdrop */}
                {/* Modal dialog */}
                {modalOpen && (
                  <div
                    id="modal"
                    className="fixed inset-0 z-[99999] flex px-4 md:px-6 py-6"
                    role="dialog"
                    aria-modal="true"
                  >
                    <div className="max-w-5xl mx-auto h-full flex items-center">
                      <div
                        className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden"
                        onClick={() => setModalOpen(false)}
                        onKeyDown={(e) =>
                          e.key === "Escape" && setModalOpen(false)
                        }
                      >
                        <video
                          width="1920"
                          height="1080"
                          loop
                          controls
                          autoPlay
                        >
                          <source
                            src="https://cruip-tutorials.vercel.app/modal-video/video.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                )}
                {/* End: Modal dialog */}
              </div>
              {/* End: Modal video component */}
            </div>
          </div>
        </main>
      </div>

      <div>
        <ButtonComponent></ButtonComponent>
      </div>
    </div>
  );
};

export default Analysis;
