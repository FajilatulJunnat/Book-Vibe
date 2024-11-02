import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Book from '../../public/Book';

const Books = () => {
    const [books,setbooks]=useState([])
    useEffect(()=>{
        fetch('booksData.json')
        .then(res=>res.json())
        .then(data=> setbooks(data))
    },[])
    return (
        <div>
            <h3 className='text-4xl font-bold text-center'>Books</h3>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
           {
                books.map(book=><Book book={book} key={book.bookId}></Book>)
            }
           </div>
        </div>
    );
};

export default Books;