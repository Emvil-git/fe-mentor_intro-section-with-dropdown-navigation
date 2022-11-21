import { useState } from 'react'
import { useBEM } from '../../customHooks'
import NavigMobileMenu from './NavigMobileMenu'

const NavigMobile = () => {

    const [B,E] = useBEM('navig-mobile')
    const [isOpen, setIsOpen] = useState(false)

    const showMenu = () => {
        if (isOpen) return (
            <div className={E('menu')}>
            <div className={E('menu-cont')}>
                <div className={E('menu-close')}>
                    <button onClick={() => {setIsOpen(false)}}>
                        <img src="images/icon-close-menu.svg" alt="" />
                    </button>
                </div>

                <NavigMobileMenu/>
            </div>
        </div>
        )

        return ''
    }

    return (
        <div className={B()}>

            {showMenu()}

            <img src="images/logo.svg" alt="logo" />
            <button onClick={() => {setIsOpen(true)}}>
                <img src="images/icon-menu.svg" alt="logo" />
            </button>
        </div>
    )

}

export default NavigMobile;