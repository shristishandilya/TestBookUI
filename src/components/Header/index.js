import React from 'react';
import './style.scss';
import {HamburgerSvg, LogoSvg} from "./svg";
import {SBILogoSvg} from "../common/svg";

function Header() {
  return (
    <header className="layout horizontal bg-white">
      <div className="container layout horizontal center page-header">
        <button className="mob-view hamburger pl0 mr15">
          <HamburgerSvg/>
        </button>
        <a className="no-text-decoration layout inline center web-view logo" href="/SBIPO" target="_self">
          <SBILogoSvg/>
          <strong className="inline-block text-black font24 ml15">
            SBI PO 2018
          </strong>
        </a>
        <a className="logo" href="/" target="_self">
          <LogoSvg/>
        </a>
      </div>
    </header>
  );
}

export default Header;
