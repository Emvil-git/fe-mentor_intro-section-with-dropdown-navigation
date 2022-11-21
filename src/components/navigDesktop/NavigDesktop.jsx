import { useBEM } from "../../customHooks"
import DesktopDropdown from "./NavigDesktopDropdown"

const NavigDesktop = () => {

    const [B,E] = useBEM('nav-desktop')

    return(
        <div className={B()}>
            <img className={E('logo')} src="images/logo.svg" alt="logo" />
            <nav>
                <div>
                    <DesktopDropdown type="features" label="Features" ht={202}/>
                    <DesktopDropdown type="company" label="Company" ht={148}/>
                    <h2>Careers</h2>
                    <h2>About</h2>
                </div>

                <div>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </nav>
        </div>
    )
}

export default NavigDesktop