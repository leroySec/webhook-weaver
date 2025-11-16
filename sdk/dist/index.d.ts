import { default as default_2 } from 'react';

export declare interface Automation {
    id: string;
    webhookUrl: string;
    actionType: string;
    targetUrl: string;
    createdAt: string;
    webhookCount: number;
}

export declare interface CreateAutomationRequest {
    targetUrl: string;
    actionType: string;
}

export declare const WebhookWeaver: default_2.FC<WebhookWeaverProps>;

export declare interface WebhookWeaverProps {
    apiKey: string;
    apiUrl?: string;
    availableActions: Array<{
        label: string;
        value: string;
    }>;
    theme?: 'light' | 'dark';
    onAutomationCreated?: (automation: Automation) => void;
    onError?: (error: string) => void;
}

export { }
