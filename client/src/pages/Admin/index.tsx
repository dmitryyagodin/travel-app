import React from 'react'
import { fire } from '../../context/MainContext'
import './Admin.scss'

interface AdminProps {
  photocount: number,
  nameRu: string,
  nameEn: string,
  nameEs: string,
  capitalRu: string,
  capitalEn: string,
  capitalEs: string,
  infoRu: string,
  infoEn: string,
  infoEs: string,
  video: string,
  titlePhoto: string,
  images: Array<string>,
}

export const Admin: React.FC<AdminProps> = () => {
  const [photoCount, setPhotoCount] = React.useState(0)
  const [nameRu, setNameRu] = React.useState('')
  const [nameEn, setNameEn] = React.useState('')
  const [nameEs, setNameEs] = React.useState('')
  const [capitalRu, setCapitalRu] = React.useState('')
  const [capitalEn, setCapitalEn] = React.useState('')
  const [capitalEs, setCapitalEs] = React.useState('')
  const [infoRu, setInfoRu] = React.useState('')
  const [infoEn, setInfoEn] = React.useState('')
  const [infoEs, setInfoEs] = React.useState('')
  const [video, setVideo] = React.useState('')
  const [titlePhoto, setTitlePhoto] = React.useState('')
  const [images, setImages] = React.useState(new Array())

  const firestore = fire.firestore()

  const data = {
    name_ru: nameRu,
    name_en: nameEn,
    name_es: nameEs,
    info_ru: infoRu,
    info_en: infoEn,
    info_es: infoEs,
    capital_ru: capitalRu,
    capital_en: capitalEn,
    capital_es: capitalEs,
    img_title: titlePhoto,
    video,
    images,
  }

  const imagesRef: any = React.useRef(null)

  const changeHandler = (e: any) => {
    switch (e.target.id) {
      case 'name_ru':
        setNameRu(e.target.value)
        break;
      case 'name_en':
        setNameEn(e.target.value)
        break;
      case 'name_es':
        setNameEs(e.target.value)
        break;
      case 'info_ru':
        setInfoRu(e.target.value)
        break;
      case 'info_en':
        setInfoEn(e.target.value)
        break;
      case 'info_es':
        setInfoEs(e.target.value)
        break;
      case 'capital_ru':
        setCapitalRu(e.target.value)
        break;
      case 'capital_en':
        setCapitalEn(e.target.value)
        break;
      case 'capital_es':
        setCapitalEs(e.target.value)
        break;
      case 'video':
        setVideo(e.target.value)
        break;
      case 'title_photo':
        setTitlePhoto(e.target.value)
        break;
      default:
        break;
    }
  }

  const addImageHandler = () => {
    if (imagesRef) {
      setImages([...images, imagesRef.current.value])
      imagesRef.current.value = ''
      imagesRef.current.focus()
      setPhotoCount(prev => prev + 1)
    }
  }

  const submitHandler = (e: any) => {
    Object.values(e.target.parentNode.children).forEach((el: any) => {
      el.value = ''
    })

    firestore.collection("countries").doc(data.name_en).set(data)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    setPhotoCount(0)
  }

  return (
    <div className="container-xl pb-4 admin" onChange={changeHandler}>
      <h1>Добавить страну</h1>
      <label htmlFor="name_ru">Навазние на русском</label>
      <input type="text" id="name_ru" placeholder="Название RU" />

      <label htmlFor="name_en">Навазние на английском</label>
      <input type="text" id="name_en" placeholder="Название EN" />

      <label htmlFor="name_es">Навазние на испанском</label>
      <input type="text" id="name_es" placeholder="Название ES" />

      <label htmlFor="capital_ru">Навазние на русском</label>
      <input type="text" id="capital_ru" placeholder="Столица RU" />

      <label htmlFor="capital_ru">Навазние на русском</label>
      <input type="text" id="capital_en" placeholder="Столица EN" />

      <label htmlFor="capital_es">Навазние на русском</label>
      <input type="text" id="capital_es" placeholder="Столица ES" />

      <label htmlFor="info_ru">Навазние на русском</label>
      <input type="text" id="info_ru" placeholder="Информация RU" />

      <label htmlFor="info_en">Навазние на русском</label>
      <input type="text" id="info_en" placeholder="Информация EN" />

      <label htmlFor="info_es">Навазние на русском</label>
      <input type="text" id="info_es" placeholder="Информация ES" />

      <label htmlFor="title_photo">Навазние на русском</label>
      <input type="text" id="title_photo" placeholder="Титульное фото" />

      <label htmlFor="video">Навазние на русском</label>
      <input type="text" id="video" placeholder="Видео" />

      <form style={{ display: 'flex' }}>
        <label htmlFor="images">Навазние на русском</label>
        <input type="text" id="images" placeholder="Фотографии" ref={imagesRef} />
        <button type="button" className="btn-success" onClick={addImageHandler}>Добавить</button>
        <span>{photoCount}</span>
      </form>
      <button className="btn-info" onClick={submitHandler}>Добавить объект</button>
    </div>
  )
}
