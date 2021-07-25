import { Book } from '../../models/book';

const BookComponent = ({image, title, author}: Book) => {

    return (
        <div className="book-component-container">
            <div className="book-container-image">
                <img className="book-image" src={image} alt={title}></img>
            </div>
            <div className="book-information">
                <p className="book-information-title">{author}</p>
                <p className="book-information-author">{author}</p>
            </div>
        </div>
    )
}

export default BookComponent;
