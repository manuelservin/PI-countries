import React from "react";
import styled from "styled-components";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { SuitHeartFill } from "@styled-icons/bootstrap/SuitHeartFill";
const FooterContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundContainer};
  padding: 10px 0;
  z-index: 2000;

  .contenedor {
    width: 100%;
    overflow: hidden;
    margin: auto;
    padding: 60px 0;
  }

  .social-media {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }

  .social-media-icon {
    display: inline-block;
    margin-left: 20px;
    width: 40px;
    height: 40px;

    border-radius: 50%;
    text-align: center;
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }

  .social-media-icon:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primaryHover};
    border: 1px solid ${({ theme }) => theme.primaryBorder};
  }
  .social-media-icon svg {
    height: 30px;
    padding-top: 5px;
  }
  .line {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    height: 2px;
    background: ${({ theme }) => theme.text};
    margin-bottom: 15px;
  }

  p {
    text-align: center;
    color: ${({ theme }) => theme.text};
  }
`;
const StyledHeart = styled(SuitHeartFill)`
  height: 15px;
  color: ${({ theme }) => theme.backHeart};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div class="social-media">
        <a href="#" class="social-media-icon" target="_blank">
          <Instagram />
        </a>
        <a href="#" class="social-media-icon" target="_blank">
          <Linkedin />
        </a>
        <a href="#" class="social-media-icon" target="_blank">
          <Facebook />
        </a>
      </div>

      <div class="line"></div>
      <p>
        {" "}
        Designed with <StyledHeart /> by Christian Manuel Servin
      </p>
    </FooterContainer>
  );
};

export default Footer;
