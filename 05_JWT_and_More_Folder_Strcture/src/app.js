//Step-1 import Express
import express from 'express';
import route from './routes/user.route.js';
// Step 2: Instantiate Express
const app = express()

// Wiring our routes defined in other file (/routes/user.route.js), so our server knows about them and can server them.
// every route that is defined in 'route' will be prefixed with '/api'
// so the url would look like something this /api/ + whatever route we have defined in our router so /api<coming from this file>/user<coming from route>
app.use("/api", route)
//Step 3: Export the Express Instance for use in other files.
export default app;