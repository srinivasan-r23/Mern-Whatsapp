// require or importing
import express, { Application, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Messages, { IMessage } from "./dbMessages";
import Pusher from "pusher";
import cors from "cors";

//app config
const app: Application = express();
const port: string | 9000 = process.env.PORT || 9000;

const pusher: Pusher = new Pusher({
  appId: "1204107",
  key: "be5e8946a51a1c8e24fc",
  secret: "9fff7c10f48c66635421",
  cluster: "ap2",
  useTLS: true,
});

//middlewares
app.use(express.json());
app.use(cors());

//DB config
const connection_url: string =
  "mongodb+srv://admin:3bmwgvUaXBiT3tH7@cluster0.ggbbz.mongodb.net/whatsappclonedb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//???

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");

  const msgCollection: mongoose.Collection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error Triggering Pusher");
    }
  });
});
//API Route
app.get("/", (req: Request, res: Response) =>
  res.status(200).send("hello world")
);

app.get("/messages/sync", (req: Request, res: Response) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req: Request, res: Response) => {
  const dbMessage: IMessage = req.body;
  Messages.create(dbMessage, (err: any, data: any) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listener
app.listen(port, () => console.log(`Listen on localhost:${port}`));
