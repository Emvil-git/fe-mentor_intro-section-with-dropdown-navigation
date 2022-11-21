import { useState } from 'react'
import { useBEM } from '../../customHooks'
import NavigMobileMenu from './NavigMobileMenu'

const NavigMobile = () => {

    const [B,E] = useBEM('navig-mobile')
    const [isOpen, setIsOpen] = useState(false)

    const [slideDatThang, setSlideDatThang] = useState(null) 
    // ^^^ accepts 3 states - null, 'open', 'close'
    // null -> default, closed, no animations
    // 'open' -> plays open animation
    // 'close' -> plays close animation

    const openMenu = () => {
        switch(slideDatThang){
            case 'open':
                return E('menu', 'open')
            case 'close':
                return E('menu', 'close')
            default:
                return E('menu')
        }
    }

    const openMenuCont = () => {
        switch(slideDatThang){
            case 'open':
                return E('menu-cont', 'open')
            case 'close':
                return E('menu-cont', 'close')
            default:
                return E('menu-cont')
        }
    }

    // const showMenu = () => {
    //     if (isOpen) return (
    //         <div className={E('menu')}>
    //         <div className={E('menu-cont')}>
    //             <div className={E('menu-close')}>
    //                 <button onClick={() => {setIsOpen(false)}}>
    //                     <img src="images/icon-close-menu.svg" alt="" />
    //                 </button>
    //             </div>

    //             <NavigMobileMenu/>
    //         </div>
    //     </div>
    //     )

    //     return ''
    // }

    return (
        <div className={B()}>

            {/* {showMenu()} */}

        <div className={openMenu()}>
            <div className={openMenuCont()}>
                <div className={E('menu-close')}>
                    <button onClick={() => setSlideDatThang('close')}>
                        <img src="images/icon-close-menu.svg" alt="" />
                    </button>
                </div>

                <NavigMobileMenu/>
            </div>
        </div>

            <img src="images/logo.svg" alt="logo" />
            <button onClick={() => {setSlideDatThang('open')}}>
                <img src="images/icon-menu.svg" alt="logo" />
            </button>
        </div>
    )

}

export default NavigMobile;