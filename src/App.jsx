import React from 'react'
import ThemeProvider from './Context/ThemeProvider'
import Section from './components/Section';

export default function App() {
  return (
    <div>
        <ThemeProvider>
          <Section/>
        </ThemeProvider>
    </div>
  )
}
