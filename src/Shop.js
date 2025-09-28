
import './Shop.css';
import HeroSection from './components/HeroSection/HeroSection';
import NewArrivals from './components/sections/NewArrivals';
import Category from './components/sections/Categories/Category';
import content from './data/content.json';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/*<Navigation />*/}
      <HeroSection />
      <NewArrivals />
      {content.pages.shop.sections && content.pages.shop.sections.map((item, index) => <Category key={item.title + index} {...item} />)}
      <Footer content={content.footer} />
    </div>
  );
}

export default App;
