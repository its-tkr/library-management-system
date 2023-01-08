const BookList = ({books}) => {
    return ( 
        <div className="book-list">
            {
                books.map((book)=>{
                    <div className="book">
                    <ul>
                        <li>Title : {book.name}</li>
                        <li>Category : {book.type}</li>
                        <li>Availability : {book.available}</li>
                    </ul>
                </div>
                })
            }
        </div>
     );
}
 
export default BookList;