import './App.css';
import Header from './Components/Header.js'
import Navigation from './Components/Navigation.js'
import Profile from './Components/Profile.js'

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

