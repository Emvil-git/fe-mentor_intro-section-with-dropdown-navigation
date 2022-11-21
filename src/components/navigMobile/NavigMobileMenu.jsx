import { useBEM } from "../../customHooks"
import MobileDropdown from "./NavigMobileDropdown"

const NavigMobileMenu = () => {
    
    const [B,E] = useBEM('mobile-menu')
    
    return (
        <div className={B()}>
            <div>
            {/* <div className={E('dropdown-wrap')}>
                <section className={E('dropdown')}>
                    <h2>Features</h2>
                    <img src="images/icon-arrow-down.svg" alt="" />
                </section>
                
                <menu>
                    <li>
                        <div className={E('icon-wrap')}>
                            <img src="images/icon-todo.svg" alt="" />
                        </div>
                        Todo List
                    </li>

                    <li>
                        <div className={E('icon-wrap')}>
                            <img src="images/icon-calendar.svg" alt="" />
                        </div>
                        Calendar
                    </li>

                    <li>
                        <div className={E('icon-wrap')}>
                            <img src="images/icon-reminders.svg" alt="" />
                        </div>
                        Reminders
                    </li>

                    <li>
                        <div className={E('icon-wrap')}>
                            <img src="images/icon-planning.svg" alt="" />
                        </div>
                        Planning
                    </li> 
                </menu>
            </div> */}
            
            {/* <div className={E('dropdown-wrap')}>
                <section  className={E('dropdown')}>
                    <h2>Company</h2>
                    <img src="images/icon-arrow-down.svg" alt="" />
                </section>

                <menu>
                    <li>
                        History
                    </li>

                    <li>
                        Our Team
                    </li>

                    <li>
                        Blog
                    </li>
                </menu>
            </div> */}
            
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