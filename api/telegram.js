export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, message } = req.body || {};

  if (!name || !String(name).trim()) {
    res.status(400).json({ error: "Name is required" });
    return;
  }

  if (!message || !String(message).trim()) {
    res.status(400).json({ error: "Message is required" });
    return;
  }

  const token = process.env.BOT_TOKEN;
  const chatId = process.env.CHAT_ID;

  if (!token || !chatId) {
    res.status(500).json({ error: "Server env not configured" });
    return;
  }

  const text = `Ism: ${String(name).trim()}\nXabar: ${String(message).trim()}`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      res.status(500).json({ error: errorText || "Telegram error" });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: "Network error" });
  }
}
