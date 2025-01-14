import * as dotenv from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = process.env.DISCORD_BOT_TOKEN;
if (!TOKEN) {
  throw new Error('DISCORD_BOT_TOKEN is not set in the .env file');
}

client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return; 

  if (message.content === '!ping') {
    message.reply('Pong! 🏓');
  } else if (message.content === '!hello') {
    message.reply('Hello there! 👋');
  }
});

client.login(TOKEN).catch((error) => {
  console.error('Failed to log in:', error);
});
