import '../styles/globals.css'
import '../styles/front.css'
import '../styles/queue-new.css'
import '../styles/front.css'

function MyApp({ Component, pageProps }) {
  console.log(process.env.DOMAIN);
  // return (
  //   <div>Hello</div>
  // )
  return <Component {...pageProps} />
}

export default MyApp
