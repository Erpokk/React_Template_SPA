import Container from "../Container/Container";
import Section from "../Section/Section";

const Hero1 = ({ heading, paragraphs }) => {
  return (
    <Section>
      <Container>
        <h1>{heading}</h1>
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        <img
          loading="lazy"
          src="/img/olymp.webp"
          alt="Gates of Olympus Slot Oyunları"
        />
      </Container>
    </Section>
  );
};

export default Hero1;
