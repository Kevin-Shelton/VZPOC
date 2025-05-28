// InboundRoute.tsx
import React from 'react';
import './InboundRoute.css';

interface SectionItem {
  text: string;
  isBold?: boolean;
}

interface RouteSection {
  title: string;
  items: SectionItem[];
}

const InboundRoute: React.FC = () => {
  // Define sections data with TypeScript types
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
      <h1>Inbound Route</h1>
      <ul>
        <li>AID with ID</li>
      </ul>
      
      <div className="divider"></div>
      
      <h2>XXXX XXXX XXXX</h2>
      
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <div className="section">
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className={item.isBold ? 'bold' : ''}>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          {index < sections.length - 1 && <div className="divider"></div>}
        </React.Fragment>
      ))}
      
      <div className="divider"></div>
      
      <div className="no-history">NO HISTORY FOUND</div>
    </div>
  );
};

export default InboundRoute;