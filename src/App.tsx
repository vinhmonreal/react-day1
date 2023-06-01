import NavigationBar from "./components/Navbar"
import Contact from "./components/Contact"
import SigninForm from "./components/Signin"
import CakesListPage from "./pages/CakesListPage"


function App() {

  return (
    <>
      <NavigationBar />
      <SigninForm />
      <CakesListPage />
      <Contact />
    </>
  )
}

export default App
