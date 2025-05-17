import Button from "../../components/Button/Button.jsx";
import { Container } from "../../components/Container/Container.jsx";
import { Section } from "../../components/Section/Section.jsx";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Section secClass={s.hero}>
        <Container contClass={s.heroContainer}>
          <h1 className={s.title}>Find your perfect rental car</h1>
          <p className={s.text}>
            Reliable and budget-friendly rentals for any journey
          </p>
          <Button to="/catalog">View Catalog</Button>
        </Container>
      </Section>
    </>
  );
};
export default HomePage;
