import './App.css';
import Header from './Components/Header/Header.js'
import Navigation from './Components/Navigation/Navigation.js'
import Profile from './Components/Profile/Profile.js'

const App = () => {
  return (
    <div className='content-wrapper'>
        <Header />
        <Navigation />
        <Profile />
    </div>
  );
}


export default App;

