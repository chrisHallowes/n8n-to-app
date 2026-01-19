# n8n to App

Turn n8n workflows into deployable Next.js web apps.

## Tools

| Tool | Purpose |
|------|---------|
| n8n MCP | View/edit workflows, node configs |
| GitHub MCP | Push code to repositories |
| `/n8n` | n8n workflow skill |
| `/frontend` | Frontend designer skill |

## Workflow

### Phase 1: Optimize Workflow
Use n8n MCP + `/n8n` skill to ensure:
- [ ] Proper trigger setup (webhook/manual/schedule)
- [ ] Input validation
- [ ] Error handling with HTTP status codes
- [ ] Standardized response format (see below)

### Phase 2: Build Frontend
Use `/frontend` skill:
- Next.js + React + Tailwind CSS
- Start from `templates/basic-app/` or fresh
- Test locally before deployment

### Phase 3: Deploy
1. Create GitHub repo via MCP
2. Push code
3. Connect to Vercel
4. Future updates: push to GitHub → auto-deploys

## Standards

### Response Format
All workflows should return:
```json
{
  "success": true,
  "data": { },
  "error": null
}
```

### Project Structure
```
n8n to app/
├── claude.md
├── templates/
│   └── basic-app/       # Starter template
└── apps/                # Individual app repos live here
```

## Notes
- Each app gets its own GitHub repo
- n8n instance: self-hosted
- Styling: Tailwind CSS
