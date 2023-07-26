const operators = [
    {
        id: 0,
        symbol: '=',
        name: 'Assignment',
        description: 'The assignment (=) operator is used to assign a value to a variable. The assignment operation evaluates to the assigned value. Chaining the assignment operator is possible in order to assign a single value to multiple variables.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment'
    },
    {
        id: 1,
        symbol: '+=',
        name: 'Addition Assignment',
        description: 'The addition assignment (+=) operator performs addition (which is either numeric addition or string concatenation) on the two operands and assigns the result to the left operand.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment'
    },
    {
        id: 2,
        symbol: '-=',
        name: 'Subtraction Assignment',
        description: 'The subtraction assignment (-=) operator performs subtraction on the two operands and assigns the result to the left operand.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment'
    },
    {
        id: 3,
        symbol: '*=',
        name: 'Multiplication Assignment',
        description: 'The multiplication assignment (*=) operator performs multiplication on the two operands and assigns the result to the left operand.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment'
    },
    {
        id: 4,
        symbol: '/=',
        name: 'Division Assignment',
        description: 'The division assignment (/=) operator performs division on the two operands and assigns the result to the left operand.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment'
    },
    {
        id: 5,
        symbol: '%',
        name: 'Modulus',
        description: 'The modulus (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder'
    },
    {
        id: 6,
        symbol: '++',
        name: 'Increment',
        description: 'The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment'
    },
    {
        id: 7,
        symbol: '--',
        name: 'Decrement',
        description: 'The decrement (--) operator decrements (subtracts one from) its operand and returns the value before or after the decrement, depending on where the operator is placed.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement'
    },
    {
        id: 8,
        symbol: '==',
        name: 'Equality',
        description: 'The equality (==) operator checks whether its two operands are equal, returning a Boolean result. Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality'
    },
    {
        id: 9,
        symbol: '!=',
        name: 'Inequality',
        description: 'The inequality (!=) operator checks whether its two operands are not equal, returning a Boolean result. Unlike the strict inequality operator, it attempts to convert and compare operands that are of different types.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality'
    },
    {
        id: 10,
        symbol: '===',
        name: 'Strict Equality',
        description: 'The strict inequality (!==) operator checks whether its two operands are not equal, returning a Boolean result. Unlike the inequality operator, the strict inequality operator always considers operands of different types to be different.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality'
    },
    {
        id: 11,
        symbol: '!==',
        name: 'Strict Inequality',
        description: 'The strict inequality (!==) operator checks whether its two operands are not equal, returning a Boolean result. Unlike the inequality operator, the strict inequality operator always considers operands of different types to be different.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality'
    },
    {
        id: 12,
        symbol: '>',
        name: 'Greater Than',
        description: 'The greater than (>) operator returns true if the left operand is greater than the right operand, and false otherwise.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than'
    },
    {
        id: 13,
        symbol: '<',
        name: 'Less Than',
        description: 'The less than (<) operator returns true if the left operand is less than the right operand, and false otherwise.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than'
    },
    {
        id: 14,
        symbol: '>=',
        name: 'Greater Than or Equal To',
        description: 'The greater than or equal (>=) operator returns true if the left operand is greater than or equal to the right operand, and false otherwise.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal'
    },
    {
        id: 15,
        symbol: '<=',
        name: 'Less than or Equal To',
        description: 'The less than or equal (<=) operator returns true if the left operand is less than or equal to the right operand, and false otherwise.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal'
    },
    {
        id: 16,
        symbol: '&&',
        name: 'Logical AND',
        description: 'The logical AND (&&) (logical conjunction) operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false. More generally, the operator returns the value  of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND'
    },
    {
        id: 17,
        symbol: '||',
        name: 'Logical OR',
        description: 'The logical OR (||) (logical disjunction) operator for a set of operands is true if and only if one or more of its operands is true. It is typically used with boolean (logical) values. When it is, it returns a Boolean value. However, the || operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR'
    },
    {
        id: 18,
        symbol: '!',
        name: 'Logical NOT',
        description: 'The logical NOT (!) (logical complement, negation) operator takes truth to falsity and vice versa. It is typically used with boolean (logical) values. When used with non-Boolean values, it returns false if its single operand can be converted to true; otherwise, returns true.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT'
    }
]

export default operators