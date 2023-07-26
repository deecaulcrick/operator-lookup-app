import Header from "./components/Header"
import Body from "./components/Body"
import { useTheme } from './context/ThemeContext';
import './App.css'



function App() {

    const { darkMode } = useTheme();
    return (
        <div className="app"
            style={{
                backgroundColor: darkMode ? '#222' : '#FFF5EA',
                color: darkMode ? '#fff' : '#222',
            }}>
            <Header />
            <Body />
        </div>
    )
}

export default App