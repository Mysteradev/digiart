import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, CardText, CardImg, Col } from "reactstrap";

const ShowcaseArt = ({ title, image, price }) => {
  return (
    <>
      <Col>
        <Card>
          <CardImg
            top
            width="100%"
            src={`${image}`}
            alt={`Image de l'oeuvre d'art intitulé : ${title}`}
          />
          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardText>Une description</CardText>
            <CardText>
              <small className="text-muted">{price}</small>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

ShowcaseArt.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ShowcaseArt;
