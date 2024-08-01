# World_Wether_app_sample

<details><summary>memo</summary><div>


自分で作ったタグの頭文字は大文字にすること。
大文字で始めると、普通のHTMLタグではなく、カスタムタグ（Reactコンポーネント）であることをReactに伝えられる。

Reactの中で、class属性は、className=とかく。
    <h1 className="test">こんにちは</h1>
    .test {
        letter-spacing: 30px;
        color: red;
    }


input：入力フォーム、button: ボタン

データの送り先を作る必要がある
入力されたデータを一時的に保管する場所が「state」
useStateは書く場所が決まっている
    const [city, setCity] = useState<string>("")
    cityが保管場所、setCityがデータの操作用の仕組み（関数？）
    ""は初期データがブランクだということ
    <string>は型の指定

    https://api.weatherapi.com/v1/current.json?key=f2628f941c07493fb6f162944242806&q=London&aqi=no

onChange={e => props.setCity(e.target.value)}
    e: イベントパラメータ（eveやeventでも可。動きは同じ）
    inputに関する情報がたくさん詰まっている
    e.target.value で、入力されている値にアクセスできる
    setCityに渡すと、cityに格納される

return内では、{}で挟むと、javascriptのコードを使える。{city}

fetch: APIへ送る
.then（繋げてかける）：そして、その後でと
res => res.json()   jsonに変換

formのデータをresultsに送るには、Appを経由しておくる
Reactコンポーネントタグに、 testSetCity={setCity} とすることで、props.testSetCityでアクセスできる
(慣習的に、同じ名前を使う)


ロジカルオペレーター
    「&&」の左が存在している場合にのみ、「&&」右の処理が実行される
    例：2 < 4 && <p>正しいですか？</p>

テンプレートリテラル
    文字列の中にJavaScriptのコードを入れる
    文字列全体はバッククオート、${}$でコードを入れる

onclickをonSubmitに変えて、formの中に書く。

App.tsxのgetWeatherの引数eの型、
React.FormEvent<HTMLFormElement>
は、Reactが用意しているFrom（イベント）に関する特別な型



</div></details>