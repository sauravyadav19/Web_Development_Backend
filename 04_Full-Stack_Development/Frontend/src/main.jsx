import {createRoot} from "react-dom/client"
import App from "./App"
import "./index.css"

// Finding an element that has Id of `root` in index.html and selecting it
// and then using `createRoot` function and making this as our root element in react
const root = createRoot(document.getElementById('root'))
// the `root` will then render a component `App` inside it.
root.render(<App/>)
