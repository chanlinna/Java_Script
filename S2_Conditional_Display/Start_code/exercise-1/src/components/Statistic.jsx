export default function Statistic ({courseResults}){
    
    return(
        <div className="statistic">
            <div>
                <p>AVERAGE</p>
                <h2>{(courseResults.reduce((sum, result) => sum + result.score, 0) /courseResults.length).toFixed(0)}</h2>
            </div>
            <div>
                <p>MIN</p>
                <h2>{Math.min(...courseResults.map(result => result.score))}</h2>
            </div>
            <div>
                <p>MAX</p>
                <h2>{Math.max(...courseResults.map(result => result.score))}</h2>
            </div>
        </div>
    );
}