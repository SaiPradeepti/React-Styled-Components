import styled from "styled-components";

// tagged template literal
const BasicTitle = styled.h1`
  text-align: center;
  padding: 3rem;
  color: #222;
  text-transform: capitalize;
`;

function App() {

  return (
    <div className="App">
      <BasicTitle>styled components</BasicTitle>
    </div>
  );
}

export default App;
