import "./App.css"
import ListItem from "./ListItem"
import { useState } from "react"

const App = () => {
    const [itemList, setItemList] = useState(["change oil","clean truck","sweep garage","wash motorcycle","organize", 'clean my room', 'beat kyle at ping pong'])

    console.log(itemList)

    // Rendering a dynamic state value using a for loop + variable
    // const itemsDisplay = []
    // for(let i = 0; i < itemList.length; i++){
    //     itemsDisplay.push(<ListItem item={itemList[i]} />)
    // }
    // console.log(itemsDisplay)


    // Rendering a dynamic state value using a .map + variable
    // let itemsDisplay = itemList.map((itemValue, index) => {
    //     return <ListItem item={itemValue} key={index}/>
    // })
    return (
        <div className="App">
            This is app.js
            {/* Displaying state values with hard coded values */}
            {/* <ListItem item={itemList[0]} />
            <ListItem item={itemList[1]} />
            <ListItem item={itemList[2]} />
            <ListItem item={itemList[3]} />
            <ListItem item={itemList[4]} /> */}

            {/* Displaying state values inline with .map */}
            {/* {itemList.map((itemValue, index) => {
                return <ListItem item={itemValue} key={index}/>
            })} */}

            {/* Displaying state values inline w/implicit return thru arrow function*/}
            {itemList.map((itemValue, index) => <ListItem item={itemValue} key={index}/>)}

            {/* the display variable from the for loop or .map above the return */}
            {/* {itemsDisplay} */}
        </div>
    )
}

export default App
