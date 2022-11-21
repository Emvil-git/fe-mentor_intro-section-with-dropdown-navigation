import { useState } from "react"
import { useBEM } from "../../customHooks"

const DesktopDropdown = ({type, label, ht}) => {
    const [B,E] = useBEM('drop-desktop')
    const [dropDatThang, setDropDatThang] = useState(null) 
    // ^^^ accepts 3 states - null, 'open', 'close'
    // null -> default, closed, no animations
    // 'open' -> plays open animation
    // 'close' -> plays close animation

    const openMenu = () => {
        switch(dropDatThang){
            case 'open':
                return E('menu', 'open')
            case 'close':
                return E('menu', 'close')
            default:
                return E('menu')
        }
    }

    const handleClick = () => {
        if (dropDatThang === 'open') {
            setDropDatThang('close')
        } else {
            setDropDatThang('open')
        }
    }

    const displayByType = () => {
        switch(type) {
            case 'features':         
                return(
                    <menu style={{"--ht": `${ht}px`}} className={openMenu()}>
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
                    <menu style={{"--ht": `${ht}px`}} className={openMenu()}>
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
                <section onClick={handleClick} className={E('head')}>
                    <h2>{label}</h2>
                    <img src="images/icon-arrow-down.svg" alt="" />
                </section>
                
                {displayByType()}
                
            </div>
    )
}

export default DesktopDropdown