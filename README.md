# GitHub Webhooks Project

This project demonstrates how to use GitHub webhooks with Node.js.

## Features

- Receive and process GitHub webhook events (`star`, `issues`)
- Forward event notifications to Discord via webhook
- Easily configurable via environment variables

## Getting Started

### Installation

```bash
npm install
```

### Configuration

1. Copy `.env.template` to `.env` and fill in the required values:
    ```
    PORT=3000
    DISCORD_WEBHOOK_URL=your_discord_webhook_url
    DISCORD_IMAGE_URL=your_image_url
    ```
    - `PORT`: The port your server will listen on.
    - `DISCORD_WEBHOOK_URL`: Your Discord channel's webhook URL.
    - `DISCORD_IMAGE_URL`: (Optional) An image URL to include in Discord notifications.

2. In your GitHub repository, set up a webhook pointing to your server:
    ```
    http://your-server-domain:PORT/api/github
    ```
    - Recommended events: `star`, `issues`
    - Content type: `application/json`

### Running the Server

```bash
npm run dev
```

## Usage

- The server listens for GitHub webhook events at `/api/github`.
- Supported events:
  - **star**: Notifies when someone stars the repository.
  - **issues**: Notifies when issues are opened, closed, or reopened.
- Notifications are sent to your configured Discord channel.

## Project Structure

- `src/app.ts`: Entry point, sets up Express server and routes.
- `src/presentation/github/controller.ts`: Handles incoming webhook requests.
- `src/presentation/services/github.service.ts`: Formats GitHub event messages.
- `src/presentation/services/discord.service.ts`: Sends messages to Discord.
- `src/interfaces/`: TypeScript interfaces for GitHub payloads.
- `src