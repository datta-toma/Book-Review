import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({book, onBookSelect}) => {
    const {id, bookName, image, category, rating, tags, author} = book;

    const handleClick = () => {
        onBookSelect(book);
    };

    return (
       <div>
        <Link to={`/book/${id}`}>
        <div  onClick={handleClick} className="cursor-pointer">
           <div className="card w-96 bg-base-100 shadow-xl mt-10">
                <figure><img className="w-48 mt-6 rounded-lg" src={image} alt="img" /></figure>
                <div className="card-body">
                    <p className="text-green-400 font-bold">{tags.join(" , ")}</p>
                    <h2 className="card-title">{bookName}</h2>
                    <p>Author: {author}</p><hr></hr>
                    <div className="flex">
                    <p>{category}</p> 
                   <p className="flex gap-2">{rating} <FaRegStar></FaRegStar></p>
                    </div>
                </div>
            </div>
        </div>
        </Link>
        
       </div>
        
    );
};

export default Book;