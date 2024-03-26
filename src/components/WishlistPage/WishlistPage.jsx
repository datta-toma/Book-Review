
const WishlistPage = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    return (
        <div>
        <h1>Wishlist</h1>
        <ul>
            {wishlist.map(book => (
                <li key={book.id}>{book.bookName}</li>
            ))}
        </ul>
    </div>
    );
};

export default WishlistPage;