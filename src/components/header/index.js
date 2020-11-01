import React, { Component } from "react";
import Wrapper from '../wrapper';
import Menu from "./menu";
import MobileButton from "./mobile-button";
import Logo from "./logo";
import StyledUl from "./ul";
import StyledLi from "./li";
import HeaderContainer from "./header";
import logo from '../../utils/images/logo-white.png';
import arrow from '../../utils/images/right-arrow.png';
import Config from "../../config/config.json";
import PocketService from "../../core/services/pocket-service";

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuHidden: true
    }
  }

  onToggleMenu() {
    this.setState((prevState) => {
      return { isMenuHidden: !prevState.isMenuHidden };
    });
  };

  onLogOut() {
    // Remove any information related to the account
    PocketService.removeUserFromCached();
    // Remove any tx information from cached
    PocketService.removeTxFromCached();
    // Refresh the page
    window.location.reload();
  };

  render() {
    let hrefLink = '#';
    return (
      <HeaderContainer isHidden={this.state.isMenuHidden}>
        <Wrapper className="header">
          <Logo href="/"> <img src={logo} alt="logo pocket" /> <span>/ &nbsp; WALLET</span> </Logo>
          <Menu isHidden={this.state.isMenuHidden}>
            <StyledUl>
              <StyledLi>
                <a tartget="_target" href={Config.BUY_POKT_BASE_URL}>Buy POKT</a>
              </StyledLi>
              <StyledLi style={{display: "none"}} id="navAccount" className="sub_menu">
                <a href={hrefLink}> Account <img src={arrow} alt="greater than" /> </a>
                <ul>
                  <li><button style={{cursor: "pointer", borderStyle: "none", backgroundColor: "transparent"}} onClick={this.onLogOut} >Log out</button></li>
              </ul>
              </StyledLi>
            </StyledUl>
          </Menu>
          <MobileButton onClick={() => this.onToggleMenu()} />
        </Wrapper>
      </HeaderContainer>
    );
  }
}

export default Header;
