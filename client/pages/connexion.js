import React from 'react';
import {Button, Col, Container, Row, Form, Label, Input} from "reactstrap";
import Image from "next/image";
import styles from "../styles/Connexion.module.css";


export default function Connexion() {
  return (
    <div>
      <Container fluid>
        <Row className={styles["full-col-img"]}>
          <Col className={"mt-5"} md={4}>
            <div className={"text-center"}>
              <h1>Connexion</h1>
            </div>
            <Form className={"mb-5"}>
              <Label for="pseudo">Pseudo</Label>
              <Input id="name" type="text" placeholder="XxInclifDarkSasukexX" required/>
              <Label for="password">Mot de passe</Label>
              <Input id="password" type="password" placeholder="azerty123" required/>
              <Button color="primary" className={"mt-3"}>Connexion</Button>
            </Form>
            <Row>
              <Col>
                <Button color="primary">Connexion avec Google</Button>
              </Col>
              <Col>
                <Button color="primary" outline>Connexion avec Twitter</Button>
              </Col>
            </Row>
          </Col>
          <Col className="d-none d-lg-block" md={8}>
            <Image
              style={{objectFit: "cover"}}
              src="/images/login.webp"
              alt="Picture of a girl on a rocket"
              layout={"fill"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

