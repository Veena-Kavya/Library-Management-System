import { BrowserRouter,Routes,Route } from "react-router-dom";

import Login from "./component/login";
import Admin from "./component/admin";
import BookList from "./component/booklist";
import AddBook from "./component/addBook";
import AddUser from "./component/addUser";
import ReadBook from "./component/readBook";
import UserList from "./component/userList";



function App(){
  return(
    <div className="App">
      <BrowserRouter> 
      <Routes> 
        <Route element={<Login/>} path="/"/>
        <Route element={<Admin/>} path="/admin"/>
        <Route element={<BookList/>} path="/book-list"/>
        <Route element={<AddBook/>} path="/add-book"/>
        <Route element={<AddUser/>} path="/add-user"/>
        <Route element={<ReadBook/>} path="/book-list/:id"/>
        <Route element={<UserList/>} path="/user-list"/>
      </Routes>
      </BrowserRouter>
   
      
    </div>
  )
}
export default App;
