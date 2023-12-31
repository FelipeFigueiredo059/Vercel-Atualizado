const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const database = require("./models/schemas");
const userRoute = require("./views/routes/User");
const passwordRoute = require("./views/routes/Password");
const employeeRoute = require("./views/routes/Employee");
const courseRoute = require("./views/routes/Course");
const PORT = process.env.PORT || 3000;

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/auth", userRoute);
app.use("/api/password-reset", passwordRoute);
app.use("/employeeinfo", employeeRoute);
app.use("/course", courseRoute);

database.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Servidor está rodando na porta 8080");
  });
});
