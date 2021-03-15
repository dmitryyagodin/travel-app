import React, { useState, useEffect } from 'react';
import './Footer.scss';
import { FooterItem } from '../../interfaces/interfaces';
import rsLogo from '../../assets/icons/rs_school_js.svg';
import githubIcon from '../../assets/icons/githubIcon.svg'

export const Footer: React.FC<FooterItem> = (props) => {
  const langItem: string = props.langValue;

  // TODO after creating content for footer
  useEffect(() => {

  }, [langItem]);

  return (
    <footer className="footer">
      <a href="https://rs.school/react/">
        <img src={rsLogo} alt="" />
      </a>
      <span>2021</span>
      <div className="dropup">
        <button className="dropbtn"><img src={githubIcon} alt=""/></button>
        <div className="dropup-content">
          <a href="https://github.com/vio7enc3">vio7enc3</a>
          <a href="https://github.com/VeronikaVasilchikova">VeronikaVasilchikova</a>
          <a href="https://github.com/GeorgeTuz">GeorgeTuz</a>
          <a href="https://github.com/dmitryyagodin">dmitryyagodin</a>
        </div>
      </div>
    </footer>
  )
}
