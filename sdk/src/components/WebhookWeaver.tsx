import React, { useState } from 'react';
import { WebhookWeaverProps, Automation } from '../types';

export const WebhookWeaver: React.FC<WebhookWeaverProps> = ({ 
  apiKey,
  apiUrl = 'http://localhost:3001',
  availableActions,
  theme = 'light',
  onAutomationCreated,
  onError
}) => {
  const [selectedAction, setSelectedAction] = useState('');
  const [targetUrl, setTargetUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleCreateAutomation = async () => {
    if (!selectedAction || !targetUrl) {
      setMessage('Please select an action and enter target URL');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${apiUrl}/automations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey
        },
        body: JSON.stringify({
          targetUrl,
          actionType: selectedAction
        })
      });

      if (!response.ok) throw new Error('Failed to create automation');

      const automation: Automation = await response.json();
      setMessage(`✅ Automation created! Webhook URL: ${automation.webhookUrl}`);
      onAutomationCreated?.(automation);
      
      // Reset form
      setSelectedAction('');
      setTargetUrl('');
    } catch (error) {
      setMessage(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      onError?.(error instanceof Error ? error.message : 'unknown error');
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: theme === 'light' ? '#ffffff' : '#f5f5f5',
      maxWidth: '500px'
    }}>
      <h3 style={{ margin: '0 0 15px 0', color: theme === 'light' ? '#333' : '#fff' }}>
        Webhook Weaver
      </h3>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Action Type:
        </label>
        <select 
          value={selectedAction}
          onChange={(e) => setSelectedAction(e.target.value)}
          style={{ 
            width: '100%', 
            padding: '8px', 
            border: '1px solid #ddd', 
            borderRadius: '4px' 
          }}
        >
          <option value="">Select an action</option>
          {availableActions.map(action => (
            <option key={action.value} value={action.value}>
              {action.label}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Target URL:
        </label>
        <input
          type="url"
          value={targetUrl}
          onChange={(e) => setTargetUrl(e.target.value)}
          placeholder="https://yourapp.com/webhook-receiver"
          style={{ 
            width: '100%', 
            padding: '8px', 
            border: '1px solid #ddd', 
            borderRadius: '4px' 
          }}
        />
      </div>

      <button
        onClick={handleCreateAutomation}
        disabled={loading}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: loading ? '#ccc' : '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Creating...' : 'Create Automation'}
      </button>

      {message && (
        <div style={{ 
          marginTop: '15px', 
          padding: '10px', 
          borderRadius: '4px',
          backgroundColor: message.includes('✅') ? '#d4edda' : '#f8d7da',
          color: message.includes('✅') ? '#155724' : '#721c24',
          fontSize: '14px'
        }}>
          {message}
        </div>
      )}
    </div>
  );
};