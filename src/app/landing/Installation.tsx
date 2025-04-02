'use client';

import Image from 'next/image';
import styles from './Installation.module.css';

const Installation = () => {
  // Installation data for all operating systems
  const installationData = {
    windows: {
      icon: '/installation/windows.png',
      alt: 'Windows',
      title: 'Windows',
      version: 'v1.0.0',
      description: 'Download the installer, run it, and follow the setup wizard to install Ultrapanel on Windows.',
      downloadLink: '#',
      features: ['Compatible with Windows 10+', 'Easy setup wizard', 'Automatic updates'],
    },
    linux: {
      icon: '/installation/linux.png',
      alt: 'Linux',
      title: 'Linux',
      version: 'v1.0.0',
      description: 'Use the package manager (e.g., apt or yum) or compile from source for your Linux distro.',
      downloadLink: '#',
      features: ['Supports major distros', 'Lightweight installation', 'Command-line setup'],
    },
    macos: {
      icon: '/installation/macos.png',
      alt: 'macOS',
      title: 'macOS',
      version: 'v1.0.0',
      description: 'Install via the DMG file—drag Ultrapanel to Applications and launch it from there.',
      downloadLink: '#',
      features: ['macOS Ventura+', 'Seamless integration', 'Quick setup'],
    },
  };

  // Log if an image fails to load
  const handleImageError = (os: string) => {
    console.error(`Failed to load image for ${os}`);
  };

  return (
    <section className={styles.installation}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Installation Guide</h1>
        <p className={styles.subheading}>
          Choose your operating system to get started with Ultrapanel
        </p>
      </div>

      <div className={styles.installContainer}>
        {/* Windows Card */}
        <div className={styles.installCard}>
          <Image
            src={installationData.windows.icon}
            alt={installationData.windows.alt} 
            width={90}
            height={90}
            className={styles.installImg}
            onError={() => handleImageError('Windows')}
          />
          <div className={styles.installData}>
            <h3 className={styles.installTitle}>{installationData.windows.title}</h3>
            <span className={styles.installVersion}>{installationData.windows.version}</span>
            <p className={styles.installDescription}>{installationData.windows.description}</p>
            <ul className={styles.features}>
              {installationData.windows.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <a href={installationData.windows.downloadLink} className={styles.installButton}>
              Download
            </a>
          </div>
        </div>

        {/* Linux Card */}
        <div className={styles.installCard}>
          <Image
            src={installationData.linux.icon}
            alt={installationData.linux.alt}
            width={100}
            height={100}
            className={styles.installImg}
            onError={() => handleImageError('Linux')}
          />
          <div className={styles.installData}>
            <h3 className={styles.installTitle}>{installationData.linux.title}</h3>
            <span className={styles.installVersion}>{installationData.linux.version}</span>
            <p className={styles.installDescription}>{installationData.linux.description}</p>
            <ul className={styles.features}>
              {installationData.linux.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <a href={installationData.linux.downloadLink} className={styles.installButton}>
              Download
            </a>
          </div>
        </div>

        {/* macOS Card */}
        <div className={styles.installCard}>
          <Image
            src={installationData.macos.icon}
            alt={installationData.macos.alt} 
            width={100}
            height={100}
            className={styles.installImg}
            onError={() => handleImageError('macOS')}
          />
          <div className={styles.installData}>
            <h3 className={styles.installTitle}>{installationData.macos.title}</h3>
            <span className={styles.installVersion}>{installationData.macos.version}</span>
            <p className={styles.installDescription}>{installationData.macos.description}</p>
            <ul className={styles.features}>
              {installationData.macos.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <a href={installationData.macos.downloadLink} className={styles.installButton}>
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;