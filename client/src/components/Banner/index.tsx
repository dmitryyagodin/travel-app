import React from 'react'
import './Banner.scss'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Modal from '@material-ui/core/Modal';
import {
  BannerProps,
  BannerPropsItem
} from '../../interfaces/interfaces';

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

// const Banner: React.FC<BannerProps> = ({ images }) => {
const Banner: React.FC<BannerProps> = (props) => {
  const [modalPicture, setModalPicture] = React.useState('')
  const [open, setOpen] = React.useState(false)

  const imageClickHandler = (e: any) => {
    // const image: string = images[+e.target.id];
    // setModalPicture(image);
    // setOpen(true);
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
          <div id={index.toString()} className="slide-item" style={{ backgroundImage: `url(${el.picture})` }} key={index} onClick={imageClickHandler}>
            {}
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

export default Banner
