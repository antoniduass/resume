import React, { useState } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      lineHeight: '1.7',
      color: '#e2e8f0',
      backgroundColor: '#0f172a',
      minHeight: '100vh',
    },
    header: {
      backgroundColor: '#1e293b',
      color: 'white',
      padding: '24px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginTop: '12px',
      flexWrap: 'wrap',
    },
    navLink: (isActive) => ({
      backgroundColor: isActive ? '#3b82f6' : 'rgba(59, 130, 246, 0.2)',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '30px',
      textDecoration: 'none',
      fontSize: '15px',
      fontWeight: isActive ? '600' : '400',
      transition: 'all 0.3s ease',
      border: '2px solid #60a5fa',
      display: 'inline-block',
      minWidth: '90px',
      textAlign: 'center',
    }),
    section: {
      padding: '40px 20px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    card: {
      backgroundColor: '#1e293b',
      padding: '28px',
      borderRadius: '16px',
      marginBottom: '30px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
      border: '1px solid #334155',
    },
    skill: {
      display: 'inline-block',
      backgroundColor: '#334155',
      color: '#93c5fd',
      padding: '10px 18px',
      margin: '8px',
      borderRadius: '24px',
      fontSize: '15px',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      border: '2px solid #60a5fa',
    },
    footer: {
      backgroundColor: '#020617',
      color: '#94a3b8',
      textAlign: 'center',
      padding: '30px',
      marginTop: '50px',
      borderTop: '1px solid #334155',
    },
    img: {
      width: '180px',
      height: '180px',
      borderRadius: '12px',
      objectFit: 'cover',
      objectPosition: 'center 20%',
      border: '3px solid #3b82f6',
      boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
    },
    button: {
      backgroundColor: '#3b82f6',
      color: 'white',
      border: '2px solid #60a5fa',
      padding: '10px 20px',
      borderRadius: '30px',
      fontSize: '15px',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
      display: 'inline-block',
      transition: 'background-color 0.3s',
      minWidth: 'auto',
      textAlign: 'center',
    },
  };

  const sections = {
    about: (
      <section style={styles.section}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            animation: 'slideInLeft 0.6s ease-out',
          }}
        >
          {/* Фото слева, текст справа — только на десктопе */}
          <div
            style={{
              display: 'flex',
              flexDirection: window.innerWidth > 768 ? 'row' : 'column',
              alignItems: 'center',
              gap: '40px',
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            {/* Фото — слева */}
            <div style={{ flexShrink: 0 }}>
              <img
                src="/photo.jpg"
                alt="Фото Буханец А.В."
                style={styles.img}
              />
            </div>

            {/* Текст — справа */}
            <div style={{ textAlign: 'left', maxWidth: '500px', width: '100%' }}>
              <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#fff', margin: 0 }}>
                Привет, я Антон
              </h1>
              <p style={{ fontSize: '17px', color: '#94a3b8', marginTop: '8px' }}>
                Junior Java Developer, увлечённый backend-разработкой, микросервисами и качественным кодом.
              </p>
              <a href="/resume.pdf" download style={styles.button}>
                📄 Скачать PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    ),
    skills: (
      <section style={styles.section}>
        <div style={styles.card}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '14px',
              animation: 'fadeIn 0.5s ease-out',
            }}
          >
            {[
              'Java',
              'Spring Framework',
              'Spring Boot',
              'Git',
              'Apache Maven',
              'JUnit',
              'Docker',
              'REST',
              'Prometheus',
              'Grafana',
              'PostgreSQL',
            ].map((skill) => (
              <span key={skill} style={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    ),
    education: (
      <section style={styles.section}>
        <div style={styles.card}>
          <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#93c5fd', marginBottom: '16px' }}>
            Образование
          </h3>
          <div style={{ color: '#e2e8f0', lineHeight: '1.8' }}>
            <p style={{ margin: '8px 0' }}>
              <strong>Московский технический университет связи и информатики (МТУСИ)</strong>
            </p>
            <p style={{ margin: '8px 0', color: '#cbd5e1' }}>
              Бакалавр, факультет "Радио и телевидение", профиль — аудиовизуальная техника
            </p>
            <p style={{ margin: '8px 0', fontSize: '15px', color: '#94a3b8' }}>
              2022 – 2026
            </p>
          </div>
        </div>
      </section>
    ),
    projects: (
      <section style={styles.section}>
        <div style={styles.card}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: '600', color: '#93c5fd' }}>
              Notification Hub — Мультиканальный сервис уведомлений
            </h3>
            <p style={{ color: '#e2e8f0' }}>
              Spring Boot приложение для отправки уведомлений через <strong>email и Telegram</strong>.
              Получает данные через REST API и доставляет сообщения в выбранный канал.
            </p>
            <p style={{ color: '#e2e8f0' }}><strong>Ключевые возможности:</strong></p>
            <ul style={{ paddingLeft: '20px', marginTop: '8px', color: '#e2e8f0' }}>
              <li>Отправка email через SMTP (JavaMail)</li>
              <li>Отправка в Telegram через Bot API</li>
              <li>REST API для приёма уведомлений</li>
              <li>Выстроенное взаимодействие с базой данных</li>
            </ul>
            <a
              href="https://github.com/antoniduass/notification-hub"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.button,
                backgroundColor: '#1e40af',
                fontSize: '14px',
              }}
            >
              🔗 GitHub Repository
            </a>
            <div style={{ marginTop: '15px' }}>
              {['Java', 'Spring Boot', 'REST API', 'JavaMail', 'Telegram Bot API', 'Maven', 'PostgreSQL'].map((tech) => (
                <span key={tech} style={styles.skill}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    ),
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={{ fontSize: '26px', fontWeight: '700' }}>Буханец Антон Валентинович, 21 год</h1>
        <nav style={styles.nav}>
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              style={styles.navLink(activeSection === key)}
            >
              {key === 'about' ? 'Обо мне' :
               key === 'skills' ? 'Навыки' :
               key === 'education' ? 'Образование' :
               key === 'projects' ? 'Проекты' : key}
            </button>
          ))}
        </nav>
      </header>

      {/* Main */}
      <main>
        {sections[activeSection]}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Буханец А.В. Junior Java Developer | Москва</p>
      </footer>
    </div>
  );
}