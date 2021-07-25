import axios from "axios";

const useBooks = () => {
  const getBooks = async () => {
    const { data } = await axios.get("http://localhost:8000/api/books/");
    return data;
  };
  return [getBooks];
};
export default useBooks;
