import React from 'react'
import { fire } from '../../context/MainContext'
import { CountryItem, SightItem } from '../../interfaces/interfaces'
import './Admin.scss'

interface AdminProps {
  photocount: number;
  nameRu: string;
  nameEn: string;
  nameEs: string;
  capitalRu: string;
  capitalEn: string;
  capitalEs: string;
  infoRu: string;
  infoEn: string;
  infoEs: string;
  video: string;
  titlePhoto: any;
  images: Array<string>;
  lat: number;
}

export const Admin: React.FC<AdminProps> = () => {
  const [photoCount, setPhotoCount] = React.useState(0)
  const [lat, setLat] = React.useState(0)
  const [long, setLong] = React.useState(0)
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
  let sightRu:SightItem = 
  {
    id: Date.now(),
    picture: '',
    sightName: '',
    description: ''
  }
  let sightEs:SightItem = 
  {
    id: Date.now(),
    picture: '',
    sightName: '',
    description: ''
  }
  let sightEn:SightItem = 
  {
    id: Date.now(),
    picture: '',
    sightName: '',
    description: ''
  }
  const [sightsRu, setSightsRu] = React.useState(new Array())
  const [sightsEn, setSightsEn] = React.useState(new Array())
  const [sightsEs, setSightsEs] = React.useState(new Array())

  const firestore = fire.firestore()

  const data: CountryItem = {
    id: Date.now(),
    picture: titlePhoto,
    video: video,
    lat,
    long,
    translateTo: {
      en: {
        countryName: nameEn,
        capitalName: capitalEn,
        lang: 'Spanish',
        description: infoEn,
        sights: sightsEn
      },
      ru: {
        countryName: nameRu,
        capitalName: capitalRu,
        lang: 'Испанский',
        description: infoRu,
        sights: sightsRu
      },
      es: {
        countryName: nameEs,
        capitalName: capitalEs,
        lang: 'Española',
        description: infoEs,
        sights: sightsEs
      },
    },
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
      case 'sight_photo':
        sightEn.picture = e.target.value
        sightEs.picture = e.target.value
        sightRu.picture = e.target.value
        break;
      case 'sight_name_ru':
        sightRu.sightName = e.target.value
        console.log(sightRu.sightName);
        break;
      case 'sight_name_en':
        sightEn.sightName = e.target.value
        console.log(e.target.value);
        break;
      case 'sight_name_es':
        sightEs.sightName = e.target.value
        console.log(e.target.value);
        break;
      case 'sight_desc_ru':
        sightRu.description = e.target.value
        console.log(e.target.value);
        break;
      case 'sight_desc_en':
        sightEn.description = e.target.value
        console.log(e.target.value);
        break;
      case 'sight_desc_es':
        sightEs.description = e.target.value
        break;
      case 'lat':
        setLat(e.target.value)
        console.log(e.target.value);
        break;
      case 'long':
        setLong(e.target.value)
        console.log(e.target.value);
        break;
      default:
        break;
    }
  }

  const addSightHandler = (e: any) => {
    setSightsEn([...sightsEn, sightEn])
    setSightsEs([...sightsEs, sightEs])
    setSightsRu([...sightsRu, sightRu])
    console.log(data);
    
    Object.values(e.target.parentNode.children).forEach((el: any) => {
      el.value = ''
    })
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
    console.log(data);
    firestore.collection("countries").doc(data.translateTo.en.countryName).set(data)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    setPhotoCount(0)
    Object.values(e.target.parentNode.children).forEach((el: any) => {
      el.value = ''
    })
  }

  return (
    <div className="container-xl pb-4 admin" onChange={changeHandler}>
      <div className="admin-left">
        <h1>Добавить страну</h1>
        <label htmlFor="name_ru">Навазние на русском</label>
        <input type="text" id="name_ru" placeholder="Название RU" />

        <label htmlFor="name_en">Навазние на английском</label>
        <input type="text" id="name_en" placeholder="Название EN" />

        <label htmlFor="name_es">Навазние на испанском</label>
        <input type="text" id="name_es" placeholder="Название ES" />

        <label htmlFor="capital_ru">Столица на русском</label>
        <input type="text" id="capital_ru" placeholder="Столица RU" />

        <label htmlFor="capital_ru">Столица на английском</label>
        <input type="text" id="capital_en" placeholder="Столица EN" />

        <label htmlFor="capital_es">Столица на испанском</label>
        <input type="text" id="capital_es" placeholder="Столица ES" />

        <label htmlFor="info_ru">Информация о стране на русском</label>
        <input type="text" id="info_ru" placeholder="Информация RU" />

        <label htmlFor="info_en">Информация о стране на английском</label>
        <input type="text" id="info_en" placeholder="Информация EN" />

        <label htmlFor="info_es">Информация о стране на испанском</label>
        <input type="text" id="info_es" placeholder="Информация ES" />

        <label htmlFor="title_photo">Титульное фото</label>
        <input type="text" id="title_photo" placeholder="Титульное фото" />

        <label htmlFor="video">Титульное видео</label>
        <input type="text" id="video" placeholder="Видео" />

        <label htmlFor="lat">Широта</label>
        <input type="text" id="lat" placeholder="Широта" />

        <label htmlFor="long">Долгота</label>
        <input type="text" id="long" placeholder="Долгота" />

        <form style={{ display: 'flex' }}>
          <label htmlFor="images">Фото для слайдера</label>
          <input type="text" id="images" placeholder="Фотографии" ref={imagesRef} />
          <button type="button" className="btn-success" onClick={addImageHandler}>Добавить</button>
          <span>{photoCount}</span>
        </form>
        <button className="btn-info mt-4" onClick={submitHandler}>Добавить объект</button>
      </div>
      <div className="admin-right">
        <h1>Добавить достопримечательность</h1>

        <label htmlFor="sight_photo">Фотография достопримечательности</label>
        <input type="text" id="sight_photo" placeholder="Фотография достопримечательности" />

        <label htmlFor="sight_name_ru">Название достопримечательности на русском</label>
        <input type="text" id="sight_name_ru" placeholder="Название достопримечательности на русском" />

        <label htmlFor="sight_desc_ru">Описание достопримечательности на русском</label>
        <input type="text" id="sight_desc_ru" placeholder="Описание достопримечательности на русском" />

        <label htmlFor="sight_name_en">Название достопримечательности на английском</label>
        <input type="text" id="sight_name_en" placeholder="Название достопримечательности на английском" />

        <label htmlFor="sight_desc_en">Описание достопримечательности на английском</label>
        <input type="text" id="sight_desc_en" placeholder="Описание достопримечательности на английском" />

        <label htmlFor="sight_name_es">Название достопримечательности на испанском</label>
        <input type="text" id="sight_name_es" placeholder="Название достопримечательности на испанском" />

        <label htmlFor="sight_desc_es">Описание достопримечательности на испанском</label>
        <input type="text" id="sight_desc_es" placeholder="Описание достопримечательности на испанском" />

        <button type="button" className="btn-success" onClick={addSightHandler}>Добавить достопримечательность</button>
      </div>
    </div>
  )
}