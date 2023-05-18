import '@/styles/globals.css'
import { darkTheme, lightTheme, customTheme } from '@/themes'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, Theme } from '@mui/material'
import Cookies from 'js-cookie'
import type { AppContext, AppProps } from 'next/app'
import { useEffect, useState } from 'react'

interface Props extends AppProps{
  theme: string
}

function MyApp({ Component, pageProps, theme}: Props) {
  
  // console.log({theme})
  const [currentTheme, setCurrentTheme] = useState(lightTheme)
  
  useEffect(() => {
    
    const cookieTheme = Cookies.get('theme') || 'light'
    const selectedTheme = cookieTheme === 'light' 
      ? lightTheme
      : cookieTheme === 'dark'
        ? darkTheme
        : customTheme 
    
    setCurrentTheme(selectedTheme)    

  }, [])
  

      

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />  
    </ThemeProvider>
    )
}

// MyApp.getInitialProps = async(appContext: AppContext) => {

//   const {theme} = appContext.ctx.req ? (appContext.ctx.req as any).cookies : {theme:'light'}

//   const validThemes= ['light','dark','custom']
//   // console.log('getInitialProps:', cookies)
//   return{
//     theme:validThemes.includes(theme) ? theme : 'dark',
    
//   }


// }

export default MyApp