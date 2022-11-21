
import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import { useBEM } from './customHooks';
import NavigMobile from './components/navigMobile/NavigMobile';
import NavigDesktop from './components/navigDesktop/NavigDesktop';

function App() {
  const [B,E] = useBEM('App');
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWidth())
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  const displayNavbar = () => {
    if (width >= 1008) {
      console.log('desktop')
      return <NavigDesktop/>
    }

    console.log('mobile')
      return <NavigMobile/>
  }

  console.log(width)
  displayNavbar()


  return (
    <div className={B()}>
      {displayNavbar()}
      {/* <header>
        <img src="images/logo.svg" alt="logo" />
      </header> */}

      <main>
        <picture>
          <source media="(min-width: 1024px)" srcSet="images/image-hero-desktop.png" className={E('hero-img', 'desktop')}/>
          <img src="images/image-hero-mobile.png" alt="IfItDoesntMatchAnyMedia" className={E('hero-img', 'mobile')}/>
        </picture>

        <div className={E('hero-text')}>
          <h1>Make remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <button className={E('btn')}>Learn more</button>
          <div className={E('hero-clients')}>
            <img src="images/client-databiz.svg" alt="" />
            <img src="images/client-audiophile.svg" alt="" />
            <img src="images/client-meet.svg" alt="" />
            <img src="images/client-maker.svg" alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}

const getWidth = () => {
  const {innerWidth} = window
  return innerWidth
}

export default App;
