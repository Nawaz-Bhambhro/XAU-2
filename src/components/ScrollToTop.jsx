import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      type="button"
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      aria-label="Scroll To Top"
      onClick={scrollUp}
    >
      <svg
        className="scroll-to-top-icon"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
      >
        <rect width="15" height="15" fill="none" />
        <path
          fill="currentColor"
          d="M2,8.48l-.65-.65a.71.71,0,0,1,0-1L7,1.14a.72.72,0,0,1,1,0l5.69,5.7a.71.71,0,0,1,0,1L13,8.48a.71.71,0,0,1-1,0L8.67,4.94v8.42a.7.7,0,0,1-.7.7H7a.7.7,0,0,1-.7-.7V4.94L3,8.47a.7.7,0,0,1-1,0Z"
        />
      </svg>
    </button>
  )
}

export default ScrollToTop
