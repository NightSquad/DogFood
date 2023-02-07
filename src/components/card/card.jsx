import React, { useState } from 'react'
import styles from "./card.module.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Card(props) {
    const [like, setLike] = useState(false)
  return (
    <div className={styles.card}>
        <img src={props.item.pictures} alt="" className={styles.image}/>
        <p className={styles.name}>{props.item.name}</p>
        {like ? <FavoriteIcon className={styles.like} sx={{color: "red"}} onClick={(e) => setLike(!like)}/> : <FavoriteBorderIcon className={styles.like} onClick={(e) => setLike(!like)}/>}
    </div>
  )
}
