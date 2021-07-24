import React, { useEffect } from "react";
import useBooks from "../../hooks/books.hook";

const HomePage = () => {
  const [getBooks] = useBooks();
  useEffect(() => {
     (async()=> {
      const books = await getBooks();
      console.log(books)
    })();
    document.body.classList.add("light__theme");
  }, []);

  return (
    <div className="home-page-container">
      <h1>home</h1>
    </div>
  );
};

export default HomePage;
