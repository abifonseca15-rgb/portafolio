import { useEffect, useSyncExternalStore } from 'react'
import { loadGoogleAnalytics } from '../src/analytics'
import { translations } from '../src/translations'

const consentCookie = 'cookie-consent'
const consentMaxAge = 60 * 60 * 24 * 180

function subscribeToConsent(callback) {
  window.addEventListener('cookie-consent-change', callback)
  return () => window.removeEventListener('cookie-consent-change', callback)
}

function readConsent() {
  const cookie = document.cookie
    .split(';')
    .map((item) => item.trim())
    .find((item) => item.startsWith(`${consentCookie}=`))

  const value = cookie?.slice(consentCookie.length + 1)
  return value === 'accepted' || value === 'rejected' ? value : null
}

function getServerConsent() {
  return null
}

function saveConsent(value) {
  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${consentCookie}=${value}; Path=/; Max-Age=${consentMaxAge}; SameSite=Lax${secure}`
  window.dispatchEvent(new Event('cookie-consent-change'))
}

export default function CookieBanner({ language, theme }) {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    readConsent,
    getServerConsent,
  )
  const copy = translations[language].cookieConsent
  const isDark = theme === 'dark'

  useEffect(() => {
    if (consent === 'accepted') loadGoogleAnalytics()
  }, [consent])

  const chooseConsent = (value) => {
    saveConsent(value)
  }

  if (consent) return null

  return (
    <aside
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className={`fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-2xl border p-5 shadow-2xl sm:inset-x-6 sm:p-6 ${
        isDark
          ? 'border-purple-500/20 bg-[#17161f] text-[#f0eef8]'
          : 'border-violet-200 bg-white text-slate-900'
      }`}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="sm:pr-5">
          <h2 id="cookie-consent-title" className="mb-2 text-base font-semibold">
            {copy.title}
          </h2>
          <p
            id="cookie-consent-description"
            className={`text-sm leading-relaxed ${isDark ? 'text-[#b8b5ca]' : 'text-slate-600'}`}
          >
            {copy.description}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => chooseConsent('rejected')}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isDark
                ? 'border-purple-500/30 text-[#d3c4e8] hover:bg-purple-500/10'
                : 'border-violet-200 text-violet-800 hover:bg-violet-50'
            }`}
          >
            {copy.reject}
          </button>
          <button
            type="button"
            onClick={() => chooseConsent('accepted')}
            className="rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-500"
          >
            {copy.accept}
          </button>
        </div>
      </div>
    </aside>
  )
}
