import data from "../../articals.json";
import Card from "./Card";

const Cards = () => {
  const datas = data;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 gap-y-10 mt-20">
        {datas.map((data) => (
          <Card key={data.id} card={data}></Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
