import { calculateInvestmentResults, formatter } from "../util/investment"
export default function Results({ input }) {

    const results = calculateInvestmentResults(input);
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
    console.log(input);
    console.log(results);

    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Investment Year</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {
                results.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })
            }

        </tbody>
    </table>
    // results.map(result => {
    //     <p id="result.year" {result.year}</ p>
    // })
    //         return <p>Results... {results[0].year}</p>
};