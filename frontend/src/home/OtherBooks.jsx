import React, {useEffect, useState} from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch("https://studentexchangefullstackapplication.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(6,11)))
    })
  return (
    <div>
           <BookCards books={books} headline={<h1 style={{ fontSize: '24px' }}>Other items</h1>} />
      
    </div>
  )
}

export default OtherBooks