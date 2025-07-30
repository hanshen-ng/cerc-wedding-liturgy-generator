import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./util.js";
import sqlite3 from "sqlite3";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({});

  const db = new sqlite3.Database("sqlite/cerc-wedding-liturgy-generator.db");
  db.run(`
  CREATE TABLE IF NOT EXISTS templates (
    id INTEGER AUTO_INCREMENT NOT NULL,
    template_name VARCHAR(100) NOT NULL,
    text TEXT,
    PRIMARY KEY (id)
  )
  `);

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }
});
