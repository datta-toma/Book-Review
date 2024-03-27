
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlLocationPin, SlPeople } from "react-icons/sl";
import { MdOutlineContactPage } from "react-icons/md";


const BooksListed = () => {
    // const books = useLoaderData();
    // const [storedBooks, setStoredBooks] = useState([]);
    const [readListData, setReadListData] = useState([]);
    const [wishlistData, setWishlistData] = useState([]);
    
    
    useEffect(() => {
        const readList = JSON.parse(localStorage.getItem('readList')) || [];
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        // const mergedList = readList.concat(wishlist);
        // const getDefaultData = JSON.parse(localStorage.getItem("books")) || [];
        setReadListData( readList );
        setWishlistData( wishlist );
          // console.log(storedData);
    }, []);
    

    
    return ( 
        <div className="max-w-7xl mx-auto mt-10">
            <div className="text-4xl font-extrabold text-center mt-14 bg-gray-100 m-7 p-8 rounded-xl">
            <h3> Books</h3>
            </div>
            <div>
            <div className="dropdown flex justify-center mt-12 ">
                <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-xl text-white">Sort By <RiArrowDropDownLine className="text-3xl"></RiArrowDropDownLine></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-52 mt-14">
                    <li><a>Rating</a></li>
                    <li><a>Number of pages</a></li>
                    <li><a>Publisher year</a></li>
                </ul>
                </div>
            </div>

        <div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <div className="hero">
                <div className="hero-content flex flex-col">
                    {readListData.map(book => (
                        <div key={book.id} className="flex flex-col lg:flex-row bg-white p-4 shadow-md rounded-lg">
                            <img src={book.image} className=" w-48 rounded-lg shadow-2xl" />
                            <div className="flex flex-col justify-center ml-4">
                                <h1 className="text-3xl font-bold">{book.bookName}</h1>
                                <p className="py-1">By: {book.author}</p>
                                <div className="flex gap-4 py-1">
                                <h4 className="flex gap-4 text-green-400 font-bold "><p className="font-bold text-black">Tag</p>{book.tags.join(" , ")}</h4>
                                <h5 className="flex gap-4"><SlLocationPin className="text-xl"></SlLocationPin>Year of Publishing: {book.yearOfPublishing}</h5>
                                </div>
                                <div className="flex gap-4 py-1">
                                <h5 className="flex gap-4"><SlPeople className="text-xl"></SlPeople>Publisher: {book.publisher}</h5>
                                <h5 className="flex gap-4"><MdOutlineContactPage className="text-xl"></MdOutlineContactPage>Page  {book.totalPages}</h5>
                                </div>

                                <div className="py-1">
                                <button className="btn btn-primary bg-[#cadef7]  text-sky-500 border-indigo-300 rounded-2xl mr-6">Category: {book.category}</button>
                                <button className="btn btn-primary bg-[#f6ce92] text-orange-500 border-orange-400 rounded-2xl mr-6">Rating: {book.rating}</button>
                                <Link to={"/books-listed"}>
                                <button className="btn btn-success bg-[#23BE0A]  text-white rounded-2xl mr-6">View Details</button>
                                </Link>
                                
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
         </div>
    </div>




                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <div className="hero">
                <div className="hero-content flex flex-col">
                    {wishlistData.map(book => (
                        <div key={book.id} className="flex flex-col lg:flex-row bg-white p-4 shadow-md rounded-lg">
                            <img src={book.image} className=" w-48 rounded-lg shadow-2xl" />
                            <div className="flex flex-col justify-center ml-4">
                                <h1 className="text-3xl font-bold">{book.bookName}</h1>
                                <p className="py-1">By: {book.author}</p>
                                <div className="flex gap-4 py-1">
                                <h4 className="flex gap-4 text-green-400 font-bold "><p className="font-bold text-black">Tag</p>{book.tags.join(" , ")}</h4>
                                <h5 className="flex gap-4"><SlLocationPin className="text-xl"></SlLocationPin>Year of Publishing: {book.yearOfPublishing}</h5>
                                </div>
                                <div className="flex gap-4 py-1">
                                <h5 className="flex gap-4"><SlPeople className="text-xl"></SlPeople>Publisher: {book.publisher}</h5>
                                <h5 className="flex gap-4"><MdOutlineContactPage className="text-xl"></MdOutlineContactPage>Page  {book.totalPages}</h5>
                                </div>

                                <div className="py-1">
                                <button className="btn btn-primary bg-[#cadef7]  text-sky-500 border-indigo-300 rounded-2xl mr-6">Category: {book.category}</button>
                                <button className="btn btn-primary bg-[#f6ce92] text-orange-500 border-orange-400 rounded-2xl mr-6">Rating: {book.rating}</button>
                                <Link to={"/books-listed"}>
                                <button className="btn btn-success bg-[#23BE0A]  text-white rounded-2xl mr-6">View Details</button>
                                </Link>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
         </div>
                </div>

                
            </div>
        </div>
          
            {/* <ul>
                {
                    storedData.map(data => <li key={data.id}>{data.bookName}</li>)
                }
            </ul> */}
        </div>
    );
};

export default BooksListed;