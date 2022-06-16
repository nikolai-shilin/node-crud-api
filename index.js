import express from "express";
import "dotenv/config";
import { userRoter } from './routers/users.js';
import { notFoundController } from "./middleware/404.js";
import { internalServerErrorController } from "./middleware/500.js";

const app = new express();
app.use(express.json());
app.use('/api/users', userRoter);

// error handling - has to be last
app.use(internalServerErrorController);
app.use(notFoundController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});
