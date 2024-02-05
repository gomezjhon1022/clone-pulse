import { Header } from '../Header/index'

function Layout ({children}) {
 
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export { Layout }