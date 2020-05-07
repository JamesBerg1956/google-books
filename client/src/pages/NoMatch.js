// import React
import React from "react";
// deconstruct Col, Row, and Container from components
import { Col, Row, Container } from "../components/Grid";
// import jumbotron component
import Jumbotron from "../components/Jumbotron";

// No Match function
function NoMatch() {
  // return JSX code
  return (
    <Container fluid>
      {/* Row component */}
      <Row>
        {/* Col component */}
        <Col size="md-12">
          {/* Jumbotron */}
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

// export NoMatch component
export default NoMatch;
