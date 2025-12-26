# 📝 Basic To-Do Application (Clean Architecture)

This is a **Basic To-Do Application** designed to practice and understand **Clean Architecture principles**.  
The goal of this project is **clarity of design**, **separation of concerns**, and **maintainable code**, not framework-specific tricks.



## 🎯 Purpose of This Project

- Learn **Clean Architecture**
- Understand **Entities, Use Cases, Controllers, Presenters**
- Proper use of **Repositories & Interfaces**
- Build a simple but well-structured To-Do system


## 🧠 What This App Does

- Create a task
- Complete a task
- View tasks
- (Optional) Send notification when task is completed


## 🏗 Architecture Overview

This project follows **Clean Architecture** (Robert C. Martin).

### Core Principles
- Business rules are independent of frameworks
- Dependencies always point **inward**
- Use cases drive the application
- Infrastructure is replaceable


## 📂 Folder Structure

```project-root/
│
├── src/
│   │
│   ├── cmd/
│   │   └── server/
│   │       └── index.ts             # App entry point
│   │
│   ├── core/
│   │   ├── domain/
│   │   │   ├── entities/
│   │   │   │   ├── User.ts
│   │   │   │   └── Task.ts
│   │   │   │
│   │   │   └── repositories/
│   │   │       ├── ITaskRepo.ts
│   │   │       └── IUserRepo.ts
│   │   │
│   │   ├── usecase/
│   │   │   ├── interfaces/
│   │   │   │   ├── INotification.ts
│   │   │   │   └── Ilogger.ts
│   │   │   │
│   │   │   └── services/           # Business logic
│   │   │       ├── TaskServices.ts
│   │   │       └── UserServices.ts
│   │   │
│   │   └── errors/
│   │       └── DomainError.ts
│   │
│   ├── interface/
│   │   ├── controller/
│   │   │   ├── user.controller.ts
│   │   │   └── task.controller.ts   # Express handlers
│   │   │
│   │   └── presenter/
│   │       ├── user.presenter.ts
│   │       └── task.presenter.ts    # Response DTO
│   │
│   ├── infrastructure/
│   │   ├── persistence/
│   │   │   ├── TaskRepoPostgres.ts
│   │   │   └── TaskRepoMongo.ts
│   │   │
│   │   ├── notification/
│   │   │   ├── GmailNotfier.ts
│   │   │   └── EmailNotifier.ts
│   │   │
│   │   └── config/
│   │       ├── db.ts
│   │       └── env.ts
│   │
│   ├── pkg/
│   │   ├── logger.ts
│   │   └── httpErrors.ts
│   │
│   └── routes.ts
│
├── tests/
├── tsconfig.json
├── package.json
├── .env
└── README.md
