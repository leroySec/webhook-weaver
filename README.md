# Webhook Weaver · Open-source Zapier-style Workflow Builder for React

> Add Zapier-like automation workflows to your React app in minutes — not months.


## 📛 Badges

[![npm version](https://img.shields.io/npm/v/webhook-weaver-sdk.svg)](https://www.npmjs.com/package/webhook-weaver-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/leroySec/webhook-weaver)](https://github.com/leroySec/webhook-weaver/issues)
[![GitHub stars](https://img.shields.io/github/stars/leroySec/webhook-weaver)](https://github.com/leroySec/webhook-weaver/stargazers)

## 🚀 Overview

**Webhook Weaver** is an open-source, developer-first workflow builder that brings **Zapier-style automation UI directly into your React application.**

Perfect for SaaS products, dashboards, internal tools, no-code platforms, and any application that needs:

- automated workflows  
- event-driven triggers  
- webhook integrations  
- background jobs  
- user-built automations  


**Tired of generic automation tools that don't fit your brand?** Build automation features that stay in your app, match your design, and work exactly how your users need.

👉 Install Webhook Weaver and get a **production-ready automation builder** in minutes.


## ✨ Features

✅ **Available Today:**
- Simple webhook automation UI
- React component with TypeScript
- Theme support (light/dark)
- Self-hostable backend
- Easy API integration

🚧 **Coming Soon:**
- Visual workflow builder with drag-drop
- Node-based automation engine  
- Advanced retry logic and queues
- 100+ app integrations

## 🏗 Architecture (Architecture-as-a-Feature)

Webhook Weaver turns its internal system design into user-facing power:

## Start Simple, Scale as Needed


Webhook Weaver Component → Your Backend → Your Infrastructure


**Flexible Foundation:**

- Use just the UI component with your existing backend
- Self-host everything for complete control
- Extend with custom automation logic
- No vendor lock-in

This architecture is what makes Webhook Weaver unique.


## ⚡ Quick Start

### 1. Install

```bash
npm install webhook-weaver-sdk


# 2. Add to Your React App

```typescript
import { WebhookWeaver } from 'webhook-weaver-sdk';

function AutomationSettings() {
  return (
    <WebhookWeaver
      apiKey="your-backend-key"
      availableActions={[
        { label: 'New User Signs Up', value: 'user_created' },
        { label: 'Payment Processed', value: 'payment_received' },
        { label: 'Support Ticket Created', value: 'ticket_created' }
      ]}
      onAutomationCreated={(automation) => {
        console.log('Automation created:', automation);
      }}
    />
  );
}
```

# 3. Handle Webhooks in Your Backend

Set up endpoints to receive and process the automation events.

**Use Cases**

E-commerce Platforms

- Order processing workflows
- Inventory management automations
- Customer notification systems

**SaaS Applications**

- User onboarding sequences
- Data synchronization workflows
- Team collaboration automations

**Internal Tools**

- DevOps automation
- Data processing pipelines
- Notification systems

## 🔧 API Reference

WebhookWeaver Props

```typescript
interface WebhookWeaverProps {
  apiKey: string;
  apiUrl?: string;
  availableActions: Array<{ label: string; value: string }>;
  theme?: 'light' | 'dark';
  onAutomationCreated?: (automation: Automation) => void;
  onError?: (error: string) => void;
}
```

🤝 Contributing

We welcome contributions! Please see our Contributing Guide for details.

📄 License

MIT © leroySec