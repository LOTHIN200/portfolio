export async function sendErrorToTelegram(errorMessage: string) {
  // const botToken = process.env.TELEGRAM_BOT_TOKEN;
  // const chatId = process.env.TELEGRAM_CHAT_ID;
  const botToken = process.env.NUXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.NUXT_PUBLIC_TELEGRAM_CHAT_ID;
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const payload = {
    chat_id: chatId,
    text: `Error: ${errorMessage}`,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Failed to send message to Telegram");
    }
  } catch (err) {
    console.error("Error while sending message to Telegram:", err);
  }
}
