import "./styles.css";
import { ReactComponent as Construction } from "../images/construction.svg";
import styled from "styled-components";

export const StyledConstruction = styled(Construction)`
  .ConeLight {
    fill: rgb(255, 123, 0) !important;
    animation: 0.6s infinite coneCycle;
  }
  @keyframes coneCycle {
    50% {
      fill: white;
    }

    100% {
      fill: #9d3b2e;
    }
  }

  .CraneLight {
    fill: white;
    animation: 0.6s infinite coneCycle;
  }

  .Winch {
    transform: translateX(88px);
    animation: 4s linear infinite winchCycle;
    animation-direction: alternate-reverse;
  }

  @keyframes winchCycle {
    0% {
      transform: translateX(88px);
    }

    100% {
      transform: translateX(4px);
    }
  }

  #PaintRoller {
    animation: 0.7s ease infinite paintRoller;
    transform: translateY(-1px);
    animation-direction: alternate-reverse;
  }
  @keyframes paintRoller {
    0% {
      transform: translateY(-7px);
    }

    100% {
      transform: translateY(21px);
    }
  }

  a {
    color: white;
    text-decoration: none;
    transition: ease 0.2s;
  }

  a:hover {
    color: #2fbdf4;
  }
`;
