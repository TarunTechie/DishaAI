import './App.css'
import Header from "./components/header.jsx";
import Founder from './sections/founder.jsx';
import Footer from './components/footer.jsx'
import Landing from './sections/landing.jsx';
import ReachUs from './sections/reachus.jsx';
import Genesis from './sections/genesis.jsx';
import PrimeMinister from './sections/primeMinister.jsx';
import Hsap from './sections/hsap.jsx';
import Review from './sections/review.jsx';

function App() {
    return (
        <>
            <Header/>
            <Landing/>
            <Genesis/>
            <PrimeMinister/>
            <Review/>
            <Founder/>
            <ReachUs/>
            <Footer/>
        </>
    )
}

export default App