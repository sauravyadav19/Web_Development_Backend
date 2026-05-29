import Card from "./components/Card"
import "./App.css"
export default function App(){

    return(
        <div>
            <center><h1>House Targaygren</h1></center>
            <div className="cardMainContainer">
                <Card title={"this is title"} img={"https://awoiaf.westeros.org/images/a/a9/Rhaenyra.jpg"} info={"info "}/>
                <Card title={"this is title"} img={"https://awoiaf.westeros.org/images/a/a9/Rhaenyra.jpg"} info={"info "}/>
                <Card title={"this is title"} img={"https://awoiaf.westeros.org/images/a/a9/Rhaenyra.jpg"} info={"info "}/>
                <Card title={"this is title"} img={"https://awoiaf.westeros.org/images/a/a9/Rhaenyra.jpg"} info={"info "}/>
            </div>
        </div>
    )

}