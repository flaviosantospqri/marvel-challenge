import { useLocation } from "react-router-dom"
import RouterApp from "../routes"
import Header from "./components/Header"
import { Container, Section } from "./pages/Home/style"
import { ContainerApp } from "./style"
import { useEffect, useState } from "react"




function App() {
  const location = useLocation();
  const [showHeader, setShowHearder] = useState(true)

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/sign-up") {
      setShowHearder(false)
    } else {
      setShowHearder(true)
    }
  })

  return (
    <>
      {showHeader &&
        <Header itens={[
          { id: 1, name: "Personagens", route: "./characters" },
          { id: 2, name: "Filmes", route: "./movies" },
          { id: 3, name: "Hqs", route: "./comics" },
          { id: 4, name: "Sair", route: "" },
        ]} />
      }
      <ContainerApp>
        <RouterApp />
        <Container />
        <Section />
      </ContainerApp>
    </>
  )
}

export default App
