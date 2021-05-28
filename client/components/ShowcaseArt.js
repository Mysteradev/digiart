import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, CardText, CardImg, Col } from "reactstrap";
import { API_URL } from "../lib/constants";
import styles from "../styles/ShowcaseArt.module.scss";
import Link from "next/link";

const ShowcaseArt = ({ title, description, pictures, price, slug }) => {
  return (
    <>
      <Col>
        <Link href={`/art/${slug}`}>
          <a className="text-decoration-none text-dark">
            <Card
              className={`border-0 ${styles["shadow-flat"]} ${styles["card-hover-effect"]}`}
            >
              <CardImg
                top
                width="100%"
                src={`${API_URL}${pictures[0].url}`}
                alt={`${pictures[0].alternativeText}`}
                className={styles["card-max-size"]}
              />
              <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardText>{description}</CardText>
                <CardText>
                  <small className="text-muted">{price}</small>
                </CardText>
              </CardBody>
            </Card>
          </a>
        </Link>
      </Col>
    </>
  );
};

ShowcaseArt.propTypes = {
  title: PropTypes.string.isRequired,
  pictures: PropTypes.array.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  slug: PropTypes.string.isRequired,
};

export default ShowcaseArt;
