import React from 'react'
import './Rating.scss'
import Rating from '@material-ui/lab/Rating';
import { Box } from '@material-ui/core';
import { Context } from '../../context/MainContext';

interface labelsInterface {
  [key: number]: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}

const labels: labelsInterface = {
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};

export const CountryRating: React.FC = () => {
  const { userMark, setUserMark, user } = React.useContext(Context)

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const putMarkHandler = (event: any, newValue: any) => {
    setValue(newValue);
    setUserMark(event.target.value)
  }
  return (
    <>
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        size="large"
        className="rating"
        onChange={putMarkHandler}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </>
  )
}
