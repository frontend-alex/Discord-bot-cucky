import * as dotenv from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';
import { greetNewUser, messageController } from './controllers/MessageController';
import { GreetingService } from './services/GreetingServices';

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = process.env.DISCORD_BOT_TOKEN;
if (!TOKEN) {
  throw new Error('DISCORD_BOT_TOKEN is not set in the .env file');
}

const GREETING_CHANNEL_ID = process.env.GREETING_CHANNEL_ID;
if (GREETING_CHANNEL_ID) {
  GreetingService.setChannel(GREETING_CHANNEL_ID);  
}


client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('guildMemberAdd', (member) => greetNewUser(member));
client.on('messageCreate', messageController);

client.login(TOKEN).catch((error) => console.error('Failed to log in:', error));
