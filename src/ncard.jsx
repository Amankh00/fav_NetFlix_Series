import Card from "./Card";
import Tdata from "./Tdata";

function ncard(val)
{
    return(
        <Card 
        imgsrc = {val.imgsrc}
        title = {val.title}
        bio = {val.bio}
        link = {val.link}
       />
    )
}

export default ncard;