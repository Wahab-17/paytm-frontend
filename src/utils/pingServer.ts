export function startServerPing(interval = 4 * 60 * 1000) {
  const url = "https://paytm-backend-1-tg54.onrender.com/ping";

  setInterval(() => {
    fetch(url)
      .then((res) => console.log("✅ Pinged server:", res.status))
      .catch((err) => console.warn("⚠️ Ping failed:", err.message));
  }, interval);
}
