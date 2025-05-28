import React from 'react';
import styles from '../InboundRoute.module.css';

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
    <div className={styles['inbound-route-container']}>
      <h1 className={styles['inbound-route-container__h1']}>Inbound Route</h1>
      <ul className={styles['inbound-route-container__ul']}>
        <li>AID with ID</li>
      </ul>
      
      <div className={styles.divider}></div>
      
      <h2 className={styles['inbound-route-container__h2']}>XXXX XXXX XXXX</h2>
      
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <div className={styles.section}>
            <h3 className={styles['inbound-route-container__h3']}>{section.title}</h3>
            <ul className={styles['inbound-route-container__ul']}>
              {section.items.map((item, itemIndex) => (
                <li 
                  key={itemIndex} 
                  className={item.isBold ? styles.bold : ''}
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          {index < sections.length - 1 && <div className={styles.divider}></div>}
        </React.Fragment>
      ))}
      
      <div className={styles.divider}></div>
      
      <div className={styles['no-history']}>NO HISTORY FOUND</div>
    </div>
  );
};

export default InboundRoute;