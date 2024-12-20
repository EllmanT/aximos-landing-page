import './App.css'
import Contact from './sections/Contact'
import Download from './sections/Download'
import Faq from './sections/Faq'
import Features from './sections/Features'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Pricing from './sections/Pricing'
import Testimonials from './sections/Testimonials'

function App() {

  return (
    <>
  <main className='overflow-hidden'>
  <div id="root">
<Header/>
<Hero/>
<Features/>
<Pricing/>
<Faq/>
<Download/>
<Contact/>
</div>

<Footer/>

{/* <Testimonials/> */}

  </main>

  </>
  )
}

export default App
