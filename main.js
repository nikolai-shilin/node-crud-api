import "dotenv/config";
import { app } from "./app.js";

const start = (port) => {
  try {
    app.listen(port, () => {
      console.log(`Server listening on port:${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

const PORT = process.env.PORT || 3000;
start(PORT);
