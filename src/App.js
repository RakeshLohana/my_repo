import './App.css';
import {Routes,Route}from 'react-router-dom'
import Home from './page/Home';
import Blog from './page/Blog';
import Team from './page/Team/pages/Teams';
import Itec from './page/Itec';
import Gallery from './page/Gallery';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './componets/Navbar';
import Footer from  './componets/Contact/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (<>
 <Navbar/>

    <Routes>
<Route  path='/' element={<Home/>} />
<Route path='/blog' element={<Blog/>} />
<Route path='/itec' element={<Itec/>} />
<Route path='/team' element={<Team/>} /> 
<Route path='/gallery' element={<Gallery/>} /> 
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
