const Film = ({name, url}) => {
    return (
        <>
            <a href={url} id="link">{name}</a>
        </>
    )
}

export default Film