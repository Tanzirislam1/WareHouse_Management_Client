import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
/* import ScrollToTop from './Components/ScrollToTop/ScrollToTop'; */
import Inventory from './Components/Inventory/Inventory';
import StockUpdate from './Components/StockUpdate/StockUpdate';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import AddInventory from './Components/AddInventory/AddInventory';
import MyItems from './Components/MyItems/MyItems';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './Components/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/inventory' element={
          <RequiredAuth>
            <Inventory></Inventory>
          </RequiredAuth>
        }></Route>
        <Route path='/inventoryItem/:id' element={
          <RequiredAuth>
            <StockUpdate></StockUpdate>
          </RequiredAuth>
        }></Route>
        <Route path='/manageInventory' element={
          <RequiredAuth>
            <ManageInventory></ManageInventory>
          </RequiredAuth>
        }></Route>
        <Route path='/addInventory' element={<RequiredAuth>
          <AddInventory></AddInventory>
        </RequiredAuth>}></Route>
        <Route path='/myItems' element={<RequiredAuth>
          <MyItems></MyItems>
        </RequiredAuth>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
