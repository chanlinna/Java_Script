import Statistic from "./Statistic";

export default function Scores ({courseName, courseResults}){
    return(
        <div className="scores">
            <h1>{courseName}</h1>
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {courseResults.map((result) => (
                        <tr>
                            <td>{result.firstName}</td>
                            <td>{result.lastName}</td>
                            <td className={result.score < 50 ? "warning" : ""}> {result.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Statistic courseResults={courseResults} />
        </div>
    );
}