import React from 'react'
import './Rating.scss'
import Rating from '@material-ui/lab/Rating';
import { Box } from '@material-ui/core';
import { Context, fire } from '../../context/MainContext';
import { Countries } from '../../assets';
import { CountryItem, CountryRatingProps, labelsInterface } from '../../interfaces/interfaces';

const labels: labelsInterface = {
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};

export const CountryRating: React.FC<CountryRatingProps> = ({ data, sight }) => {
  const firestore = fire.firestore()
  const { userMark, setUserMark, user } = React.useContext(Context)
  const [currentContry, setCurrentCountry] = React.useState<CountryItem>()
  const [hover, setHover] = React.useState(-1);
  const [ratings, setRatings] = React.useState<any>([])
  const [avgRating, setAvgRat] = React.useState(0)
  const [puted, setPuted] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (currentContry) {
      firestore.collection("countries").doc(currentContry?.translateTo.en.countryName + ' Rating').collection(sight.sightName.en)
        .get()
        .then((querySnapshot) => {
          // querySnapshot.forEach((doc) => console.log(doc.id, ' => ', doc.data()));
          querySnapshot.forEach((doc) => setRatings((prev: any) => [...prev, doc.data()]));
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
  }, [firestore, currentContry, sight])

  React.useEffect(() => {
    const initValue = 0
    setAvgRat(ratings.reduce((acc: any, value: any) => {
      return acc + +value.mark
    }, initValue) / ratings.length)
    ratings.forEach((el: any) => {
      setPuted(true)
    })
  }, [ratings, user])


  React.useEffect(() => {
    setCurrentCountry(Countries.find((el: any) => el.translateTo.ru.countryName === data.countryName
      || el.translateTo.en.countryName === data.countryName
      || el.translateTo.es.countryName === data.countryName
    ))
  }, [data])

  console.log(data.countryName);


  const putMarkHandler = (event: any, newValue: any) => {
    setUserMark(event.target.value)

    firestore.collection("countries").doc(currentContry?.translateTo.en.countryName + ' Rating').collection(sight.sightName.en)
      .add({
        mark: event.target.value,
        user: user.uid,
        name: user.displayName
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }
  return (
    <>
      <Rating
        name="hover-feedback"
        value={avgRating}
        precision={1}
        size="large"
        disabled={(puted && true) || false}
        className="rating"
        onChange={putMarkHandler}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {userMark !== null && <Box ml={2}>{labels[hover !== -1 ? hover : userMark]}</Box>}
      {ratings.length > 0 && ratings.map((el: any) => (
        <div key={el.name}>
          <h5>Marks:</h5>
          <div>
            <span>{el.name}</span>
            {': '}
            <span>{el.mark}</span>
          </div>
        </div>
      ))}
    </>
  )
}
