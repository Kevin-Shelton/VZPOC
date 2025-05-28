// src/app/ikPOC/page.tsx
import React from 'react';
import '../InboundRoute.css'; // Adjusted import path

interface SectionItem {
  text: string;
  isBold?: boolean;
}

interface RouteSection {
  title: string;
  items: SectionItem[];
}

const InboundRoute: React.FC = () => {
  const sections: RouteSection[] = [
    {
      title: 'Name',
      items: [
        { text: 'Green Ticket' },
        { text: 'Name' },
        { text: 'Email ID' },
        { text: 'Phone Number' },
        { text: 'HISTORY', isBold: true }
      ]
    },
    {
      title: 'Name',
      items: [
        { text: 'Start Call' }
      ]
    },
    {
      title: 'Name',
      items: [
        { text: 'Next Copy | Home...' },
        { text: 'Experience' },
        { text: 'Overview - OpenML' },
        { text: 'https://service.bad...' },
        { text: 'ftp5_format/create...' },
        { text: 'AndroidLab - Info...' }
      ]
    },
    {
      title: 'Name',
      items: [
        { text: 'Select Disposition?' },
        { text: 'Update' }
      ]
    }
  ];

  return (
    <div className="inbound-route-container">
      {/* ... rest of your component ... */}
    </div>
  );
};

export default InboundRoute;