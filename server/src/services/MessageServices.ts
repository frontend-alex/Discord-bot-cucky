import { config } from "../config/config";
import { greetingMessage } from "../constants/Data";
import { timeUtils } from "../utils/timeUtils";
import { GuildMember, Message, TextChannel } from "discord.js";

let messageCount = 0;
let messageTimestamp = Date.now();

const words = config.words;
const timeLimit = config.timeLimit;

export const messageService = {
  randomMessage: async (message: Message) => {
    const currentTime = Date.now();

    if (timeUtils.isTimeExceeded(messageTimestamp, timeLimit)) {
      messageCount = 0;
      messageTimestamp = currentTime;
    }

    messageCount++;

    if (messageCount >= 15) {
      const randomWord = words[Math.floor(Math.random() * words.length)];

      if (message.channel instanceof TextChannel) {
        message.channel.send(`@everyone ${randomWord}`);
        messageCount = 0;
      }
    }
  },
  greetMessage: async (member: GuildMember) => {
    if(member.user.bot) return;

    const defaultChannel = member.guild.systemChannel; 
    if (defaultChannel) {
        await defaultChannel.send(greetingMessage(member));
    }
  },
};
