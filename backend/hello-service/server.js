const http = require("http");
const os = require("os");

const PORT = process.env.SERVER_PORT || 8080;
const VERSION = process.env.APP_VERSION || "dev";

const server = http.createServer((req, res) => {
  const path = req.url.split("?")[0];
  res.setHeader("Content-Type", "application/json");

  if (path === "/hello/health") {
    res.writeHead(200);
    return res.end(JSON.stringify({ status: "UP" }));
  }
  if (path === "/hello" || path.startsWith("/hello/")) {
    res.writeHead(200);
    return res.end(
      JSON.stringify({ message: "Xin chao tu cah-learn", version: VERSION, pod: os.hostname() })
    );
  }
  res.writeHead(404);
  res.end(JSON.stringify({ error: "not found" }));
});

server.listen(PORT, () => console.log(`hello-service chay o cong ${PORT}, phien ban ${VERSION}`));

process.on("SIGTERM", () => server.close(() => process.exit(0)));
