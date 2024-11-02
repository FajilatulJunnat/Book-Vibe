import React from 'react';

const Book = ({book}) => {
    const {bookName,rating,author,image}=book
    return (
        
          <div className="card bg-red-400 p-4 border rounded-2xl shadow-xl">
  <figure className="p-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl font-bold ">{bookName}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
   
    );
};

export default Book;