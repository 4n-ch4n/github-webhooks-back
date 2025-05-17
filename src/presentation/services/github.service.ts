import { GithubIssuePayload, GithubStarPayload } from "../../interfaces";

export class GitHubService {
  onStar(payload: GithubStarPayload): string {
    const { action, sender, repository, starred_at } = payload;

    return `User ${sender.login} ${action} starred the repository ${repository.full_name} at ${starred_at}`;
  }

  onIssue(payload: GithubIssuePayload): string {
    const { action, issue } = payload;

    if (action === 'opened') {
      return `An issue was opened: ${issue.title}`;
    }

    if (action === 'closed') {
      return `An issue was closed by: ${issue.user.login}`;
    }

    if (action === 'reopened') {
      return `An issue was closed reopened: ${issue.user.login}`;
    }
 
    return `Unknown action ${action}`;
      
  }
}