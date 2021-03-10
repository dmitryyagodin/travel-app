import React from 'react';
import './Select-lang.scss'

export const SelectLang: React.FC = () => {
  return (
    <select className="form-control select-input">
      <option value="1">EN</option>
      <option value="2">RU</option>
      <option value="3">ES</option>
    </select>
  )
}
