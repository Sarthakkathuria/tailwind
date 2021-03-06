import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Router from "next/router";
//we have imported this to remove redundent code 
import ProgressBar from "@badrap/bar-of-progress";
const progress = new ProgressBar({
  size:4,
  color:'#FE595E',
  className:'z-50',
  delay:50,
});

Router.events.on('routeChangeStart',progress.start);
Router.events.on('routeChangeComplete',progress.finish);
Router.events.on('routeChangeError',progress.finish);
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
