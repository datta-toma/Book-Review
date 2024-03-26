import { useLoaderData, useParams } from "react-router-dom";

const ListedBooks = () => {

    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt );
    // console.log(book)
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
            </div>
        </div>
    );
};

export default ListedBooks;