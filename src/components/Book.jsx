import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId,bookName,rating,author,image,tags,category}=book;
    return (
        
       <Link to={`/book/${bookId}`}>  
        <div className="card   border rounded-2xl ">
       <figure className="p-10 bg-slate-200">
         <img
           src={image}
           alt={bookName}
           className="rounded-2xl h-[200px] "/>
       </figure>
       <div className="card-body   ">
      <div className='flex justify-between gap-4'>
      {
         tags.map((tag,index)=><button key={index} className="btn btn-xs bg-lime-100">{tag}</button>)
       }
      </div>
         <h2 className="card-title text-2xl font-bold text-red-900">{bookName}</h2>
         <p>By:{author}</p>
         <div className=" border-t border-dashed "></div>
         <div className="card-actions justify-between">
         
           <p>{category}</p>
           <div className="rating">{rating}
       <input type="radio" name="rating-4" className="mask mask-star-2 border bg-lime-100" /></div>
         </div>
       </div>
     </div></Link>

   
    );
};

export default Book;