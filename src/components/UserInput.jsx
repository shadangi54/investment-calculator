export default function UserInput({userInput, onChangeValue}){
    return (
        <section id="user-input">
            <div className="input-group">
            <p>
            <label>INITIAL INVESTMENT</label>
            <input type="number" required onChange={(event)=>onChangeValue(event.target.value, "initialInvestment")} value={userInput.initialInvestment}></input>
            </p>
            <p>
            <label>ANNUAL INVESTMENT</label>
            <input type="number" required onChange={(event)=>onChangeValue(event.target.value, "annualInvestment")} value={userInput.annualInvestment}></input>
            </p>
            </div>
            <div className="input-group">
            <p>
            <label>EXPECTED RETURN</label>
            <input type="number" required onChange={(event)=>onChangeValue(event.target.value, "expectedReturn")} value={userInput.expectedReturn}></input>
            </p>
            <p>
            <label>DURATION</label>
            <input type="number" required onChange={(event)=>onChangeValue(event.target.value, "duration")} value={userInput.duration}></input>
            </p>
            </div>
        </section>
    );
}