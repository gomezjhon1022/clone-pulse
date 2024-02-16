import { Header } from '../Header/index'
import { Footer } from '../Footer'

function Layout ({children}) {
 
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export { Layout }