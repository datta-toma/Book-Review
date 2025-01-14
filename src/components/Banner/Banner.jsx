import { Link } from 'react-router-dom';
import bannerimg from '../../assets/img/book.png';
const Banner = () => {
    return (
        <div className="bg-gray-200 lg:h-96 h-screen rounded-xl">
            <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-32 gap-4'>
            <div className="text-center space-y-7">
                <h1 className="text-5xl">Books to freshen up<br></br> your bookshelf</h1>
                <p>Writing an entire book can be a daunting task, especially for<br></br> new writers. It requires hard work, extreme ambition, and intense discipline.</p>
                <Link to="/books-listed">
                <button className="btn btn-wide bg-[#23BE0A] text-xl text-white mt-4">View The List</button>
                </Link>
               
            </div>
            <div className='lg:mt-8'>
                <img className='lg:w-52 w-32  bg-bg-gray-200' src={bannerimg}></img>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;