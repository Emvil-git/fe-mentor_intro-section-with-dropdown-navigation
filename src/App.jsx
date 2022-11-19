
import './App.scss';
import { useBEM } from './customHooks';


function App() {
  const [B,E] = useBEM('App');

  return (
    <div className={B()}>
      <header>
        <img src="images/logo.svg" alt="logo" />
      </header>

      <main>
        <picture class="prod-img">
          <source media="(min-width: 1024px)" srcset="images/image-hero-desktop.png" className={E('hero-img', 'desktop')}/>
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

export default App;
