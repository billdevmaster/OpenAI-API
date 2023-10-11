import OpenAI from "openai";
import config from '../config.js';

const openai = new OpenAI({
  apiKey: config.AI_API_KEY,
});

const getResponse = async (req, res) => {
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });
  
    return res.status(200).json(chatCompletion);
  } catch (e) {
    console.log(e)
  }
}

const postText = async (req, res) => {
  try {
    const { history } = req.body;
    console.log("start")
    const chatCompletion = await openai.chat.completions.create({
      messages: history,
      model: "gpt-3.5-turbo",
    });
    console.log("end")
    return res.status(200).json({ content: chatCompletion.choices[0].message.content });
  } catch (e) { 
    console.log(e)
  }
}

const postAudio = async (req, res) => {
  try {

    return res.status(200).json({});
  } catch (e) { 
    console.log(e)
  }
}

export default {
  getResponse,
  postText,
  postAudio
};