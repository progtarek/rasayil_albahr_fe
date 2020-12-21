import React from "react";
import { Container } from "../../styles/theme.variables";
import { FooterContainer } from "./PrimaryFooter.styles";

function PrimaryFooter() {
  return (
    <FooterContainer>
      <Container>
        <p className="copy-right">
          Rasayil Albahr &copy; 2020. All Rights Reserved
        </p>
        <div className="socials">socials</div>
      </Container>
    </FooterContainer>
  );
}

export default PrimaryFooter;
