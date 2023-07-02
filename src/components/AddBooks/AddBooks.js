import React from "react";
import "./AddBooks.css";
import Upload from "./Upload";
import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBooks = (props) => {
  const bookName = useRef();
  const authorName = useRef();
  const publisher = useRef();
  const pages = useRef();
  const img = useRef();
  const category=useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const books = {
      bookName: bookName.current.value,
      authorName: authorName.current.value,
      publisher: publisher.current.value,
      pages: pages.current.value,
      img: img.current.value,
      category:category.current.value,
    };

    try {
      const res = await axios.post("https://informaticonserver.onrender.com/api/book/add", books);
      toast.success("Book details added!!Upload the book.");
      localStorage.setItem("bookId", res.data);
    } catch (err) {
      toast.error("Fill all the details!");
      console.log(err.message);
    }
  };
  const categories = ["Art", "Biography", "Business", "Children's", "Classics", "Christian",
    "Comics", "Cookbooks", "Ebooks", "Fantasy", "Fiction", "Novel", "History", "Horror", "Music", "Mystery",
    "Non-Fiction", "Poetry", "Psychology", "Prejudice", "Romance", "Science", "Thriller", "Universe"];
  
  return (
    <div>
      <div className="addbook_main">
        <div className="addBooks-container">
          <div className="add-books text-white">
            <h1 className="form-title" style={{
              color: props.theme === "dark"?"white":"black"
              }}>Add Books</h1>
            <form className="Boxx" onSubmit={handleSubmit} style={{
                  color: props.theme === "dark"?"white":"black",
                  backgroundColor: props.theme === "dark"?"black":"white"
                  }}>
              <input
                className="Inputt"
                type="text"
                placeholder="Book Name"
                ref={bookName}
                style={{
                  color: props.theme === "dark"?"white":"black",
                  backgroundColor: props.theme === "dark"?"black":"white"
                  }}
              />
              <input
                className="Inputt"
                type="text"
                placeholder="Author Name"
                ref={authorName}
                style={{
                  color: props.theme === "dark"?"white":"black",
                  backgroundColor: props.theme === "dark"?"black":"white"
                  }}
              />
              <input
                className="Inputt"
                type="text"
                placeholder="Publisher"
                ref={publisher}
                style={{
                  color: props.theme === "dark"?"white":"black",
                  backgroundColor: props.theme === "dark"?"black":"white"
                  }}
              />
              <input
                className="Inputt"
                type="number"
                placeholder="Pages"
                ref={pages}
                style={{
                  color: props.theme === "dark"?"white":"black",
                  backgroundColor: props.theme === "dark"?"black":"white"
                  }}
              />
              <input
                className="Inputt"
                type="text"
                placeholder="Img Url"
                ref={img}
                style={{
                  color: props.theme === "dark"?"white":"black",
                  backgroundColor: props.theme === "dark"?"black":"white"
                  }}
              />
              <select className="Inputt" ref={category} style={{
                  color: props.theme === "dark"?"white":"black",
                  backgroundColor: props.theme === "dark"?"black":"white"
                  }}>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <button className="Buttonn" type="submit">
                Add Book
              </button>
            </form>
          </div>
        </div>
        <Upload />
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddBooks;
