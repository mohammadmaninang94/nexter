import SideBar from './components/sidebar/sidebar.component';
import Header from './components/header/header.component';
import Realtors from './components/realtors/realtors.component';
import SectionFeatures from './components/section-features/section-features.component';
import StoryPictures from './components/story-pictures/story-pictures.component';
import StoryContent from './components/story-content/story-content.component';
import SectionHomes from './components/section-homes/section-homes.component';
import SectionGallery from './components/section-gallery/section-gallery.component';
import Footer from './components/footer/footer.component';


import './App.scss';

const App = () => (
  <div className='container'>
    <SideBar />
    <Header />
    <Realtors />
    <SectionFeatures />
    <StoryPictures />
    <StoryContent />
    <SectionHomes />
    <SectionGallery />
    <Footer />
  </div>
);

export default App;
