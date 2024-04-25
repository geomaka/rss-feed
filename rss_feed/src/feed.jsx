const Feed= function ({title, link, date}){
    let formatted = {date:"numeric", month:"long",year:"numeric"}
    let articleDate = new Date(date).toLocaleDateString("en-GB",formatted)
    return (
        <>
            <a href={link} target="_blank" rel="noopener noreferrer"
            className="hover:opacity-70 hover:text-orange-500"> 
            <h3  className="text-xl mb-l">{title}</h3>
            <p>{articleDate}</p>
            </a>
            <hr/>
        </>
    )
}

export default Feed;