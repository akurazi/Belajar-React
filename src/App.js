import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';
import './style/landingPage.css';

function App() {
  return (
    <div>
      {/* intro awal */}
      <div className='myBG border'>
        <NavigationBar />
        <Intro />
        
      </div>
      {/* intro end */}

      {/* Section Trending */}
      <div className='trending'>
        <Trending />
      </div>
      {/* Section Superhero */}
          <div className='superhero'>
        <Superhero />
      </div>
    </div>    
  );
}

export default App;
