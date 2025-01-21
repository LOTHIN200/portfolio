export async function sendErrorToTelegram(errorMessage: string) {
  const botToken = "7722042806:AAFHfKS_lFw9PvMyg2cu5We08Y8P9j5t1hU"; //process.env.TELEGRAM_BOT_TOKEN;
  const chatId = "1019112810"; //process.env.TELEGRAM_CHAT_ID;

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
