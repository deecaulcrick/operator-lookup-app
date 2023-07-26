import { useTheme } from "../context/ThemeContext";
import logo from '../assets/lookup-logo.svg'
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'

function Header() {
    const { darkMode, toggleDarkMode } = useTheme();
    return (
        <div className="header">
            <h3 className="logo"><span><img src={logo} width='20px' className="logoIcon" /></span>Operator Lookup</h3>

            <img src={darkMode ? moon : sun}
                onClick={toggleDarkMode} />
        </div>
    )
}

export default Header