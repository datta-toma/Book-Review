import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const BooksListed = () => {
    const books = useLoaderData();
    

    useEffect(() =>{
        const storedbookId = storedBookIds();
        if(books.length > 0){
            const addBooks = books.filter(book => storedbookId.includes(book.id))
            console.log(books, storedbookId, addBooks);
        }
    },[])
    return (
        <div>
            <h3>Hello</h3>
        </div>
    );
};

export default BooksListed;