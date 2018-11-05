"use strict";

const electron = require("electron");
const path = require("path");
const url = require("url");

electron.app.on("ready", () => {

	let window = new electron.BrowserWindow({show: false});

	window.loadURL(url.format({
		protocol: "file:",
		pathname: path.join(__dirname, "page.html"),
		slashes: true
	}));

	window.openDevTools();
});

electron.app.on("window-all-closed", () => {
	electron.app.quit();
});
