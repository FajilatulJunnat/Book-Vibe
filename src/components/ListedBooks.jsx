import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../addToDB';
import Book from './Book';
const ListedBooks = () => {
    const allbooks=useLoaderData()
    const [readlist,setreadlist]=useState([])
    const [sort,setsort]=useState('')

    useEffect(()=>{
        const storedReadList=getStoredReadList()
        const storedReadListInt=storedReadList.map(id=>parseInt(id))
        console.log(storedReadList,storedReadListInt);
        const readBookList=allbooks.filter(book=>storedReadListInt.includes(book.bookId))
        setreadlist(readBookList)
   },[])


   const hendleSort=sortType=>{
    setsort(sortType)
    if (sortType==='pages sort') {
        const sortedReadList=[...readlist].sort((a,b)=>a.totalPages-b.totalPages)
        setreadlist(sortedReadList)
    }
    if (sortType==='ratings sort') {
        const sortedReadListByRating=[...readlist].sort((a,b)=>a.rating-b.rating)
        setreadlist(sortedReadListByRating)
    }
   }
    return (
        <div>
            
            <h2 className='text-3xl'>listed books</h2>
            <details className="dropdown">
  <summary className="btn m-1">{sort?`sort by:${sort}`:'sort by'}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=>hendleSort('ratings sort')}><a>Rating</a></li>
    <li onClick={()=>hendleSort('pages sort')}><a>No of page</a></li>
  </ul>
</details>
            <Tabs>
    <TabList>
      <Tab>Read list</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Books I read:{readlist.length}</h2>
      {
        readlist.map(book=><Book key={book.bookId} book={book}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>My wish list</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;