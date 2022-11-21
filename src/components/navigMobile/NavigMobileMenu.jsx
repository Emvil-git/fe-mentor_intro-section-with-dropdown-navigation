import { useBEM } from "../../customHooks"
import MobileDropdown from "./NavigMobileDropdown"

const NavigMobileMenu = () => {
    
    const [B,E] = useBEM('mobile-menu')
    
    return (
        <div className={B()}>
            <div>
            
            <MobileDropdown type='features' label="Features" ht={224}/>
            
            <MobileDropdown type='company' label="Company" ht={151}/>

            {/* NOTE: ht property is full height of the menu, used for anims because attr(value px) isn't working*/}

            <h2>Careers</h2>
            <h2>About</h2>
            </div>
            <button>Login</button>
            <button>Register</button>
        </div>
    )
}

export default NavigMobileMenu