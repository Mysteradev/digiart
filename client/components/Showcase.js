import ShowcaseArt from "./ShowcaseArt";
import styles from "../styles/Showcase.module.scss";
import { Container, Row } from "reactstrap";

const Showcase = ({ arts, isTop = false }) => {
  return (
    <Container className={isTop ? styles["showcase-top"] : ""}>
      <Row>
        {arts &&
          arts.map((art) => {
            return <ShowcaseArt key={art.id} {...art} />;
          })}
      </Row>
    </Container>
  );
};

export default Showcase;
