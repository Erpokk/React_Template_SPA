import { Link } from "react-router-dom";

import scss from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link to="/" className={scss.logo}>
      <img src="/img/logo.webp" alt="Logo of website" loading="lazy" />
    </Link>
  );
};

export default Logo;

{
  /*<p>Tiny</p>
  <p>Pallet</p>
  <p>House</p>*/
}
