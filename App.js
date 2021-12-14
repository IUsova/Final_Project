import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Outlet, Route, Routes} from "react-router-dom";
import IndexPage from "./IndexPage/IndexPage";
import BasketPage from "./BasketPage/BasketPage";


function App() {
  return (
      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route index element={<IndexPage/>}/>
              <Route path={'/basket'} element={<BasketPage/>}/>
          </Route>
      </Routes>
  );
}

function Layout() {
    return (
        <div className="App">
          <Header/>
          <main className={'content'}>
              <Outlet/>
          </main>
            <Footer/>
        </div>
    )
}

export default App;
