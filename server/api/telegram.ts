import { sendErrorToTelegram } from "../../utils/telegram";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { errorMessage } = body;

  if (!errorMessage) {
    return { status: 400, message: "errorMessage is required" };
  }

  await sendErrorToTelegram(errorMessage);
  return { status: 200, message: "Message sent to Telegram" };
});
