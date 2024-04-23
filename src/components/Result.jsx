import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({data}){
    const results = calculateInvestmentResults(data);
    const initialInvestment  =results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map(item => {
                    const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
                    const totalInvestedAmout = item.valueEndOfYear - totalInterest;
                    return <tr key={item.year}>
                        <td>{item.year}</td>
                        <td>{formatter.format(item.valueEndOfYear)}</td>
                        <td>{formatter.format(item.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalInvestedAmout)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}