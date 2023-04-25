

const ListItem = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.item}</p>
            {props.priority}
        </div>
    )
}

export default ListItem