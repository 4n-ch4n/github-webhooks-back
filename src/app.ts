import express from 'express';
import { envs } from './config';
import { GithubController } from './presentation/github/controller';
import { GitHubService } from './presentation/services/github.service';
import { DiscordService } from './presentation/services/discord.service';

(() => {
  main();
})();

function main() {
  const app = express();

  const githubService = new GitHubService();
  const discordService = new DiscordService();
  const controller = new GithubController(githubService, discordService);

  app.use(express.json());

  app.post('/api/github', controller.webhookHandler);

  app.listen(envs.PORT, () => {
    console.log(`App runing on port ${envs.PORT}`);
  });
}