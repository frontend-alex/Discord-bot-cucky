import { greetingMessage, randomWords } from "../constants/Data";

export const config = {
    botToken: process.env.BOT_TOKEN || '',
    timeLimit: 20000, 
    words: randomWords, 
};
