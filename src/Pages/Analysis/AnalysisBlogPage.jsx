import Container from "../../Components/Container/Container";

const AnalysisBlogPage = () => {
  return (
    <div>
      <Container>
        <div className="mx-auto py-10">
          {/* Image Banner */}
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*zgBD_HvWK0j58Sqh99_yUA.jpeg"
            alt="Banner"
            className="max-h-[500px] rounded-lg w-full"
          />

          {/* Blog Content */}
          <div className="mt-8">
            {/* Heading */}
            <h1 className="text-2xl md:text-4xl font-bold">
              Title of the Analysis Post
            </h1>

            {/* Blog Paragraph */}
            <p className="text-sm md:text-xl mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              ut esse nesciunt ab rerum, laboriosam eligendi, inventore quasi
              consequatur, adipisci provident aliquam debitis quia eveniet eos
              aliquid dolorum aspernatur? Quis non error omnis velit recusandae
              aliquam ad aperiam corporis deserunt incidunt necessitatibus
              consequatur porro, reprehenderit consectetur? Architecto,
              dignissimos nobis aspernatur quia fugiat esse laborum dolorem
              natus! Dignissimos esse non alias mollitia quam ipsum veritatis
              reprehenderit expedita voluptates? Incidunt quae vero
              reprehenderit saepe sapiente consectetur. Eos, nulla? Repellendus
              maiores dolore laborum? Dolorum assumenda eveniet atque esse
              dolore minus et recusandae voluptatem, placeat tenetur magni.
              Doloremque consequatur sapiente sed obcaecati voluptates autem?
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AnalysisBlogPage;
