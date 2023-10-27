let fs = require('fs');
let liveServer = require("live-server");
const source = fs.readdirSync(`${process.cwd()}/docs/my-chazz/`, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
const lastVersionDoc = source.pop();
let params = {
    port: 8080,
    root: `docs/my-chazz/${lastVersionDoc}`,
    open: true,
    file: `docs/my-chazz/${lastVersionDoc}`,
    wait: 1000,
    mount: [`docs/my-chazz/${lastVersionDoc}`],
};

liveServer.start(params);