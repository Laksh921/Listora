# 📋 Listora – Task Management App

**Listora** is a modern and lightweight task manager built with React, TypeScript, and Supabase. It helps users manage to-dos efficiently with a minimal and responsive UI.

---

## ✨ Features

- ✅ Create, edit, and delete tasks
- 🗂️ Filter tasks based on categories
- ☁️ Real-time data sync with Supabase
- ⚡ Lightning-fast development with Vite
- 🎨 Clean and responsive design

---

## 🛠 Tech Stack

| Layer        | Tech Used              |
|--------------|------------------------|
| Frontend     | React, TypeScript      |
| Build Tool   | Vite                   |
| Backend      | Supabase (BaaS)        |
| Styling      | CSS                    |
| Package Mgr  | npm                    |

---

## ⚙️ Project Setup (Full Instructions)

### 1. 📦 Clone the Repository

```bash
git clone https://github.com/your-username/Listora.git
cd Listora
````
### 2. 📁 Install Dependencies

```bash
Make sure Node.js and npm are installed. Then run:

bash
Copy
Edit
npm install
```
### 3. 🧪 Setup Supabase
   
```bash
Go to https://supabase.com and sign in.

Create a new project.

In your Supabase project:

Go to Settings > API

Copy the Project URL

Copy the anon public API key
```
### 4. 🛠️ Create .env File
```bash
In the root folder, create a file called .env and paste the following:

env
Copy
Edit
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
Replace with your actual Supabase values.
```
### 5. 🚀 Run the App Locally
   ```bash
bash
Copy
Edit
npm run dev
Visit the app in your browser:

arduino
Copy
Edit
http://localhost:5173
```
## 📁 Folder Structure
```bash
bash
Copy
Edit
Listora/
├── public/                     # Static assets
│   └── vite.svg
├── src/
│   ├── api/                    # Supabase queries
│   │   └── index.ts
│   ├── assets/                 # Images/icons
│   ├── components/             # Pages/.tsx and .css files 
│   ├── lib/
│   ├── pages/                  # Login and Signup pages
│   ├── routes/     
│   ├── App.tsx                 # Main application
│   ├── Layout.tsx              # Reusable layout
│   ├── main.tsx                # App entry point
│   ├── supabaseClient.ts       # Supabase init
│   ├── App.css, index.css      # Styling
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts     
