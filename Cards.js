import React from 'react';
import CardItem from './CardItem';
import './Cards.css'; 

function Cards() {
    return (
        <div className='cards'>
            <h1>BLEJ SIGURIM PER: </h1>
            <div className='cards__container'>
             <div className='cards__wrapper'>
               <div className='cards__items'>
                   <ul className='cards__item'>
                    <CardItem
                    src="images/img-1.jpg"
                    text="Sigurimi i automjetit, TPL+, Kasko"
                    label='AUTOMJET'
                    path='/sherbimet'
                    />
                    <CardItem
                    src="images/img-2.jpg"
                    text="Biznes, Shtepi, Banese"
                    label='PRONE'
                    path='/sherbimet'
                    />
                    <CardItem
                    src="images/img-3.jpg"
                    text="Shendet, Udhetim, Aksident, Lejeqendrim"
                    label='INDIVID'
                    path='/sherbimet'
                    />
                    <CardItem
                    src="images/img-4.jpg"
                    text="Tender, Ekzekutim, Doganore/Avans"
                    label='GARANCI'
                    path='/sherbimet'
                    />
                  </ul>
                </div>
             </div>
            </div>
        </div>
        
    )
}

export default Cards;