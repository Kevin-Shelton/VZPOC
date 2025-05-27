// Global type declarations for the project

// LeadConnector Chat Widget
interface Window {
  LeadConnectorChatSettings: {
    widgetId: string;
    visitor?: {
      externalId?: string;
      name?: string;
      email?: string;
      phone?: string;
    };
  };
}
