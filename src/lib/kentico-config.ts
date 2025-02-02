import { createDeliveryClient } from '@kentico/kontent-delivery';

// Types for Kentico content types (to be expanded based on your content models)
export interface KenticoContent {
  system: {
    id: string;
    name: string;
    codename: string;
    language: string;
    type: string;
    lastModified: string;
  };
  elements: Record<string, any>;
}

// Configuration for Kentico Delivery Client
export const deliveryClient = createDeliveryClient({
  projectId: process.env.KENTICO_PROJECT_ID || '',
  previewApiKey: process.env.KENTICO_PREVIEW_API_KEY, // Optional: for preview mode
  defaultLanguage: 'en-GB', // Using British English as specified
  globalHeaders: (_) => [
    {
      header: 'X-KC-Wait-For-Loading-New-Content',
      value: 'true',
    },
  ],
});

// Helper function to check if we're in preview mode
export const isPreviewMode = () => {
  return process.env.NEXT_PUBLIC_PREVIEW_MODE === 'true';
};

// Utility function to handle Kentico API responses
export const handleKenticoResponse = async <T>(
  promise: Promise<T>
): Promise<T | null> => {
  try {
    const response = await promise;
    return response;
  } catch (error) {
    console.error('Error fetching from Kentico:', error);
    return null;
  }
}; 