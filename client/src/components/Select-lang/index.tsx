import React, {useState, useEffect} from 'react';
import './Select-lang.scss';
import { SelectLangDataItem } from "../../interfaces/interfaces";

export const SelectLang: React.FC<SelectLangDataItem> = (props) => {
  const [selectedLang, setSelectedLang] = useState('en');

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
