import express from "express";
import { initApp } from "./src/modules/app.router.js";

const PORT = process.env.PORT || 3000;
const app = express();

initApp(app, express);

app.listen(PORT, () => {
  console.log(`server listening on port 3000 ${PORT}`);
});
