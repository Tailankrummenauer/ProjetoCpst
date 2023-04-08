import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'



import Footer from './components/layout/Footer'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Project from './components/pages/Project'


function App() {
  return (
    <Router>
      <Navbar />
       
      
      <Container customClass="min-height">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/company' element={<Company/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route element={<NewProject/>} path='/newproject' />
          <Route element={<Contact/>} path='/contact' />
          <Route element={<Project/>} path='/project/:id' />
        </Routes>
      </Container>
      
      <Footer />
    </Router>


  );
}

export default App;
