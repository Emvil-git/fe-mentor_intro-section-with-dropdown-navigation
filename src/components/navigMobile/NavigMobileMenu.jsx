import { useBEM } from "../../customHooks"

const NavigMobileMenu = () => {
    
    const [B,E] = useBEM('mobile-menu')
    
    return (
        <div className={B()}>
            <div>
            <section className={E('dropdown')}>
                <h2>Features</h2>
                <img src="images/icon-arrow-down.svg" alt="" />
            </section>
            
            <section  className={E('dropdown')}>
                <h2>Company</h2>
                <img src="images/icon-arrow-down.svg" alt="" />
            </section>
            
            <h2>Careers</h2>
            <h2>About</h2>
            </div>
            <button>Login</button>
            <button>Register</button>
        </div>
    )
}

export default NavigMobileMenu