import React, { useState } from 'react'
import styles from "./card.module.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

export default function Card(props) {
  const [like, setLike] = useState(props.item.likes.includes(props.user._id))

  const handleChangeLike = async (e) => {
    if (like) {
      let result = await axios.delete(`https://api.react-learning.ru/products/likes/${props.item._id}`, {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
      }
      })
      result.status === 200 ? setLike(false) : console.log(result)
    } else {
      let result = await axios.put(`https://api.react-learning.ru/products/likes/${props.item._id}`,{}, {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
      }
      })
      result.status === 200 ? setLike(true) : console.log(result)
    }
  }

  return (
    <div className={styles.card}>
        <img src={props.item.pictures} alt="" className={styles.image}/>
        <p className={styles.name}>{props.item.name}</p>
        {like ? <FavoriteIcon className={styles.like} sx={{color: "red"}} onClick={(e) => handleChangeLike(e)}/> : <FavoriteBorderIcon onClick={(e) => handleChangeLike(e)} className={styles.like} />}
    </div>
  )
}
