import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/AuthContext'

afterEach(cleanup)

function renderApp(initialEntry: string) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } }
  })

  return render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MemoryRouter initialEntries={[initialEntry]}>
          <App />
        </MemoryRouter>
      </AuthProvider>
    </QueryClientProvider>
  )
}

describe('dashboard routes', () => {
  it('redirects unauthenticated users to login', async () => {
    renderApp('/dashboard')

    expect(await screen.findByRole('button', { name: 'Login' })).toBeTruthy()
  })

  it('allows login to open the protected dashboard', async () => {
    renderApp('/')
    fireEvent.click(await screen.findByRole('button', { name: 'Login' }))

    expect(await screen.findByRole('heading', { name: 'Dashboard' })).toBeTruthy()
  })
})