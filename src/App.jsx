import { useState } from 'react'
import './App.css'
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './auth/context'

function App() {

  return (
    <>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
        
    </>
  )
}

export default App
