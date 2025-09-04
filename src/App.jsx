import React, { useState } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  // Фотографии
  const photos = [
    '/photo.jpg', // основное фото (слева от приветствия)
    '/photo2.jpg', // второе фото (справа от "О себе")
    '/photo3.jpg', // третье фото (слева от "Ключевые качества")
  ];

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
      width: '300px',
      height: '300px',
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
    photoContainer: {
      position: 'relative',
      width: '300px',
      height: '300px',
      overflow: 'hidden',
      borderRadius: '12px',
      border: '3px solid #3b82f6',
      boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
    },
    // Стиль для заголовков, как у "О себе"
    sectionTitle: {
      fontSize: '22px',
      fontWeight: '600',
      color: '#93c5fd',
      marginBottom: '16px',
    },
  };

  const sections = {
    about: (
      <section style={styles.section}>
        {/* Блок 1: Приветствие + фото слева */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          <div style={styles.photoContainer}>
            <img src="/photo.jpg" alt="Фото" style={styles.img} />
          </div>
          <div style={{ textAlign: 'left', maxWidth: '500px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#fff', margin: 0 }}>
              Привет, я Антон
            </h1>
            <p style={{ fontSize: '17px', color: '#94a3b8', marginTop: '8px' }}>
              Java Developer, увлечённый backend-разработкой, микросервисами и качественным кодом.
            </p>
            <a href="/resume.pdf" download style={styles.button}>
              📄 Скачать PDF
            </a>
          </div>
        </div>

        {/* Блок 2: "О себе" слева, фото справа */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* Текст "О себе" — слева */}
          <div style={{ textAlign: 'left', maxWidth: '500px' }}>
            <h2 style={styles.sectionTitle}>О себе</h2>
            <p style={{ color: '#e2e8f0', lineHeight: '1.8' }}>
              Я молодой разработчик с опытом создания backend-приложений на Spring Boot.  
              Умею работать с REST API, базами данных и микросервисами.  
              Стремлюсь к качественному коду и clean architecture.
            </p>
          </div>

          {/* Второе фото — справа */}
          <div style={styles.photoContainer}>
            <img src="/photo2.jpg" alt="Фото" style={styles.img} />
          </div>
        </div>

        {/* Блок 3: Ключевые качества — справа, фото — слева */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '40px',
          }}
        >
          {/* Третье фото — слева */}
          <div style={styles.photoContainer}>
            <img src="/photo3.jpg" alt="Фото" style={styles.img} />
          </div>

          {/* Ключевые качества — справа */}
          <div style={{ textAlign: 'left', maxWidth: '500px' }}>
            <h2 style={styles.sectionTitle}>Ключевые качества</h2>
            <ul style={{ paddingLeft: '20px', marginTop: '8px', color: '#e2e8f0' }}>
              <li>🧠 <em>Стрессоустойчивость</em> — могу работать в условиях сжатых сроков и высокой нагрузки</li>
              <li>🤝 <em>Командная работа</em> — легко взаимодействую с другими разработчиками и продукт-менеджерами</li>
              <li>🔍 <em>Внимательность к деталям</em> — пишу чистый, документированный и тестируемый код</li>
              <li>🚀 <em>Быстрое обучение</em> — активно изучаю новые технологии и инструменты</li>
              <li>💡 <em>Инициативность</em> — предлагаю улучшения в проектах и стремлюсь к автоматизации</li>
            </ul>
          </div>
        </div>
      </section>
    ),
    skills: (
      <section style={styles.section}>
        <div style={styles.card}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '14px',
            animation: 'fadeIn 0.5s ease-out',
          }}>
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
              'Swagger',
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
          <h3 style={styles.sectionTitle}>Образование</h3>
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

          {/* Курсы — без лишних рамок, просто список с возможностью ссылок */}
          <div style={{ marginTop: '24px' }}>
            <h4 style={styles.sectionTitle}>Пройденные курсы</h4>
            <ul style={{ paddingLeft: '20px', marginTop: '8px', color: '#e2e8f0' }}>
              <li>
                {/* Замени на название курса */}
                <strong>Курс по Java и Spring Boot</strong>
                {/* Добавь ссылку на курс (опционально) */}
                {/* <a href="https://example.com/java-course" target="_blank" style={{ color: '#3b82f6', marginLeft: '8px' }}>🔗 Перейти</a> */}
              </li>
              <li>
                <strong>Основы Docker и контейнеризации</strong>
                {/* <a href="https://example.com/docker-course" target="_blank" style={{ color: '#3b82f6', marginLeft: '8px' }}>🔗 Перейти</a> */}
              </li>
              <li>
                <strong>Работа с Git и GitHub</strong>
                {/* <a href="https://example.com/git-course" target="_blank" style={{ color: '#3b82f6', marginLeft: '8px' }}>🔗 Перейти</a> */}
              </li>
              <li>
                <strong>Разработка REST API</strong>
                {/* <a href="https://example.com/rest-course" target="_blank" style={{ color: '#3b82f6', marginLeft: '8px' }}>🔗 Перейти</a> */}
              </li>
            </ul>
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
              <li>Конфигурация через application.yml</li>
            </ul>
            <a
              href="https://github.com/antoniduass/notification-hub"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.button,
                backgroundColor: '#1e40af',
                fontSize: '14px',
                marginTop: '15px',
              }}
            >
              🔗 GitHub Repository
            </a>
            <div style={{ marginTop: '15px' }}>
              {['Java', 'Spring Boot', 'REST API', 'JavaMail', 'Telegram Bot API', 'Maven'].map((tech) => (
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
        <p>© 2025 Буханец Антон. Java Developer | Москва</p>
      </footer>
    </div>
  );
}