import { useState } from "react";
import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10

});

function handleChange(newValue, inputType){
    setUserInput(prevState =>{
        return {
            ...prevState,
            [inputType] : +newValue
        }

    });
}

const isValidInput = userInput.duration>0;

  return (
    <>
      <Header/>
      <UserInput onChangeValue={handleChange} userInput={userInput}/>
      {isValidInput && <Result data={userInput}/>}
      {!isValidInput && <p className="center">Please enter a valid Duration!</p>}
    </>
  );
}

export default App;
