import { useState } from 'react';
import styled from "styled-components";

const Button = styled.button`
color: black;
border: 2px solid black;
background-color: white;
`;

function App({ className }: { className?: string }) {
  const [count, setCount] = useState(0)
  const increaseCountByOne = () => setCount((prev) => prev + 1);

  return (
    <div className={className}>
      <Button onClick={increaseCountByOne}>
        count is {count}
      </Button>
    </div>
  );

}

export default App
