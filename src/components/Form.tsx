//Formコンポーネント

//型の指定
type FormProps = {
    // FormPropsは型定義の名前（stringなど）
    setCity: React.Dispatch<React.SetStateAction<string>>
    getWeather: (e: React.FormEvent<HTMLFormElement>) => void    //Form setCity={setCity} getWeather={getWeather}/>でチェックできる
}

const Form = (props: FormProps) => {

    return (
        <form onSubmit={props.getWeather}>
            
            <input 
                type="text" 
                name="city" 
                placeholder="都市名"
                onChange={e => props.setCity(e.target.value)}
            />
            
            {/* onClick で getWeather 関数呼び出し */}
            <button type="submit">
                Get Weather
            </button>

        </form>
    )
}

export default Form