import express from "express";
import controllers from "./controller"

const app = express();
const PORT = process.env.PORT || 3000;

controllers.forEach((controller) => {
    app.use(controller.path, controller.router);
})

if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

export default app;