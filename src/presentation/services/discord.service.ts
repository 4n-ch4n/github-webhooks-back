import { envs } from "../../config";

export class DiscordService {
  private readonly discordWebhookUrl: string = envs.DISCORD_WEBHOOK_URL;
  private readonly discordImageUrl: string = envs.DISCORD_IMAGE_URL;

  async notify(message: string) {
    const body = {
      content: message,
      embeds: [
        {
          image: { url: this.discordImageUrl }
        }
      ]
    };

    const response = await fetch(this.discordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.log('Error sending message to Discord:', response.statusText)
      return false;
    };

    return true;
  }
}