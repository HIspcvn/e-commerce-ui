
import './App.css';
import Navigation from './components/Navigation/Navigation';
import HeroSection from './components/HeroSection/HeroSection';
import NewArrivals from './components/sections/NewArrivals';
import Category from './components/sections/Categories/Category';
import content from './data/content.json';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <NewArrivals />
      {content.categories && content.categories.map((item, index) => <Category key={item.title + index} {...item} />)}
    </div>
  );
}

export default App;
