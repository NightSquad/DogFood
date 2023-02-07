import React, { useEffect, useState } from 'react'
import Card from './card/card';

export default function CardList() {
    const [goods, setGoods] = useState()

    useEffect(() => {
    fetch('https://api.react-learning.ru/products', {
    headers: {
        authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
    }
    })
    .then(res => res.json())
    .then((result) => {
        setGoods(result)
    });
    
    }, [])
    console.log(goods)

    return (
    <div className='cardList'>
        {goods ? goods.products.map(e => <Card item={e}></Card>) : "Loading"}
    </div>
)
}
