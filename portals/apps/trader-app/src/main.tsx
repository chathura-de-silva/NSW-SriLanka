import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.tsx'
import '@radix-ui/themes/styles.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ErrorBoundary } from './components/ErrorBoundary'
import { CONTENT_TOP_PX } from './components/Layout/Layout'
import { AuthProvider } from 'react-oidc-context'
import { userManager } from './oidcUserManager'
import { initAppConfig } from './config'
import { ColorSchemeProvider } from './services/ColorSchemeContext'
import { ThemedShell } from './components/ThemedShell'

initAppConfig()
  .then(() => {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <ErrorBoundary>
          <AuthProvider
            userManager={userManager}
            onSigninCallback={() => {
              window.history.replaceState({}, document.title, window.location.pathname)
            }}
          >
            <ColorSchemeProvider>
              <ThemedShell>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
                <Toaster position="top-center" containerStyle={{ top: CONTENT_TOP_PX }} />
              </ThemedShell>
            </ColorSchemeProvider>
          </AuthProvider>
        </ErrorBoundary>
      </StrictMode>,
    )
  })
  .catch((err) => {
    console.error('Failed to initialize configuration:', err)
  })
