const { PeerServer } = require("peer");

const peerServer = PeerServer({ port: 9090, path: "/myapp" });