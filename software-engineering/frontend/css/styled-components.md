# Styled Components

[Styled Components Getting Started](https://styled-components.com/docs/basics#getting-started)

Installing styled-components only takes a single command and you're ready to roll:

    npm install styled-components

## Getting Started

styled-components utilises tagged template literals to style your components.

It removes the mapping between components and styles. This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it.
Following is an example of React component with styled Components

    import styled from "styled-components";

    const Heading1 = styled.h1`
    font-size: 1.8em;
    text-align: center;
    color: #bf4f74;
    `;

    function ShoppingCart() {
    const Heading2 = styled.h2`
        font-size: 1.3em;
        text-align: center;
        color: #bf4f74;
    `;
    return (
        <div>
        <h1>Shopping Cart</h1>
        <Heading1>Hey</Heading1>
        <Heading2>Heading 2</Heading2>
        </div>
    );
    }

    export default ShoppingCart;
