import React, { useEffect, useState, useMemo } from 'react'
import Card from './card/card';

export default function CardList({searchQuery, user}) {
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
    
    const SearchedGoods = useMemo(() => {
        if (goods) return goods.products.filter(product => product.name.includes(searchQuery))
    }, [searchQuery, goods])

    return (
    <div className='cardList'>
        {SearchedGoods ? SearchedGoods.map(e => <Card key={e._id} item={e} user={user}></Card>) : "Loading"}
    </div>
)
}
