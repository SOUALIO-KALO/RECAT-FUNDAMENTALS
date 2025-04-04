import "./Logo.css";
import monLogo from "../../assets/logo-transparent.png";

const Logo = () => {
  return (
    <>
      <div className="logo">
        <img src={monLogo} alt="Mon logo" className="logo__img" />
      </div>
    </>
  );
};

export default Logo;
