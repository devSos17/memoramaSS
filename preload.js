const test = require("./models/test.js");
const { contextBridge } = require("electron");

const testQuery = contextBridge.exposeInMainWorld("api", {
  test: test.getAll,
});
