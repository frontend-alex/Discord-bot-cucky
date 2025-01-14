import { GuildMember, Message } from 'discord.js';
import { messageService } from '../services/MessageServices';
import { GreetingService } from '../services/GreetingServices';

export const messageController = async (message: Message) => {
    if (message.author.bot) return; 

    await messageService.randomMessage(message);
};

export const greetNewUser = async (member: GuildMember) => {
    await GreetingService.sendGreeting(member);  
  };