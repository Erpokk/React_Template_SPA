import { RiYoutubeFill } from "react-icons/ri";

import Container from "../Container/Container";
import Logo from "../Logo/Logo";

import scss from "./Header.module.scss";

const Header = () => {
  return (
    <header className={scss.header}>
      <Container>
        <div className={scss.hdWrap}>
          <div className={scss.headerWrapper}>
            <Logo />

            <a
              className={scss.socialLink}
              href="https://www.youtube.com/watch?v=GGS4MfOpb4g"
              target="_blank"
              aria-label="Link to YouTube site"
            >
              <RiYoutubeFill size={35} className={scss.socialIcon} />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
