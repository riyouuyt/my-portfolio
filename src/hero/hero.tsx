import React from 'react';
import Image from 'next/image';
import styles from './hero.module.css';
import heroImg from '../../public/assets/profile.png'


const Hero: React.FC = () => {
  const handleDownload = () => {
    // CV is in the public/assets folder and named "cv.pdf"
    const cvUrl = '/assets/cv.pdf';
    
    // Create a link element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'bagus-ariobimo-CV.pdf'); // This will be the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroImage}>
          <Image 
            src={heroImg} 
            alt="Hero illustration" 
            width={800}
            height={800}
            priority
          />
        </div>
        
        <div className={styles.heroContent}>
          <h1>Hi! I&apos;m Rio</h1>
          <h2>Data Analyst/Scientist</h2>
          <p>
            I&apos;m a passionate administration student who is really interested in the AI world. 
            With expertise in data analysis, data science, and machine learning, I&apos;m ready to contribute 
            to Indonesia&apos;s digital AI government generation.
          </p>
          <button 
            className={styles.downloadBtn}
            onClick={handleDownload}
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;