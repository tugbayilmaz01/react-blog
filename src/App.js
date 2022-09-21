import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import Blog from "./components/Blog";
import UserList from "./components/UserList";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
   
   <BrowserRouter>
   <Header/>
   <Card/> 
   <Routes>
   <> 
   
   <Route path="/blog-detail" element={<BlogDetail/>} />
   <Route path="/user-list" element={<UserList/>} />
   <Route path="/" element={<Blog/>} />
   </>
   </Routes> 

   </BrowserRouter> 
  );
}

export default App;
