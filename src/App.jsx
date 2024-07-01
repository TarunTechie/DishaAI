import './App.css'
import Header from "./components/header.jsx";
import Founder from './sections/founder.jsx';
import Footer from './components/footer.jsx'
import Landing from './sections/landing.jsx';
import ReachUs from './sections/reachus.jsx';
import Genesis from './sections/genesis.jsx';
import NEPPolicy from './sections/NEPPolicy.jsx';
import Hsap from './sections/hsap.jsx';
import Hsap_sub from './sections/hsap_sub.jsx';
import Appreciations from './sections/appreciations.jsx';
import Differentiator from './sections/differentiator.jsx'

function App() {
    return (
        <>
            <Header/>
            <Landing/>
            <Genesis/>
            <NEPPolicy/>
            <Hsap/>
            <Hsap_sub/>
            <Differentiator/>
            <Appreciations/>
            <Founder/>
            <ReachUs/>
            <Footer/>
        </>
    )
}

export default App