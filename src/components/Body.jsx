import { useState } from 'react';
import { useTheme } from "../context/ThemeContext";
import operators from '../data/data'
import link from '../assets/link.svg'
function Body() {
    const [selectedOperator, setSelectedOperator] = useState(null)

    const handleOperatorClick = (operator) => {
        setSelectedOperator(operator)
    }
    const { darkMode } = useTheme();

    return (
        <div className="section">
            <div className="hero">
                <h1>Javascript Operator <span className="orange-text">Lookup</span></h1>
                <p>Pick an operator to learn more about it</p>
            </div>
            <div className="operator-section">
                <div className="operator-grid">
                    {operators.map((operator, id) => (
                        <div className='operator' key-={id} onClick={() => handleOperatorClick(operator)}
                            style={{
                                backgroundColor: darkMode ? '#FF8B59' : '#FFF',
                                color: darkMode ? '#fff' : '#000',
                            }}>
                            {operator.symbol}
                        </div>
                    ))}
                </div>

                {selectedOperator && (
                    <div className="description-box"
                        style={{
                            backgroundColor: darkMode ? '#FFC6AD10' : '#FFF',
                            color: darkMode ? '#fff' : '#222',
                        }}>
                        <div className="description">
                            <div className="operator-desc">{selectedOperator.symbol}</div>
                            <h2>This is the <span className='orange-text'>{selectedOperator.name}</span> Operator</h2>
                            <p>{selectedOperator.description}</p>
                            <div className="operator-link">
                                <p id='operator-link-text'><span><img src={link} width='15px' /></span> Read more about this operator <a href={selectedOperator.link}>on MDN</a></p>
                            </div>
                        </div>
                    </div>
                )}

            </div>


        </div>
    )
}

export default Body