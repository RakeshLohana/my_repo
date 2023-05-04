import './App.css';
import {Routes,Route}from 'react-router-dom'
import Home from './page/Home';
import Blog from './page/Blog';
import Team from './page/Team/pages/Teams';
import Event from './page/Event';
import Gallery from './page/Gallery';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './componets/Navbar';
import Footer from  './componets/Contact/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BlogPost from './blogpost';
import Leaderboard from './page/Leaderboard';
function App() {
  return (<>
 <Navbar/>

    <Routes>
<Route  path='/' element={<Home/>} />
<Route path='/blog' element={<BlogPost/>} />
<Route path='/Event' element={<Event/>} />
<Route path='/team' element={<Team/>} /> 
<Route path='/gallery' element={<Gallery/>} /> 
<Route path='/leaderboard' element={<Leaderboard/>} /> 

    </Routes>
    <Footer/>
    </>
  );
}

export default App;
