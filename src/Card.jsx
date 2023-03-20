
function Card(props)
{
    console.log(props);
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="random Images" /> 
                   <div className="card_Info">
                    <span className="card_title">{props.title}</span>
                    <h3 className="bio">{props.bio}</h3>
                    <a href={props.link} target="_blnk"><button className="btn">Watch Now</button></a>
                </div>
            </div>
        </div>
        </>
    )
}

 export default Card;