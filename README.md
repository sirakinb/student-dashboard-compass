# Customer‑Success Manager (CSM) Dashboard – Rapid Product Dev Trial

A three‑hour MVP slice for a multi‑role coaching platform.  
This repo focuses solely on the **CSM dashboard**: surfacing student status, logging interventions, and proving a live Supabase connection.

---

## 🚀 What's Working

| Feature | State | Notes |
|---------|-------|-------|
| **Authentication** | ✅ | Email + password via Supabase Auth (sign‑up, email confirmation, login/logout) |
| **Dashboard layout** | ✅ | Three risk columns (On Track / Needs Attention / At Risk) rendered with Tailwind grid |
| **Status change UI** | ✅ | Changing a student's risk instantly re‑files the card (local state for now) |
| **Intervention log** | ✅ | Connected to Supabase • CRUD for interventions (email, call, 1‑on‑1, other) • History list auto‑refreshes |
| **Responsive design** | ✅ | Modern, minimal UI scaffolded with Lovable.dev |
| **CI‑less deploy** | ✅ | Vercel preview on every push via GitHub integration |

---

## 🧪 Stubbed / Mocked

* Student & coach records come from `data/mockStudents.ts` (JSON).
* "Contact" button opens a placeholder modal—no outbound email/SMS yet.
* Coach & Student dashboards exist only as empty routes.
* Risk‑change persists in local state only (no DB write).

---

## ⏩ If I Had More Time

1. Replace mock student/coach data with Supabase tables and RLS.
2. Flesh out **Student** and **Coach** dashboards; wire their actions to drive CSM alerts.
3. Real‑time updates with Supabase `realtime` channel (no refresh needed).
4. Role‑based auth guard (Admin / Coach / CSM / Student).
5. Slack & email notifications when students slip to "At Risk".
6. Cypress smoke tests + GitHub Actions CI.
7. Production‑grade error boundaries and toast feedback.

---

## 🛠️ Tools & Why

| Tool | Role | Reason |
|------|------|--------|
| **Lovable.dev** | Rapid scaffold | AI‑generated Next.js + Tailwind skeleton in minutes |
| **Cursor.dev** | Pair‑programming IDE | Fast refactors, hook generation, and TypeScript fixes |
| **Supabase** | Auth + Postgres + Storage | Production‑ready backend, instant REST & Realtime APIs |
| **Next.js 14 + React** | Front‑end framework | File‑based routing, server actions ready for future scale |
| **Tailwind CSS** | Styling | Utility‑first, design‑system‑agnostic, rapid tweaks |
| **Vercel** | Preview & hosting | Zero‑config deploys tied to GitHub commits |
| **GitHub** | Version control | Source of truth, PR review, automatic Vercel hooks |

---

## ⚙️ Getting Started (Local)

```bash
# 1. Clone
git clone https://github.com/sirakinb/student-dashboard-compass.git
cd student-dashboard-compass

# 2. Install deps
npm install

# 3. Env vars
cp .env.example .env.local
#  └─ add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY

# 4. Dev server
npm run dev
```

## Project info

**URL**: https://lovable.dev/projects/4fc2e5c1-50fe-4e85-8641-2788b2f107a6

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/4fc2e5c1-50fe-4e85-8641-2788b2f107a6) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/4fc2e5c1-50fe-4e85-8641-2788b2f107a6) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
