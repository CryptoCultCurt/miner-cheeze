import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Dapp from './components/dapp';
import About from './components/about';
import Faq from './components/faq';

function App() {
  return (
    <div className="App">
      <Header/>
      <div class="section-yellow wf-section">
            <div class="div-block-1200 center">
                <h1 class="heading-1 center">Get The Cheeze</h1>
                <p class="body _800 center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean
                    faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
              <Dapp/>
            </div>
        </div>
        <About />
        <Faq />
      <Footer/>
    </div>
  );
}

export default App;
