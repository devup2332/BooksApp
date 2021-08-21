import axios from "axios";
import { useEffect, useState } from "react";
import {GetBooks} from "../models/book";

const useGetBooks = (booksUrl:any) => {
  const [ books, setBooks ] = useState<GetBooks>({data: [], loading: true, error: ''})

  useEffect(() => {
    const getBooks = async() => {
      const res = await axios.get(booksUrl);
      if(res.data.books){
        const { books } = res.data;
        setBooks({
          data: books,
          loading: false,
          error: ''
        });
      }
      if(res.data.rows){
        const { rows } = res.data;
        setBooks({
          data: rows,
          loading: false,
          error: ''
        });
      }
    }
    document.body.classList.add("light__theme");
    getBooks(); 

    return () => {}
  },[booksUrl])
  

  return books;

};
export default useGetBooks;
