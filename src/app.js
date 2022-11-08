import express from "express";
import productsRouter from "./routes/products.routes.js";
import indexRoutes from "./routes/index.routes.js";



const app = express();
app.use(express.json()); //Con express.json() el servidor ya puede interpretar objetos json

app.use(indexRoutes);
app.use("/api", productsRouter);

app.use((req, res, next) => {//para dirigir al mensaje no encontrado cuando se visista una ruta que no existe en el servidor
  res.status(404).json({
    message: "Endpoint not found",
  });
});

export default app;