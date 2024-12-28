import Container from "../Container/Container";
import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <Container>
        <div className={scss.restrictions}>
          <img
            src="/img/footer/eighteen.webp"
            loading="lazy"
            alt="Sorumlu Bahis"
          />
        </div>
        <div className={scss.rights}>
          <p>2024, All rights reserved</p>
          <p>Sorumlu Oyun Oynayın</p>
        </div>
        <div className={scss.payMethod}>
          <img
            src="/img/footer/1_visa.svg"
            alt="Visa Ödeme Yöntemi"
            loading="lazy"
          />
          <img
            src="/img/footer/2_mc.svg"
            alt="Mastercard Ödeme Yöntemi"
            loading="lazy"
          />
          <img
            src="/img/footer/3_tr_papara.svg"
            alt="Papara Ödeme Yöntemi"
            loading="lazy"
          />
          <img
            src="/img/footer/5_tr_payfix.svg"
            alt="Payfix Ödeme Yöntemi"
            loading="lazy"
          />
          <img
            src="/img/footer/7_bitcoin.svg"
            alt="Bitcoin Ödeme Yöntemi"
            loading="lazy"
          />
          <img
            src="/img/footer/7_usdt.svg"
            alt="USDT Ödeme Yöntemi"
            loading="lazy"
          />
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
