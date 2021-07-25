import { useEffect, useState } from "react";
import BookComponent from "../../components/Book/BookComponent";
import { Book }  from "../../models/book";
import { Gender } from "../../models/gender";
import useBooks from "../../hooks/books.hook";

const HomePage = () => {

  const [genders, setGenders] = useState<Gender[]>([]);
  const [books, setBooks] = useState<Book[]>([]);

  const [gender, setGender] = useState<number>(1);

  const [getBooks] = useBooks();
  useEffect(() => {
     (async()=> {
      const books = await getBooks();
      console.log(books)
    })();
    document.body.classList.add("light__theme");
  }, []);

  useEffect(() => {
    const genderlists = [
      {id: 1, name: 'All'},
      {id: 2, name: 'Action'},
      {id: 3, name: 'Drama'},
      {id: 4, name: 'Love'},
      {id: 5, name: 'Mystery'},
    ];

    setGenders(genderlists);
  }, []);

  useEffect(() => {
    const bookLists = [
      {
        id: 1,
        image: 'https://lumiere-a.akamaihd.net/v1/images/image_4f447b1d.jpeg',
        title: 'Los increibles 2',
        author: 'increi',
        gender: 2
      },
      {
        id: 2,
        image: 'https://i.pinimg.com/236x/d6/53/22/d65322f9e1a1c8d0c9f4fc5fe42c9348.jpg',
        title: 'Legacy',
        author: 'Lega',
        gender: 3
      }
    ];

    const bookListsByGender = gender === 1
              ? bookLists
              : bookLists.filter(book => book.gender === gender);

    setBooks(bookListsByGender);
  }, [gender]);

  const genderChange = (id: number) => {
    setGender(id);
  }

  return (
    <div className="home-page-container">
      <br/><br/><br/>
      <ul className="home-page-container-genders">
        {
          genders.map(({id, name}) => (
            <li className="gender-item" key={id} onClick={() => genderChange(id)}>{name}</li>
          ))
        }
      </ul>

      <div className="home-page-container-books">
        {
          books.map(book => (
            <BookComponent
            key={book.id}
            {...book} />
          ))
        }
      </div>
    </div>
  );
};

export default HomePage;
