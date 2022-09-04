const express = require("express");
const cors = require("cors");
const servidor = express();

servidor.use(express.json());
servidor.use(cors());

const InfoRouters = require("./routers/InfoRouters");
const TerminalRouters = require("./routers/TerminalRouters");

servidor.use("/api/InfoSac", InfoRouters);
servidor.use("/api/TerminalCEP", TerminalRouters);

servidor.listen(3000);