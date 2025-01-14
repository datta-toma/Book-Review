import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[]);

    const handleBookSelect = (book) => {
        setSelectedBooks(SelectedBooks => [...SelectedBooks, book]);
    };

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-16">Books</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-4">
                {
                    books.map(book => <Book key={book.id} book={book} onBookSelect={handleBookSelect}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;