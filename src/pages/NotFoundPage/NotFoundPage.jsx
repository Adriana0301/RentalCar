import { Container } from "../../components/Container/Container";
import s from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  return (
    <Container contClass={s.container}>
      <p>Woops, the page does not exist</p>
    </Container>
  );
};

export default NotFoundPage;
