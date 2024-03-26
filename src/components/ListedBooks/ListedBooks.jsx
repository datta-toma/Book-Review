import React, { useState } from "react";
import { Link, NavLink, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ListedBooks = () => {

    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt );
    // console.log(book)
    const [addedToReadList, setAddedToReadList] = useState(false);

    const handleReadClick = () => {
        let readList = JSON.parse(localStorage.getItem('readList')) || [];
        if (readList.some(item => item.id === book.id)) {
            toast.warning('Book already in Read list');
        } 
         else {
            readList.push(book);
            localStorage.setItem('readList', JSON.stringify(readList));
            toast.success('Book added to Read list');
            setAddedToReadList(true);
        }
    };
    const handleWishlistClick = () => {
        if (addedToReadList) {
            toast.warning('Book already added to Read list');
        } else {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            if (wishlist.some(item => item.id === id)) {
                toast.warning('Book already in Wishlist');
            } else {
                wishlist.push(book);
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                toast.success('Book added to Wishlist');
            }
        }
    };

    return (
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto mt-10">
            <div className=" mt-20 ">
                <img src={book.image} alt="img"></img>
            </div>
            <div className="mt-28 space-y-3">
                <h2 className="text-5xl font-medium">{book.bookName}</h2>
                <p className="mt-3 text-2xl">Author:  {book.author}</p><hr></hr>
                <p className="text-xl font-medium">{book.category}</p><hr></hr>
                <h5 className="flex gap-3"><p className="font-bold">Review:</p>  {book.review}</h5>
                <h4 className="flex gap-7 text-green-400 font-bold "><p className="font-bold text-black">Tag</p>{book.tags.join(" , ")}</h4>
                <hr></hr>
                <h5 className="flex gap-4">Number of pages: <p className="font-bold">{book.totalPages}</p></h5>
                <h5 className="flex gap-4">Publisher: <p className="font-bold">{book.publisher}</p></h5>
                <h5 className="flex gap-4">Year of Publishing:  <p className="font-bold">{book.yearOfPublishing}</p></h5>
                <h5 className="flex gap-4">Year of Rating:  <p className="font-bold">{book.rating}</p></h5>
                <div>
                    <NavLink to="/books"><button  onClick={handleReadClick} className="btn border-cyan-300 mr-6 font-bold bg-white text-black">Read</button></NavLink>
                    <NavLink to="/wishlist"><button onClick={handleWishlistClick}  className="btn bg-cyan-300 mr-6 font-bold">Wishlist</button></NavLink>
                  
                    {/* <button  onClick={handleReadClick} className="btn border-cyan-300 mr-6 font-bold bg-white text-black">Read</button>
                    <button onClick={handleWishlistClick}  className="btn bg-cyan-300 mr-6 font-bold">Wishlist</button> */}

                    
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ListedBooks;