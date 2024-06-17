import './App.css'
import Header from "./components/header.jsx";
import Founder from './sections/founder.jsx';
import Footer from './components/footer.jsx'
import Landing from './sections/landing.jsx';
import ReachUs from './sections/reachus.jsx';
function App() {
    return (
    <>
      <Header/>
      <Landing/>
      <Founder/>
      <ReachUs/>
      <Footer/>
    </>
  )
}

export default App
