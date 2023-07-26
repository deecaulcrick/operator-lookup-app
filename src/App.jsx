import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer";
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
            <Footer />
        </div>
    )
}

export default App