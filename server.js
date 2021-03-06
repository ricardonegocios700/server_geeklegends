const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  users: 640,
  groups: 640,
  multimedias: 660,
  stores: 660,
  posts: 660,
  messages: 660,
  myStores: 660,
  myMultimedias: 660,
  myPersonas: 660,
  talk: 660,
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
