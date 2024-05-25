import express from "express";
import cors from "cors";
import routes from "./src/route/routes.js";

const app = express();

app.use(cors());
app.use(express.json());

routes.forEach((route) => {
    app.use(route.path, route.route);
})

app.listen(5000, () => {
    console.log("Server is running on port 3000");
});