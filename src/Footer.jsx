import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.topSection}>
        <div style={styles.brandContainer}>
          <h2 style={styles.brandTitle}>Indira Gandhi Delhi Technical University</h2>
          <h4 style={styles.brandSubtitle}>for Women</h4>
        </div>

        <div style={styles.linksContainer}>
          <div style={styles.column}>
            <h5 style={styles.columnTitle}>Report</h5>
            <a href="/" style={styles.link}>Lost</a>
            <a href="/" style={styles.link}>Found</a>
          </div>
          <div style={styles.column}>
            <h5 style={styles.columnTitle}>Contact Us</h5>
            <a href="mailto:" style={styles.link}>Email</a>
          </div>
          <div style={styles.column}>
            <h5 style={styles.columnTitle}>About Us</h5>
            <h5 style={styles.columnTitle}>FAQs</h5>
            <h5 style={styles.columnTitle}>Help</h5>
          </div>
        </div>
      </div>
      
      <div style={styles.copyrightContainer}>
        <p style={styles.copyrightText}>© 2025 IGDTUW All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#f2f2f2',
    padding: '20px 50px',
    display: 'flex',
    flexDirection: 'column', // Use a column direction for the main footer
    justifyContent: 'space-between',
    alignItems: 'center', // Center content horizontally
    width: '100%',
    position: 'fixed',
    bottom: '0',
    left: '0',// Ensure footer has a minimum height
    fontFamily: 'Arial, sans-serif',
    gap: '20px', // Add space between sections
    boxSizing: 'border-box', // Ensure padding is included in width calculation
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%', // Ensure the top section spans the full width
    marginBottom: '10px',
    marginTop: '10px' // Add some space below the top section
  },
  brandContainer: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    lineHeight: '1.4',
  },
  brandTitle: {
    margin: '0',
    fontSize: '28px',
  },
  brandSubtitle: {
    margin: '5px 0',
    fontSize: '20px',
  },
  linksContainer: {
    display: 'flex',
    gap: '50px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  columnTitle: {
    fontWeight: 'bold',
    fontSize: '16px',
    margin: '0 0 10px 0',
  },
  link: {
    color: '#e7e6e6ff',
    textDecoration: 'none',
    margin: '5px 0',
  },
  copyrightContainer: {
    textAlign: 'center',
    width: '100%', 
  },
  copyrightText: {
    fontSize: '14px',
    margin: '0',
  },
};

export default Footer;