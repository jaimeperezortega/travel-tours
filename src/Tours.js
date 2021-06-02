import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {

  const eraseTour = (id) => {
    console.log('Has hecho click en el tour con id:', id);
  }

  return (
    <section>
      <div className= "title">
        <h2>Our tours</h2>
        <div className="underline"></div>
        <div>
         {tours.map(tour => {
           //const {name, info, image, price } = tours;
           return <Tour removeTour={removeTour}  key = {tour.id} {...tour}/>
         })}
        </div>
      </div>
    </section>
  )
};

export default Tours;
