import { useState } from "react"
import { useBEM } from "../../customHooks"

const MobileDropdown = ({type, label}) => {
    const [B,E] = useBEM('dropdown')
    const [dropDat, setDropDat] = useState(false)

    const openMenu = () => {
        if (dropDat) return E('menu', 'show')
        return E('menu')
    }

    const displayByType = () => {
        switch(type) {
            case 'features':
                return(
                    <menu className={openMenu()}>
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
                )
            
            case 'company':
                return(
                    <menu className={openMenu()}>
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
                ) 
        }
    }

    return(
        <div className={B()}>
                <section className={E('head')}>
                    <h2>{label}</h2>
                    <img src="images/icon-arrow-down.svg" alt="" />
                </section>
                
                {displayByType()}
                
            </div>
    )
}

export default MobileDropdown