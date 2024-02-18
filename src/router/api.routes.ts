import { Router } from 'express';

const api_routes = Router();

api_routes.get("/", (req, res) => {
  res.json({
    message: "all ok",
  });
});

export default api_routes;
