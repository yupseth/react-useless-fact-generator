import Header from "./Header";
import FactDisplay from "./FactDisplay";
const Card = ({ fact }) => {
  return (
    <div className="card">
      <Header></Header>
      <FactDisplay fact={fact}></FactDisplay>
    </div>
  );
};

export default Card;
