import React from "react";
import PropTypes from "prop-types";
import DefaultPicture from "../assets/blank_profile.png";
import styled from "styled-components";
import colors from "../styles/colors";

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: 300;
  align-self: flex-start;
  padding-left: 15px;
`;

const CardTitle = styled.div`
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  height: 25px;
  display: flex;
  align-items: center;
`;

const CardImg = styled.img`
  height: 150pxpx;
  width: 150px;
  border-radius: 50%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const Card = ({ label, title, picture }) => {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImg src={picture} alt="freelance" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  label: "",
  title: "",
  picture: DefaultPicture,
};

export default Card;
