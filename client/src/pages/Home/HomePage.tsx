import { useState } from "react";
import BookComponent from "../../components/Book/BookComponent";
import useGetBooks from "../../hooks/books.hook";
import useGetGenres from "../../hooks/genre.hook";
//import { Scrollbars } from 'react-custom-scrollbars-2';

const HomePage = () => {

  let allGenders:any = [];
  //let booksUrl = 'http://localhost:8000/api/books/';
  const [booksByGender, setBooksByGender ] = useState('http://localhost:8000/api/books/');



  const {data:books} = useGetBooks(booksByGender);
  console.log(books);

  const { data: genders} =  useGetGenres('http://localhost:8000/api/genres');
   allGenders = genders.map(gender => {
     return gender.id;
   })
  console.log(genders);

  const changeGender = (id: number) => {
    if(allGenders.includes(id)){
      setBooksByGender(`http://localhost:8000/api/books/byGenre/${id}`)
    }else{
      setBooksByGender(`http://localhost:8000/api/books/`)
    }
  }

  return (
    <div className="home-page-container">
      
        <ul className="home-page-container-genders scroll">
          <li className="gender-item" onClick={() => changeGender(0)}>All</li>
          {
            genders.map(({id, name}) => (
              <li className="gender-item" key={id} onClick={() => changeGender(id)}>{name}</li>
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
