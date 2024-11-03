import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../addToDB';

const Bookdetail = () => {
    const{bookId}=useParams();

    const id=parseInt(bookId);


    const data =useLoaderData()
    const bookdetail=data.find(book=>book.bookId==id)
    
    const {bookId: currentbookid,image}=bookdetail
    

    const hendleMarkAsRead=(id)=>{
        addToStoredReadList(id)
        console.log('edbshffr');
        
    }
    return (
        <div>
            book details{bookId}
            <img src={image} alt="" />
            <button onClick={()=>hendleMarkAsRead(bookId)} className="btn btn-outline btn-primary">read</button>
            <button className="btn btn-outline btn-primary">wish list</button>
        </div>
    );
};

export default Bookdetail;