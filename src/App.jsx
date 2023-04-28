import "./App.css"
import ListItem from "./ListItem"
import { useState } from "react"

const App = () => {
    const [itemList, setItemList] = useState(["play ping pong", "workout"])
    const [inputVal, setInputVal] = useState("")

    const addItemToList = e => {
        e.preventDefault()
        setItemList([...itemList, inputVal])
        setInputVal("")
    }

    const removeItemFromList = index => {
        itemList.splice(index, 1)
        setItemList([...itemList])
    }

    const editItem = (index, newVal) => {
        console.log(index, newVal)
        itemList.splice(index, 1, newVal)
        setItemList([...itemList])
    }

    return (
        <div className="App">
            <h1>To Do List</h1>

            <form onSubmit={e => addItemToList(e)}>
                <input
                    placeholder="Write your new to do item here"
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                />
                <button>Add</button>
            </form>
            {/* Displaying state values inline w/implicit return thru arrow function*/}
            {itemList.map((itemValue, index) => (
                <ListItem
                    item={itemValue}
                    key={index}
                    index={index}
                    removeItemFromList={removeItemFromList}
                    editItem={editItem}
                />
            ))}
        </div>
    )
}

export default App

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

{
    /* Displaying state values with hard coded values */
}
{
    /* <ListItem item={itemList[0]} />
            <ListItem item={itemList[1]} />
            <ListItem item={itemList[2]} />
            <ListItem item={itemList[3]} />
        <ListItem item={itemList[4]} /> */
}

{
    /* Displaying state values inline with .map */
}
{
    /* {itemList.map((itemValue, index) => {
                return <ListItem item={itemValue} key={index}/>
            })} */
}

{
    /* the display variable from the for loop or .map above the return */
}
{
    /* {itemsDisplay} */
}
