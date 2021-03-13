import React, { useEffect } from 'react';
import './Select-lang.scss';
import { SelectLangDataItem } from "../../interfaces/interfaces";
import SaveLangState from '../../utils/saveLangState';

export const SelectLang: React.FC<SelectLangDataItem> = (props) => {
  const [selectedLang, setSelectedLang] = SaveLangState('langValue', 'en');

  const handleChangeLang = (e: {
    target: { value: React.SetStateAction<string>; }
  }): void => {
    setSelectedLang(e.target.value);
  }

  useEffect(() => {
    props.handleLangFromParent(selectedLang);
  });

  return (
    <select
      className="form-control select-input"
      value={selectedLang}
      onChange={handleChangeLang}
    >
      <option value="en">EN</option>
      <option value="ru">RU</option>
      <option value="es">ES</option>
    </select>
  )
}
