import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const BooksListed = () => {
    // const books = useLoaderData();
    const [storedBooks, setStoredBooks] = useState([]);
    useEffect(() => {
        // Retrieve stored book IDs from local storage
        const storedBookIds = JSON.parse(localStorage.getItem('storedBookIds')) || [];
        
        // Map stored book IDs to actual book data
        const storedBooksData = storedBookIds.map(id => {
            const storedBook = JSON.parse(localStorage.getItem(`book_${id}`));
            return storedBook;
        });
        // Set state with the retrieved books
        setStoredBooks(storedBooksData);
    }, []);
   
    return ( 
        <div>
           <h3>Stored Books</h3>
            <ul>
                {storedBooks.map(book => (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BooksListed;