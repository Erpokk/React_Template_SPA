import Container from "../Container/Container";
import Section from "../Section/Section";

const SecH2andTxt = ({ heading, paragraphs }) => {
  return (
    <Section>
      <Container>
        <h2>{heading}</h2>
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </Container>
    </Section>
  );
};

export default SecH2andTxt;
