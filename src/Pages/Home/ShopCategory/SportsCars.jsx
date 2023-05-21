import React from 'react';
import Title from '../../../Title/Title';

const SportsCars = ({single}) => {

    const { _id, toyName,SellerName, quantity, price, subCategory, photoUrl ,description } = single;

    return (
        <div className="avatar flex flex-col items-center p-1 mb-4">
        <Title title={"Home"}/>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={photoUrl}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{toyName}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
    );
};

export default SportsCars;