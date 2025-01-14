import { GuildMember, TextChannel } from 'discord.js';
import { greetingMessage } from '../constants/Data';

export class GreetingService {
  private static channelId: string | null = null;

  static setChannel(channelId: string) {
    this.channelId = channelId;
  }

  static async sendGreeting(member: GuildMember) {
    if (!this.channelId) {
      console.error('No greeting channel ID set.');
      return;
    }

    const channel = member.guild.channels.cache.get(this.channelId) as TextChannel;

    if (!channel) {
      console.error('Greeting channel not found.');
      return;
    }

    await channel.send(greetingMessage(member));
  }
}
