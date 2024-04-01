import Container from "../../Components/Container/Container";

const ButtonComponent = () => {
  return (
    <div>
      <Container>
        {" "}
        <div>
          <div className="text-center pb-8">
            <h2 className="text-3xl md:text-5xl inline border-b-2 border-green-600  font-semibold">
              Our Daily Analysis
            </h2>
            <p className=" md:max-w-[600px] mx-auto py-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi eligendi adipisci laudantium. Quo eveniet minima omnis
              quod consequuntur quis magni.
            </p>
          </div>
          <div className="flex pb-10 md:pb-20 justify-center">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Button 1 */}
              <button className="w-400 h-200 bg-blue-500 text-white font-bold text-lg rounded-lg p-6">
                <div>
                  <p>USD/JPY</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </button>

              {/* Button 2 */}
              <button className="w-400 h-200 bg-green-500 text-white font-bold text-lg rounded-lg p-6">
                <div>
                  <p>USD/CAD</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </button>

              {/* Button 3 */}
              <button className="w-400 h-200 bg-yellow-500 text-white font-bold text-lg rounded-lg p-6">
                <div>
                  <p>XAU/USD</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </button>

              {/* Button 4 */}
              <button className="w-400 h-200 bg-red-500 text-white font-bold text-lg rounded-lg p-6">
                <div>
                  <p>EUR/JPY</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </button>

              {/* Button 5 */}
              <button className="w-400 h-200 bg-indigo-500 text-white font-bold text-lg rounded-lg p-6">
                <div>
                  <p>GBP/USD</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </button>

              {/* Button 6 */}
              <button className="w-400 h-200 bg-pink-500 text-white font-bold text-lg rounded-lg p-6">
                <div>
                  <p>EUR/CAD</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </button>

              {/* Button 7 */}
              <button className="w-400 h-200 bg-purple-500 text-white font-bold text-lg rounded-lg p-6">
                <div>
                  <p>CAD/JPY</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </button>

              {/* Button 8 */}
              <button className="w-400 h-200 bg-gray-500 text-white font-bold text-lg rounded-lg p-6">
                <div>
                  <p>AUD/USD</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ButtonComponent;
