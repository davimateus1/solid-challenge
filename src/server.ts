import swaggerUi from "swagger-ui-express";

import { app } from ".";
import swaggerSetup from "./swaggerSetup.json";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSetup));

app.listen(3333, () => console.log("Server is running!"));
