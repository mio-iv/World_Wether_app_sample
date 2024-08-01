// Appコンポーネント
import { useState } from "react"
import Title from "./components/Title"
import Form from "./components/Form"
import Results from "./components/Results"

type ResultsState = { //型の指定 （ここではカンマはいらないっぽい）
  country: string
  cityName: string
  temperature: string
  conditionText: string
  icon: string
}

const App = () => {
  const [city, setCity] = useState<string>("")  //入力内容を保存する場所 <string>はcityの型を指定

  const [results, setResults] = useState<ResultsState>({  //結果を保存する場所。入れ子にしておく
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  })

  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()  //formを送信する時はdefaultでリロードする。それを止める
      fetch(`https://api.weatherapi.com/v1/current.json?key=f2628f941c07493fb6f162944242806&q=${city}$&aqi=no`) // fetch: APIに送る
      .then(res => res.json())  // 時系列で物事を説明するとき。APIにデータを送った後の処理  res: responseデータ
      // .then(data => console.log(data))z
      //ここではjsonに変換されたデータはdataに入っている
      .then(data => {
        setResults({
          //setResultsにdataの中身から取り出した値を入れ子でresultsに書き込む。
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon
        })
        console.log(data)
      })
  }
  // return以降が表示内容
  return (
    <div className="wrapper">
      <div className="container">
        <Title/>
        <Form setCity={setCity} getWeather={getWeather}/>
        <Results results={results}/>
      </div>
    </div>
  )
}

export default App