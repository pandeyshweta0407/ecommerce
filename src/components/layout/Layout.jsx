import Footer from "../footer/Footer"
import NavbarWithSearchBar from "../navBarWithSearchBar/NavbarWithSearchBar"


const Layout = ({children}) => {
  return (
    <div>
      <NavbarWithSearchBar/>
      <div className="main-content min-h-screen">
          {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
