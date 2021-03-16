import React from 'react'
import './Banner.scss'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Modal from '@material-ui/core/Modal';
import {
  BannerProps,
  BannerPropsItem,
  SelectedLang
} from '../../interfaces/interfaces';
import { CountryRating } from "../CountryRating";
import { Context } from "../../context/MainContext";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner: React.FC<BannerProps> = (props) => {
  const { userMark, setUserMark } = React.useContext(Context);
  const classes = useStyles();
  const [modalPicture, setModalPicture] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const selectedLang: SelectedLang = props.selectedLang as SelectedLang;

  const imageClickHandler = (e: any) => {
    const image: string = props.sliderdata[+e.target.id].picture;
    setModalPicture(image);
    setOpen(true);
  }

  return (
    <div className="banner">
      <Carousel
        responsive={responsive}
        showDots
        className="banner__slider"
        infinite
        dotListClass="dots"
      >
        {props.sliderdata.map((el: BannerPropsItem, index: number) => (
          <div
            id={index.toString()}
            className="slide-item"
            style={{ backgroundImage: `url(${el.picture})` }}
            key={index}
            onClick={imageClickHandler}
          >
            <div className="slide-item-description">
              <h3>{el.sightName[selectedLang]}</h3>
              <p>{el.description[selectedLang]}</p>
            </div>
            <div className="slide-item-rating">
              <CountryRating />
            </div>
          </div>
        ))}
      </Carousel>
      <Modal open={open} className="banner__modal">
        <div className="banner__modal-content">
          <span
            role="button"
            className="material-icons banner__modal-content--close"
            onClick={() => setOpen(false)}
          >
            close
          </span>
          <img src={modalPicture} alt="" />
        </div>
      </Modal>
    </div>
  )
}

export default Banner;
