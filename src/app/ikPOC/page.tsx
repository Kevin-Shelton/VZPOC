import React from 'react';
import styles from './InboundRoute.module.css';

interface CallItem {
  id: string;
  label: string;
  value: string;
  isBold?: boolean;
}

interface ActionItem {
  id: string;
  label: string;
  onClick: () => void;
}

interface Section {
  id: string;
  title: string;
  items: (CallItem | ActionItem)[];
  isActionSection?: boolean;
}

const InboundRoute: React.FC = () => {
  // Mock data - replace with real API calls
  const aid = "AID-123456";
  const callerId = "XXXX XXXX XXXX";
  
  const handleStartCall = () => {
    console.log("Call started");
    // Add call logic here
  };

  const handleUpdate = () => {
    console.log("Update disposition");
    // Add update logic here
  };

  const sections: Section[] = [
    {
      id: 'caller-info',
      title: 'Caller Information',
      items: [
        { id: 'ticket', label: 'Ticket', value: 'Green Ticket' },
        { id: 'name', label: 'Name', value: 'John Doe' },
        { id: 'email', label: 'Email ID', value: 'john.doe@example.com' },
        { id: 'phone', label: 'Phone Number', value: '(555) 123-4567' },
        { id: 'history', label: 'HISTORY', value: '', isBold: true }
      ]
    },
    {
      id: 'call-actions',
      title: 'Call Actions',
      isActionSection: true,
      items: [
        { id: 'start-call', label: 'Start Call', onClick: handleStartCall }
      ]
    },
    {
      id: 'quick-links',
      title: 'Quick Links',
      items: [
        { id: 'next-copy', label: 'Next Copy', value: 'Home...' },
        { id: 'experience', label: 'Experience', value: '' },
        { id: 'overview', label: 'Overview', value: 'OpenML' },
        { id: 'service', label: 'Service', value: 'https://service.bad...' },
        { id: 'ftp', label: 'FTP', value: 'ftp5_format/create...' },
        { id: 'android', label: 'AndroidLab', value: 'Info...' }
      ]
    },
    {
      id: 'disposition',
      title: 'Disposition',
      isActionSection: true,
      items: [
        { id: 'select', label: 'Select Disposition?', value: '' },
        { id: 'update', label: 'Update', onClick: handleUpdate }
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Inbound Route</h1>
        <div className={styles.aid}>{aid}</div>
      </header>

      <div className={styles.divider}></div>

      <div className={styles.callerId}>{callerId}</div>

      {sections.map((section) => (
        <React.Fragment key={section.id}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <ul className={styles.list}>
              {section.items.map((item) => (
                <li key={item.id} className={styles.listItem}>
                  {section.isActionSection ? (
                    <button 
                      className={styles.button}
                      onClick={(item as ActionItem).onClick}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <>
                      <span className={item.isBold ? styles.boldLabel : styles.label}>
                        {item.label}
                      </span>
                      {(item as CallItem).value && (
                        <span className={styles.value}>{(item as CallItem).value}</span>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </section>
          <div className={styles.divider}></div>
        </React.Fragment>
      ))}

      <div className={styles.emptyState}>
        <p className={styles.emptyStateText}>NO HISTORY FOUND</p>
      </div>
    </div>
  );
};

export default InboundRoute;