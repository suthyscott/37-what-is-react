

const ListItem = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.item}</p>
        </div>
    )
}

export default ListItem