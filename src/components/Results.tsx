//Resultsコンポーネント
type ResultsProps = {
    results: {  //resultsという名前が付いていて1階層深いので型指定はデータ構造を同じにする。
        country: string
        cityName: string
        temperature: string
        conditionText: string
        icon: string
    }
}

const Results = (props: ResultsProps) => {
    return (
        <div>
            {props.results.country && 
            /* //ロジカルオペレータ */
                <div>
                    <div className="results-country">{props.results.country}</div>
                    <div className="results-city">{props.results.cityName}</div>
                    <div className="results-temp">{props.results.temperature} <span>℃</span></div>
                    <div className="results-condition">
                        <img src={props.results.icon} alt="icon"/>
                        <span>{props.results.conditionText}</span>
                    </div>
                </div>
                }
        </div>
        
    )
}

export default Results