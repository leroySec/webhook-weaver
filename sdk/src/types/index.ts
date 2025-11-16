export interface Automation {
    id: string;
    webhookUrl: string;
    actionType: string;
    targetUrl: string;
    createdAt: string;
    webhookCount: number;
}



export interface WebhookWeaverProps {
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

export interface CreateAutomationRequest {
    targetUrl: string;
    actionType: string;
}