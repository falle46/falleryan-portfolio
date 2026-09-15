'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  GitFork,
  Languages,
  Link,
  Mail,
  Moon,
  Palette,
  Smartphone,
  Sparkles,
  Sun,
  X,
  Play,
} from 'lucide-react'

import {
  dictionaries,
  siteLanguages,
  greetings,
  type LanguageCode,
  type Category,
} from '../lib/dictionaries'

import {
  getProjects,
  type ProjectLinkType,
} from '../lib/projects'


// =========================================================
// ICON MAP
// =========================================================

const iconMap: Record<string, React.ElementType> = {
  web: Code2,
  ai: Sparkles,
  mobile: Smartphone,
  design: Palette,
}


// =========================================================
// PROJECT LINK ICON MAP
// =========================================================

const projectLinkIcons: Record<ProjectLinkType, React.ElementType> = {
  repository: GitFork,
  youtube: Play,
  demo: ExternalLink,
  design: Palette,
  external: ExternalLink,
}


// =========================================================
// AMBIENT BACKGROUND
// =========================================================

function AmbientField() {
  return (
    <div className="ambient-field" aria-hidden="true">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="star-layer star-layer-one" />
      <div className="star-layer star-layer-two" />
    </div>
  )
}


// =========================================================
// PAGE
// =========================================================

export default function Page() {
  const [language, setLanguage] =
    useState<LanguageCode>('id')

  const [theme, setTheme] =
    useState<'dark' | 'light'>('dark')

  const [splashPhase, setSplashPhase] =
    useState<'enter' | 'leaving' | 'done'>('enter')

  const [category, setCategory] =
    useState<Category>('All')

  const [selectedProjectId, setSelectedProjectId] =
    useState<string | null>(null)

  const [showLanguages, setShowLanguages] =
    useState(false)


  // =======================================================
  // REFS
  // =======================================================

  const shellRef =
    useRef<HTMLDivElement | null>(null)

  const glowRef =
    useRef<HTMLDivElement | null>(null)

  const pointer = useRef({
    x:
      typeof window !== 'undefined'
        ? window.innerWidth / 2
        : 500,

    y:
      typeof window !== 'undefined'
        ? window.innerHeight / 2
        : 400,
  })

  const targetPointer = useRef({
    x:
      typeof window !== 'undefined'
        ? window.innerWidth / 2
        : 500,

    y:
      typeof window !== 'undefined'
        ? window.innerHeight / 2
        : 400,
  })


  // =======================================================
  // LANGUAGE DATA
  // =======================================================

  const currentLangData =
    dictionaries[language]

  const t =
    currentLangData.copy


  // =======================================================
  // PROJECT DATA
  // =======================================================

  const allProjects = useMemo(
    () => getProjects(language),
    [language]
  )


  const filteredProjects = useMemo(
    () =>
      category === 'All'
        ? allProjects
        : allProjects.filter(
            (project) =>
              project.category === category
          ),
    [category, allProjects]
  )


  const selectedProject = useMemo(
    () =>
      allProjects.find(
        (project) =>
          project.id === selectedProjectId
      ) ?? null,
    [selectedProjectId, allProjects]
  )


  // =======================================================
  // INITIAL LOAD
  // =======================================================

  useEffect(() => {
    const storedTheme =
      window.localStorage.getItem(
        'portfolio-theme'
      ) as 'dark' | 'light' | null

    const storedLanguage =
      window.localStorage.getItem(
        'portfolio-language'
      ) as LanguageCode | null


    if (storedTheme) {
      setTheme(storedTheme)
    }


    if (
      storedLanguage &&
      dictionaries[storedLanguage]
    ) {
      setLanguage(storedLanguage)
    }


    const leaveTimer =
      window.setTimeout(
        () => setSplashPhase('leaving'),
        5000
      )

    const doneTimer =
      window.setTimeout(
        () => setSplashPhase('done'),
        5950
      )


    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(doneTimer)
    }
  }, [])


  // =======================================================
  // THEME
  // =======================================================

  useEffect(() => {
    document.documentElement.classList.toggle(
      'light',
      theme === 'light'
    )

    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark'
    )

    window.localStorage.setItem(
      'portfolio-theme',
      theme
    )
  }, [theme])


  // =======================================================
  // LANGUAGE STORAGE
  // =======================================================

  useEffect(() => {
    window.localStorage.setItem(
      'portfolio-language',
      language
    )
  }, [language])


  // =======================================================
  // REVEAL ANIMATION
  // =======================================================

  useEffect(() => {
    const reveal =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                'is-visible'
              )
            }
          })
        },
        {
          threshold: 0.12,
        }
      )


    const timer =
      window.setTimeout(() => {
        document
          .querySelectorAll('.reveal')
          .forEach((element) => {
            reveal.observe(element)
          })
      }, 0)


    return () => {
      window.clearTimeout(timer)
      reveal.disconnect()
    }
  }, [
    splashPhase,
    category,
    language,
  ])


  // =======================================================
  // POINTER / CURSOR GLOW
  // =======================================================

  useEffect(() => {
    function handlePointerMove(
      event: PointerEvent
    ) {
      targetPointer.current.x =
        event.clientX

      targetPointer.current.y =
        event.clientY
    }


    window.addEventListener(
      'pointermove',
      handlePointerMove
    )


    let frame: number


    function tick() {
      const p =
        pointer.current

      const target =
        targetPointer.current


      p.x +=
        (target.x - p.x) * 0.12

      p.y +=
        (target.y - p.y) * 0.12


      if (shellRef.current) {
        shellRef.current.style.setProperty(
          '--mouse-x',
          `${(p.x / window.innerWidth) * 100}%`
        )

        shellRef.current.style.setProperty(
          '--mouse-y',
          `${(p.y / window.innerHeight) * 100}%`
        )
      }


      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate(${p.x}px, ${p.y}px)`
      }


      frame =
        requestAnimationFrame(tick)
    }


    frame =
      requestAnimationFrame(tick)


    return () => {
      window.removeEventListener(
        'pointermove',
        handlePointerMove
      )

      cancelAnimationFrame(frame)
    }
  }, [])


  // =======================================================
  // HELPERS
  // =======================================================

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth',
      })
  }


  const openProject = (
    projectId: string
  ) => {
    setSelectedProjectId(projectId)
  }


  const closeProject = () => {
    setSelectedProjectId(null)
  }


  // =======================================================
  // RENDER
  // =======================================================

  return (
    <>
      {/* ==================================================
          SPLASH SCREEN
          ================================================== */}

      {splashPhase !== 'done' && (
        <div
          className={`splash-screen ${
            splashPhase === 'leaving'
              ? 'is-leaving'
              : ''
          }`}
          role="status"
          aria-label="Loading portfolio"
        >
          <div className="splash-words">
            {[
              ...greetings,
              ...greetings,
              ...greetings,
            ].map((word, index) => (
              <span
                key={`${word}-${index}`}
                style={{
                  left:
                    `${(index * 17) % 101}%`,
                  top:
                    `${(index * 31) % 109}%`,
                  animationDelay:
                    `${(index % 12) * -0.8}s`,
                }}
              >
                {word}
              </span>
            ))}
          </div>


          <div className="splash-center">
            <span>Welcome</span>

            <strong>
              {greetings[0]}
              <i>!!</i>
            </strong>

            <small>
              Muhammad Falleryan /
              portfolio 2026
            </small>
          </div>
        </div>
      )}


      {/* ==================================================
          CURSOR GLOW
          ================================================== */}

      <div
        className="cursor-glow"
        ref={glowRef}
        aria-hidden="true"
      />


      {/* ==================================================
          MAIN
          ================================================== */}

      <main
        className="site-shell"
        ref={shellRef}
        style={
          {
            '--mouse-x': '50%',
            '--mouse-y': '35%',
          } as React.CSSProperties
        }
      >

        <AmbientField />


        {/* ==================================================
            HEADER
            ================================================== */}

        <header className="site-header">

          <a
            href="#top"
            className="monogram"
            aria-label="Muhammad Falleryan home"
          >
            <span>.</span>
          </a>


          <nav
            className="desktop-nav"
            aria-label="Primary navigation"
          >
            {t.nav.map(
              (item, index) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollTo(
                      [
                        'about',
                        'expertise',
                        'experience',
                        'works',
                      ][index]
                    )
                  }
                >
                  {item}
                </button>
              )
            )}
          </nav>


          <div className="header-tools">

            {/* LANGUAGE */}

            <div className="language-picker">

              <button
                className="tool-button"
                onClick={() =>
                  setShowLanguages(
                    !showLanguages
                  )
                }
                aria-expanded={
                  showLanguages
                }
                aria-label="Change language"
              >
                <Languages />

                <span>
                  {language.toUpperCase()}
                </span>

                <ChevronDown />
              </button>


              {showLanguages && (
                <div className="language-menu">
                  {siteLanguages.map(
                    (item) => (
                      <button
                        key={item.code}
                        onClick={() => {
                          setLanguage(
                            item.code as LanguageCode
                          )

                          setShowLanguages(
                            false
                          )
                        }}
                        className={
                          language === item.code
                            ? 'active'
                            : ''
                        }
                      >
                        {item.label}

                        {language ===
                          item.code && (
                          <Check />
                        )}
                      </button>
                    )
                  )}
                </div>
              )}

            </div>


            {/* THEME */}

            <button
              className="theme-toggle"
              onClick={() =>
                setTheme(
                  theme === 'dark'
                    ? 'light'
                    : 'dark'
                )
              }
              aria-label={`Switch to ${
                theme === 'dark'
                  ? 'light'
                  : 'dark'
              } mode`}
            >
              {theme === 'dark'
                ? <Sun />
                : <Moon />
              }
            </button>

          </div>
        </header>


        {/* ==================================================
            HERO
            ================================================== */}

        <section
          id="top"
          className="hero-section"
        >

          <div className="eyebrow reveal">
            <span className="status-dot" />

            {t.status}

            <span className="eyebrow-line" />
          </div>


          <div className="hero-title-wrap reveal">

            <p className="hero-kicker">
              {t.intro}
            </p>

            <h1>
              Muhammad
              <br />

              <em>Falleryan</em>

              <span className="hero-cursor">
                _
              </span>
            </h1>

          </div>


          <div className="hero-bottom reveal">

            <p>
              Software engineer
              <br />
              & creative technologist
            </p>


            <div className="hero-actions">

              <a
                href="https://drive.google.com/file/d/1lwPIVyqOLKYUlHLIz7LF6rDk9-w6AJ6L/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="button button-solid"
              >
                {t.cv}
                <Download />
              </a>


              <button
                className="button button-ghost"
                onClick={() =>
                  scrollTo('works')
                }
              >
                {t.work}
                <ArrowDownRight />
              </button>

            </div>


            <span className="scroll-note">
              Scroll to explore
              <ArrowDownRight />
            </span>

          </div>

        </section>


        {/* ==================================================
            ABOUT
            ================================================== */}

        <section
          id="about"
          className="content-section about-section"
        >

          <div className="section-label reveal">
            <span>01</span>
            <span>{t.about}</span>
          </div>


          <div className="about-grid">

            <h2 className="display-heading reveal">
              {t.aboutHeading}
            </h2>


            <div className="about-copy reveal">

              <p>
                {t.aboutText}
              </p>


              <div className="about-meta">
                <span>
                  Based in Indonesia
                </span>

                <span>
                  Open to the world
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* ==================================================
            EXPERTISE
            ================================================== */}

        <section
          id="expertise"
          className="content-section"
        >

          <div className="section-label reveal">
            <span>02</span>
            <span>{t.expertise}</span>
          </div>


          <div className="section-intro reveal">
            <h2 className="display-heading">
              {t.expertiseHeading}
            </h2>
          </div>


          <div className="expertise-grid">

            {currentLangData.expertise.map(
              (
                {
                  iconId,
                  title,
                  text,
                  tags,
                },
                index
              ) => {

                const Icon =
                  iconMap[iconId]


                return (
                  <article
                    className="expertise-card reveal"
                    key={title}
                    style={{
                      transitionDelay:
                        `${index * 80}ms`,
                    }}
                  >

                    <div className="card-top">
                      <Icon />
                      <span>
                        0{index + 1}
                      </span>
                    </div>


                    <h3>
                      {title}
                    </h3>


                    <p>
                      {text}
                    </p>


                    <div className="tag-list">
                      {tags.map(
                        (tag) => (
                          <span key={tag}>
                            {tag}
                          </span>
                        )
                      )}
                    </div>

                  </article>
                )
              }
            )}

          </div>

        </section>


        {/* ==================================================
            EXPERIENCE
            ================================================== */}

        <section
          id="experience"
          className="content-section experience-section"
        >

          <div className="section-label reveal">
            <span>03</span>
            <span>{t.experience}</span>
          </div>


          <div className="experience-list">

            {currentLangData.experiences.map(
              (item) => (
                <article
                  className="experience-row reveal"
                  key={`${item.role}-${item.year}`}
                >

                  <div className="experience-year">
                    {item.year}
                  </div>


                  <div>

                    <h3>
                      {item.role}
                    </h3>

                    <p className="experience-place">
                      {item.place}
                    </p>

                    <p>
                      {item.text}
                    </p>

                  </div>


                  <BriefcaseBusiness />

                </article>
              )
            )}

          </div>

        </section>


        {/* ==================================================
            WORKS
            ================================================== */}

        <section
          id="works"
          className="content-section works-section"
        >

          <div className="section-label reveal">
            <span>04</span>
            <span>{t.works}</span>
          </div>


          <div className="works-heading reveal">

            <div>

              <h2 className="display-heading">
                {t.worksHeading}
              </h2>

              <p>
                {t.worksText}
              </p>

            </div>


            <div
              className="category-tabs"
              role="tablist"
            >
              {(
                [
                  'All',
                  'Web',
                  'Apps',
                  'Others',
                ] as Category[]
              ).map(
                (item) => (
                  <button
                    key={item}
                    onClick={() =>
                      setCategory(item)
                    }
                    className={
                      category === item
                        ? 'active'
                        : ''
                    }
                    role="tab"
                    aria-selected={
                      category === item
                    }
                  >
                    {t.tabs[item]}
                  </button>
                )
              )}
            </div>

          </div>


          {/* PROJECT GRID */}

          <div className="project-grid">

            {filteredProjects.map(
              (project, index) => (
                <button
                  className={`project-card ${project.tone} reveal`}
                  key={project.id}
                  onClick={() =>
                    openProject(
                      project.id
                    )
                  }
                  style={{
                    transitionDelay:
                      `${index * 100}ms`,
                  }}
                >

                  {/* IMAGE */}

                  <div className="project-visual">

                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                    ) : (
                      <div className="project-shape">
                        <span>
                          {
                            t.tabs[
                              project.category
                            ]
                          }
                        </span>
                      </div>
                    )}


                    <span className="project-number">
                      {String(
                        index + 1
                      ).padStart(2, '0')}
                    </span>


                    <div className="project-visual-icon">
                      <ExternalLink />
                    </div>

                  </div>


                  {/* PROJECT INFO */}

                  <div className="project-info">

                    <div className="project-title-group">

                      <span>
                        {project.date.year}
                      </span>

                      <h3>
                        {project.title}
                      </h3>

                    </div>


                    <ArrowUpRight />

                  </div>


                  {/* SHORT DESCRIPTION */}

                  <p className="project-short-description">
                    {project.description}
                  </p>


                  {/* TAGS */}

                  <div className="tag-list">

                    {project.tags.map(
                      (tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      )
                    )}

                  </div>

                </button>
              )
            )}

          </div>

        </section>


        {/* ==================================================
            CLOSING
            ================================================== */}

        <section className="closing-section">

          <div className="closing-mark reveal">
            <span>.</span>
          </div>


          <h2 className="display-heading reveal">
            {t.end}
          </h2>


          <div className="closing-actions reveal">

            <a
              href="mailto:falleryan46@gmail.com"
              className="button button-solid"
            >
              {t.contact}
              <Mail />
            </a>


            <a
              href="https://github.com/falle46"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <GitFork />
            </a>


            <a
              href="https://www.linkedin.com/in/falleryan46/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Link />
            </a>

          </div>


          <footer>

            <span>
              © 2026 Muhammad Falleryan
            </span>

            <span>
              Crafted with intention.
            </span>

            <a href="#top">
              Back to top
              <ArrowUpRight />
            </a>

          </footer>

        </section>

      </main>


      {/* ====================================================
          PROJECT MODAL
          ==================================================== */}

      {selectedProject && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={closeProject}
        >

          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              className="modal-close"
              onClick={closeProject}
              aria-label="Close project"
            >
              <X />
            </button>


            {/* TWO COLUMN */}

            <div className="modal-layout">

              {/* ==========================================
                  LEFT : IMAGE
                  ========================================== */}

              <div
                className={`modal-art ${selectedProject.tone}`}
              >

                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={
                      selectedProject.title
                    }
                    className="modal-image"
                  />
                ) : (
                  <div className="modal-placeholder">

                    <span>
                      {
                        t.tabs[
                          selectedProject.category
                        ]
                      }
                    </span>

                    <strong>
                      {
                        selectedProject.title
                          .split(' — ')[0]
                      }
                    </strong>

                  </div>
                )}


                {/* OVERLAY */}

                <div className="modal-art-overlay" />


                {/* PROJECT LINKS */}

                <div className="modal-actions">

                  {selectedProject.links.map(
                    (projectLink) => {

                      const Icon =
                        projectLinkIcons[
                          projectLink.type
                        ] ?? ExternalLink


                      return (
                        <a
                          key={`${projectLink.type}-${projectLink.url}`}
                          href={
                            projectLink.url
                          }
                          target="_blank"
                          rel="noreferrer"
                          className="button modal-repository"
                          onClick={(event) =>
                            event.stopPropagation()
                          }
                        >
                          <Icon />

                          <span>
                            {
                              projectLink.label
                            }
                          </span>
                        </a>
                      )
                    }
                  )}

                </div>

              </div>


              {/* ==========================================
                  RIGHT : CONTENT
                  ========================================== */}

              <div className="modal-content">

                <span className="modal-category">
                  {selectedProject.date.year}
                  {' / '}
                  {
                    t.tabs[
                      selectedProject.category
                    ]
                  }
                </span>


                <h2 id="project-title">
                  {
                    selectedProject.title
                  }
                </h2>


                <div className="modal-description">

                  <p>
                    {
                      selectedProject.description
                    }
                  </p>

                </div>


                <div className="modal-tech">

                  <span className="modal-tech-label">
                    TECH SPECS
                  </span>


                  <div className="tag-list">

                    {selectedProject.tags.map(
                      (tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}

    </>
  )
}