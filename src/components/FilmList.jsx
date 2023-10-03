import Film from "./Film"

const FilmList = ({films}) => {

    const filmList = films.map((film) => {
        return (
            <ul>
                <li>
                    <Film key={film.id} name={film.name} url={film.url} className="film"/>
                </li>
            </ul>
        )
    })

    return (
        <>
            {filmList}
        </>
    )
}

export default FilmList