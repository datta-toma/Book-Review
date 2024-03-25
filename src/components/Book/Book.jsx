import { FaRegStar } from "react-icons/fa";
const Book = ({book}) => {
    const {id, bookName, image, review, category, rating, tags} = book;
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl mt-10">
                <figure><img className="w-48 mt-6 rounded-lg" src={image} alt="img" /></figure>
                <div className="card-body">
                    <p className="text-green-400 font-bold">{tags.join(" ")}</p>
                    <h2 className="card-title">{bookName}</h2>
                    <p>{review}</p><hr></hr>
                    <div className="flex">
                    <p>{category}</p>
                   <p className="flex gap-2"><FaRegStar></FaRegStar>{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;