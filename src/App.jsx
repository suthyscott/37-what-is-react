import "./App.css"
import ListItem from "./ListItem"
import { useState } from "react"

const App = () => {
    const [itemList, setItemList] = useState(["change oil","clean truck","sweep garage","wash motorcycle","organize"])

    console.log(itemList)

    return (
        <div className="App">
            This is app.js
            <ListItem item={itemList[0]} />
            <ListItem item={itemList[1]} />
            <ListItem item={itemList[2]} />
            <ListItem item={itemList[3]} />
            <ListItem item={itemList[4]} />
        </div>
    )
}

export default App
