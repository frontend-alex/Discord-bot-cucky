![cuck bot image](https://steamuserimages-a.akamaihd.net/ugc/2056511339670390691/9E4ABB4F8E52227E25B1BB42FECC28ACAD8FFA3C/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true "Cuck Bot")

# Cuck Bot

**Cuck Bot** is a simple Discord bot built with **TypeScript** and **discord.js**. It is designed to greet new members joining your server and respond to specific messages based on pre-set logic. The bot also allows for customization of the greeting message channel and the messages it sends.

## Features
- **Welcome New Users**: When a new user joins the server, Cuck Bot sends a greeting message to a specified channel.
- **Customizable Greeting Channel**: The channel for greeting new users can be set via the bot’s configuration.
- **Message Handling**: Cuck Bot can be extended to handle different types of user interactions, such as responding to specific messages or commands.

## How it Works
- The bot listens to the `guildMemberAdd` event to detect when a new member joins.
- Once a new member joins, the bot sends a greeting message to the pre-configured greeting channel.
- The bot can be further expanded to handle different types of user interactions, such as responding to specific messages or commands.

## Setup Instructions

### Prerequisites
1. Node.js installed on your system.
2. A Discord bot token (you can create a bot and get the token via the Discord Developer Portal).
3. A Discord server where you can invite the bot.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cuck-bot.git
