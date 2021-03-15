import React from 'react'
import { Context, fire } from '../../context/MainContext';

export const Profile: React.FC = () => {
  const { user } = React.useContext(Context)
  const [photo, setPhoto] = React.useState('')
  const uploadPhoto = () => {
    user.updateProfile({
      photoURL: photo
    }).then(function() {
      console.log('Success');
    }).catch(function(error: any) {
      console.log('Error, ', error);
    });
  }
  console.log(user);
  return (
    <div>
      <div>
        {user && <h1>Hello, {user.displayName}</h1>}
        <img src={user && user.photoURL} alt="" />
      </div>
      <div>
        <label htmlFor="photo_url">Update your Avatar with .png, .jpg or .jpeg format</label>
        <input type="text" id="photo_url" placeholder="Вставьте ссылку " onChange={(e) => setPhoto(e.target.value)} />
        <button type="submit" onClick={uploadPhoto}>Загрузить</button>
      </div>
    </div>
  )
}
