import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import SideNav from "./SideNav";
import Main from "./Main";


function App() {
    return (
        <div className="App">
            <Header/>
            <Footer/>
            <Body/>
            <SideNav/>
            <Main/>
        </div>
    );
}

export default App;
