const Feed= function ({title, link, date}){
 
    return (
        <>
            <a href={link} target="_blank" rel="noopener noreferrer"
            className="hover:opacity-70 hover:text-orange-500"> 
            <h3  className="text-xl mb-l">{title}</h3>
            <p>{date}</p>
            </a>
            <hr/>
        </>
    )
}

export default Feed;