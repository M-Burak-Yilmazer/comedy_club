import image from "../assets/img/comedian.png";

const Header = () => {
  return (
    <header>
      <h1>Kayseri Comedy Festival</h1>
      <h5>11-17 December , 2023</h5>
      <img  src={image} alt="" />
    </header>
  );
};
export default Header;
