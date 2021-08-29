import 'tailwindcss/tailwind.css'
import '../styles/global.css'
//we have imported this to remove redundent code 
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
