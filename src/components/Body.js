import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./BookList/BookList";
import About from "./About/About";
import Home from "./Home/Home";
// import BookList from "./BookList";
// import About from "./About";
// import Home from "./Home";
import Contact from "./Contactus";
import Team from "./Team/Team";
import TermsAndService from "./Terms&Service";
import PrivacyPolicy from "./PrivacyPolicy";
import CookiePolicy from "./Cookie";
import FaqHelp from "./faq";
import Develop from "./develop";
import Error from "./Error";
import SingleBk from "./Home/SingleBk/SingleBk";
import SingleBk1 from "./Home/SingleBk/SingleBk1";
import SingleBk2 from "./Home/SingleBk/SingleBk2";
import SingleBk3 from "./Home/SingleBk/SingleBk3";
import SingleBk4 from "./Home/SingleBk/SingleBk4";
import SingleBk5 from "./Home/SingleBk/SingleBk5";
import SingleBk6 from "./Home/SingleBk/SingleBk6";
import SingleBk7 from "./Home/SingleBk/SingleBk7";
import SingleBk8 from "./Home/SingleBk/SingleBk8";
import SingleBk9 from "./Home/SingleBk/SingleBk9";
import AddBooks from "./AddBooks/AddBooks";
import Success from "./Success";

function Body(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home theme={props.theme} />} />
        <Route path="/books" element={<BookList theme={props.theme} />} />
        <Route path="/books/book" element={<SingleBk />} />
        <Route path="/books/book1" element={<SingleBk1 />} />
        <Route path="/books/book2" element={<SingleBk2 />} />
        <Route path="/books/book3" element={<SingleBk3 />} />
        <Route path="/books/book4" element={<SingleBk4 />} />
        <Route path="/books/book5" element={<SingleBk5 />} />
        <Route path="/books/book6" element={<SingleBk6 />} />
        <Route path="/books/book7" element={<SingleBk7 />} />
        <Route path="/books/book8" element={<SingleBk8 />} />
        <Route path="/books/book9" element={<SingleBk9 />} />

        <Route path="/about" element={<About theme={props.theme} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team theme={props.theme}/>} />
        <Route path="/terms" element={<TermsAndService theme={props.theme}/>} />
        <Route path="/privacy" element={<PrivacyPolicy theme={props.theme}/>} />
        <Route path="/cookie" element={<CookiePolicy theme={props.theme}/>} />
        <Route path="/faq" element={<FaqHelp theme={props.theme}/>} />
        <Route path="/develop" element={<Develop theme={props.theme}/>} />
        <Route path="/addBooks" element={<AddBooks/>} />
        <Route path="/success" element={<Success/>} />

        <Route path="*" element={<Error />} />


      </Routes>
    </div>
  );
}

export default Body;
