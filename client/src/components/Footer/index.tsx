import React, { useState, useEffect } from 'react';
import './Footer.scss';
import { FooterItem } from '../../interfaces/interfaces';

export const Footer: React.FC<FooterItem> = (props) => {
  const langItem: string = props.langValue;

  // TODO after creating content for footer
  useEffect(() => {

  }, [langItem]);

  return (
    <footer className="footer">
      Footer
    </footer>
  )
}
