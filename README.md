
# Funko Pop App Collector  

A simple **command-line application** for managing your Funko Pop collection. Add, edit, remove, and list your Funkos.

## 🚀 Features  

- **Manage Your Collection** – Add, modify, remove, and list Funkos.  
- **Detailed Funko Info** – Includes type, franchise, exclusivity, special features & market value.  
- **Colorful Output** – Uses **chalk** to highlight values (green = high, red = low).  
- **Persistent Storage** – Saves data in **JSON files** per user.  
- **Easy CLI Commands** – Powered by **yargs** for intuitive interactions.  

## 🛠️ Commands  

| Action   | Command Example |
|----------|---------------|
| ➕ Add Funko | `add --user "edusegre" --id 1 --name "Classic Sonic" --desc "The best Sonic Funko ever" --type "Pop!" --genre "Games" ...` |
| ✏️ Modify Funko | `modify --i 001 --name "Spider-Man"` |
| ❌ Remove Funko | `remove --i 001` |
| 📜 List Funkos | `list --user user-test` |
| 🔍 Show Funko | `show --i 001` |

## 📦 Installation  

```bash
$ git clone https://github.com/ULL-ESIT-INF-DSI-2425/prct08-filesystem-funko-app-ValBoschP.git

$ cd prct08-filesystem-funko-app-ValBoschP
$ pnpm install  
```
## Run the app

```bash
$ tsc
$ npm start
```

## 🛠️ Built With  

- **TypeScript** – Type-safe and scalable.  
- **Chalk** – Colorful console output.  
- **Yargs** – Simple CLI command handling.  
- **Node.js File System API** – Persistent data storage.  
 
---

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/OTAAcbYr)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=18823919)
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2425/prct08-filesystem-funko-app-ValBoschP/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2425/prct08-filesystem-funko-app-ValBoschP?branch=main)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2425_prct08-filesystem-funko-app-ValBoschP&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2425_prct08-filesystem-funko-app-ValBoschP)
[![CI Tests](https://github.com/ULL-ESIT-INF-DSI-2425/prct08-filesystem-funko-app-ValBoschP/actions/workflows/ci.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2425/prct08-filesystem-funko-app-ValBoschP/actions/workflows/ci.yml)