

const ListItem = (props) => {
  
    return (
        <div>
            <p>{props.item}</p>
            <button onClick={() => props.removeItemFromList(props.index)}>Remove</button>
        </div>
    )
}

export default ListItem