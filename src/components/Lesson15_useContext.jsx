import React from 'react'
import ThemeProvider from './ThemeProvider'
import ThemeButton from './ThemeButton'

const Lesson15_useContext = () => {
    return (
        <>
            <ThemeProvider>
            <div>Theme Context</div>
             <ThemeButton/>
            </ThemeProvider>
        </>
    )
}

export default Lesson15_useContext