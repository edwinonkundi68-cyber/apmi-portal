import Navbar from "./Navbar"
import Footer from "./Footer"   
const Layout = ({children}) => {
    return(
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 py-6 px-8">{children}</main>
            <Footer />
        </div>
    )
}
export default Layout