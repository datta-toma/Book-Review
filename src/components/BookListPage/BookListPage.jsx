
const BookListPage = () => {
    const readList = JSON.parse(localStorage.getItem('readList')) || [];
    return (
        <div>
            <h1>Read Books</h1>
            <ul>
                {readList.map(book => (
                    <li key={book.id}>{book.bookName}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookListPage;