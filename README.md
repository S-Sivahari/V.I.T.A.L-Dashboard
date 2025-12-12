# V.I.T.A.L Dashboard

Village Integrated Transparency And Livelihood - Agricultural Disaster Management System

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Firebase](https://img.shields.io/badge/Firebase-12.6.0-FFCA28?logo=firebase&logoColor=white)](https://firebase.google.com)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## Features & Status

| Feature | Status | Details |
|---------|--------|---------|
| Farmer Management | Complete | Registration, profiles, and tracking |
| Dealer Management | Complete | Inventory and sales management |
| Issue Reporting | Complete | Disaster damage assessment & subsidy calculation |
| District Officer Dashboard | Complete | Multi-village oversight & analytics |
| Village Officer Dashboard | Complete | Local management & task updates |
| Analytics & Reports | In Progress | Advanced data visualization |
| Mobile Responsive | Complete | Fully responsive design |
| Firebase Auth | Complete | Secure authentication system |
| Multi-language Support | In Progress | i18n implementation |
| Real-time Notifications | In Progress | WebSocket integration |

---

## Architecture Overview

```
┌─────────────────────────────────────────────┐
│          V.I.T.A.L Dashboard               │
├─────────────────────────────────────────────┤
│                                             │
│  ┌──────────────┐      ┌──────────────┐   │
│  │   Frontend   │      │   Styling    │   │
│  │   (React)    │──────│ (Tailwind)   │   │
│  └──────────────┘      └──────────────┘   │
│         ▲                                   │
│         │                                   │
│  ┌──────────────────────────────────────┐  │
│  │  State Management (Zustand)          │  │
│  │  Routing (React Router)              │  │
│  │  Build Tool (Vite)                   │  │
│  └──────────────────────────────────────┘  │
│         ▲                                   │
│         │                                   │
│  ┌──────────────────────────────────────┐  │
│  │    Firebase Services                 │  │
│  │  • Authentication                    │  │
│  │  • Firestore Database               │  │
│  │  • Storage                          │  │
│  └──────────────────────────────────────┘  │
│                                             │
└─────────────────────────────────────────────┘
```

---

## User Roles & Permissions

### District Officer Access

- View all villages in district
- Access district-wide analytics
- Manage farmer registrations
- Oversee dealer activities
- Review damage reports
- Generate district reports

### Village Officer Access

- Manage local farmers
- Handle dealer partnerships
- Record disaster issues
- Calculate subsidy amounts
- Update task status
- Send notifications

---

## Core Features

### Subsidy Calculation Engine

The system automatically calculates crop and equipment subsidies based on:
- Severity Factor: Low (30%), Medium (60%), High (90%)
- Crop-specific Caps: Different maximums per crop type
- Equipment Coverage: 75% of repair costs with equipment caps
- Formula: min(coveragePercentage × loss, cropCap)

### Dashboard Analytics

Real-time statistics including:
- Total farmers and dealers
- Active issues and resolutions
- Pending requests queue
- Financial summaries
- Geographic distribution maps

### Authentication & Authorization

- Firebase email/password authentication
- Role-based access control (RBAC)
- Session persistence with Zustand
- Protected routes with automatic redirects
- Secure token management

---

## Testing the Application

Test Credentials:

```
District Officer:
Email: district@example.com
Password: district123

Village Officer:
Email: village@example.com
Password: village123
```

---

## Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React 19.1 | UI framework |
| Styling | Tailwind CSS 4.1 | Utility-first CSS |
| Build Tool | Vite 7.1 | Fast bundler & dev server |
| State | Zustand 5.0 | Lightweight state management |
| Routing | React Router 7.9 | Client-side routing |
| Backend | Firebase 12.6 | BaaS platform |
| Auth | Firebase Auth | Authentication service |
| Database | Firestore | NoSQL cloud database |
| Storage | Firebase Storage | File uploads |

---

## Contributing

We welcome contributions to the V.I.T.A.L Dashboard project. You can:

1. Report Issues: Open an issue on GitHub
2. Feature Requests: Suggest enhancements through discussions
3. Pull Requests: Submit code improvements
4. Documentation: Improve docs and code comments
5. Testing: Help with test coverage

---

## MIT License

Copyright (c) 2024 V.I.T.A.L Dashboard Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
