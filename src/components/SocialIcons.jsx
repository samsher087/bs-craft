import React from 'react';

// Legacy stroke icons for compatibility
export function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

// Authentic full-color brand badge icons as shown in reference design
export function FacebookColorIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#1877F2" />
      <path
        d="M24.8 19l.7-4.8h-4.6v-3.1c0-1.3.6-2.5 2.6-2.5h2V4.5s-1.8-.3-3.6-.3c-3.7 0-6.1 2.3-6.1 6.3v3.7h-4.2V19h4.2v11.7a18.4 18.4 0 005.8 0V19h3.8z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function LinkedInColorIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="#0A66C2" />
      <path
        d="M12.2 14.2v11.8H8.3V14.2h3.9zm-1.9-6.2c1.3 0 2.3 1 2.3 2.3 0 1.2-1 2.2-2.3 2.2-1.2 0-2.2-1-2.2-2.2 0-1.3 1-2.3 2.2-2.3zm7.6 6.2h3.7v1.6h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.6 4.8 6.1V26h-3.9v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V26h-3.9V14.2h-.7z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function InstagramColorIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-brand-gradient" cx="15%" cy="100%" r="120%" fx="10%" fy="100%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="10%" stopColor="#fdf497" />
          <stop offset="50%" stopColor="#fd5949" />
          <stop offset="70%" stopColor="#d6249f" />
          <stop offset="100%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="36" height="36" rx="9" fill="url(#ig-brand-gradient)" />
      <rect x="8.5" y="8.5" width="19" height="19" rx="5.5" stroke="#FFFFFF" strokeWidth="2.3" fill="none" />
      <circle cx="18" cy="18" r="4.4" stroke="#FFFFFF" strokeWidth="2.3" fill="none" />
      <circle cx="23.3" cy="12.7" r="1.3" fill="#FFFFFF" />
    </svg>
  );
}

export function YoutubeColorIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="#FF0000" />
      <path d="M15 11.5l8.5 6.5-8.5 6.5V11.5z" fill="#FFFFFF" />
    </svg>
  );
}

export function WhatsAppColorIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#25D366" />
      <path
        d="M26.2 9.8A11.5 11.5 0 0018 6.5C11.6 6.5 6.5 11.6 6.5 18c0 2 .5 4.1 1.6 5.8L6.5 30l6.3-1.6a11.4 11.4 0 005.2 1.3h.1c6.4 0 11.5-5.1 11.5-11.5 0-3.1-1.2-6-3.4-8.4zm-8.2 17.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.4 9.4 0 01-1.5-5.1c0-5.3 4.3-9.5 9.6-9.5 2.6 0 5 1 6.8 2.8a9.5 9.5 0 012.8 6.8c0 5.2-4.3 9.6-9.4 9.6zm5.2-7.2c-.3-.1-1.7-.8-2-1-.3-.1-.4-.2-.6.1-.2.3-.7 1-.9 1.1-.2.2-.3.2-.6.1a7.7 7.7 0 01-2.3-1.4 8.5 8.5 0 01-1.6-2c-.2-.3 0-.5.1-.6.1-.2.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.6-1.5-.8-2c-.2-.6-.5-.5-.6-.5h-.5c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.6-.4z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
