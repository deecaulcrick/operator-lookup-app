import { useState } from 'react';
import operators from '../data/data'
function Body() {
    const [selectedOperator, setSelectedOperator] = useState(null)

    const handleOperatorClick = (operator) => {
        setSelectedOperator(operator)
    }

    return (
        <div className="section">
            <div className="hero">
                <h1>Javascript Operator <span className="pink-text">Lookup</span></h1>
                <p>Pick an operator to learn more about it</p>
            </div>
            <div className="operator-section">
                <div className="operator-grid">
                    {operators.map((operator, id) => (
                        <div className='operator' key-={id} onClick={() => handleOperatorClick(operator)}>
                            {operator.symbol}
                        </div>
                    ))}
                </div>

                {selectedOperator && (
                    <div className="description-box">
                        <div className="description">
                            <div className="operator">{selectedOperator.symbol}</div>
                            <h2>This is the <span className='pink-text'>{selectedOperator.name}</span> Operator</h2>
                            <p>{selectedOperator.description}</p>
                            <div className="operator-link">
                                <p id='operator-link-text'>Read more about this operator <a href={selectedOperator.link}>on MDN</a></p>
                            </div>
                        </div>
                    </div>
                )}

            </div>


        </div>
    )
}

export default Body