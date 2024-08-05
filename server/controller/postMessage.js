import Message from "../model/messageModel.js";
export const postMessgae = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const messages = new Message({
      name,
      email,

      message,
    });
    await messages.save();
    res.status(200).send("Successfully sent the message...");
  } catch (error) {
    res.status(500).json({ message: "error sending the message" });
  }
};
