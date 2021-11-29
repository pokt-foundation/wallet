import styled, { css } from "styled-components";
import { tablet, maxPhone } from "../../utils/media";

const HeaderContainer = styled.header`
  .nav-button {
    display: none;
    cursor: pointer;
    border-style: none;
    background-color: transparent;
    font-weight: 300;
    font-size: 14px;
    color: #fff;
  }

  ${tablet(css`
    height: 75px;
    padding-top: 5px;
    text-align: center;
    padding-bottom: 5px;
    background: linear-gradient(to right, #5f6569 27%, #5f6569 100%) right
      bottom no-repeat;
    background-size: 100% 1px;
  `)};
  position: relative;
  width: 100%;
  ${(props) =>
    maxPhone(
      props.isHidden ||
        css`
          position: fixed;
          border-bottom: 1px solid #fff;
          height: 100vh;
          z-index: 99999999;
        `
    )};
`;

export default HeaderContainer;
