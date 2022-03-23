import './App.css';
import Header from './Components/Header/Header.js'
import Navigation from './Components/Navigation/Navigation.js'
import Profile from './Components/Profile/Profile.js'
import Dialogs from "./Components/Dialogs/Dialogs"
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='content-wrapper'>
                <Header/>
                <Navigation/>
                <div className='profile'>

                    <Routes>
                        <Route path='/' element={'Feed'}/>
                        <Route path='/dialogs/*' element={<Dialogs/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/Music' element={<Music/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;

