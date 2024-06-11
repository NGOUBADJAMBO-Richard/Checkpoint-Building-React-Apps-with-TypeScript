import React from 'react'; 

// Define an interface for the props
interface GreetingProps {
    name: string; // The name to be greeted
}

// Functional component with typed props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>;
};

export default Greeting;
