import "./Card.css"
export default function Note({title,img,info}){
    return(
        <div className="cardContainer">
            <p id="title">{title}</p>
            <div id="descriptionContainer">
                <img id="descriptionImage" src={img}/>
                <p id="descriptionInfo">{info}</p>

            </div>
        </div>
    )    
}