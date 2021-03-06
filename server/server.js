const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");


app.use(express.json());
app.use(cors());

app.use(cors());

//importing the routes
const departementRoutes = require("./api/routes/departements");
const professeurRoutes = require("./api/routes/professeurs");
const modulesRoutes = require("./api/routes/modules");
const matieresRoutes = require("./api/routes/matieres");
const filieresRoutes = require("./api/routes/filieres");
const activitesRoutes = require("./api/routes/activitepedagogiques");
const groupesRoutes = require("./api/routes/groupe");
require("./api/routes/auth.routes")(app);
require("./api/routes/user.routes")(app);

app.use("/departements", departementRoutes);
app.use("/professeurs", professeurRoutes);
app.use("/modules", modulesRoutes);
app.use("/matieres", matieresRoutes);
app.use("/filieres", filieresRoutes);
app.use("/activitepedagogiques", activitesRoutes);
app.use("/groupes", groupesRoutes);
//app.use("/api", [userRoutes, authRoutes]);

//not found route
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
