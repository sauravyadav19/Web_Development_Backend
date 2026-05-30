// Bring the instantiate version of your server from your "app.js" file.
import app from './src/app.js'

// make your server listen for incoming requests on port 5173
app.listen(5173,()=>{
    console.log("Listening on Port 5173 for incoming request....");
})