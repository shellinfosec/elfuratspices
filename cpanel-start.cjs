// cPanel Phusion Passenger wrapper for ES Modules
// Passenger requires a CommonJS startup file, but Nitro outputs an ES Module (.mjs).
// This wrapper dynamically imports the ES Module server so Passenger can run it.

async function startServer() {
  // Load the Nitro server
  await import('./.output/server/index.mjs');
}

startServer().catch(err => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
