import React from 'react'
import { useTheme } from "../context/ThemeContext";

function Footer() {
    const { darkMode } = useTheme();
    return (
        <div className="footer">
            <p>Copyright © 2023 Dee Caulcrick.</p>
            <div className="credits">
                <ul>
                    <li><a href='https://github.com/deecaulcrick'
                        style={{
                            color: darkMode ? '#fff' : '#222',
                        }}>Github</a></li>
                    <li ><a href='https://twitter.com/deecaulcrick'
                        style={{
                            color: darkMode ? '#fff' : '#222',
                        }}>Twitter</a></li>
                </ul>
            </div>
        </div >
    )
}

export default Footer