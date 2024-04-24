import './index.scss';
import info from './about-me-info/info';

export default function AboutMe() {
  return (
    <main className='page about-me'>
      <section className='side-bar'>
        <nav>
          <li>
            <img src="/assets/images/icons/professional-info-icon.svg" alt="" />
          </li>
        </nav>
        <div className='folder-structure'>
          <div className='current-folder'>
            <h1>
              <img src="/assets/images/icons/arrow-down.svg" alt="" />
              personal-info
            </h1>
            <div>
              <li>bio</li>
              <li>interests</li>
              <li>education</li>
            </div>
          </div>
          <div className='contact'>
            <h1>
              <img src="/assets/images/icons/arrow-down.svg" alt="" />
              contacts
            </h1>
            <div>
              <li style={{ wordBreak: "break-word" }}>
                <img src="/assets/images/icons/mail.svg" alt="" />
                nascimentoigor@gmail.com
              </li>
              <li>
                <img src="/assets/images/icons/whatsapp.svg" alt="" />
                (11) 99856-4237
              </li>
            </div>
          </div>
        </div>
      </section>

      <section className='open-file'>
        <div className='title'>
          <h2>
            personal-info
            <img src="/assets/images/icons/close-icon.svg" alt="" />
          </h2>
        </div>

        <div className='content'>
          <div className='line'>
            <p>/**
              * About me
              * I have 5 years of еxperience in web
              * development lorem ipsum dolor sit amet,
              * consectetur adipiscing elit, sed do eiusmod
              * tempor incididunt ut labore et dolore
              * magna aliqua. Ut enim ad minim veniam,
              * quis nostrud exercitation ullamco laboris
              * nisi ut aliquip ex ea commodo consequat.
              * Duis aute irure dolor in reprehenderit in
              *
              * Duis aute irure dolor in reprehenderit in
              * voluptate velit esse cillum dolore eu fugiat
              * nulla pariatur. Excepteur sint occaecat
              * officia deserunt mollit anim id est laborum.
              */</p>
          </div>

          <div className='line'>
            <p>a</p>
          </div>
        </div>
      </section>
    </main>
  )
}