import RouterApp from "../routes"
import Header from "./components/Header"
import { ContainerApp } from "./style"




function App() {

  return (
    <>
      <Header itens={[
        { id: 1, name: "Personagens", route: "./characters" },
        { id: 2, name: "Filmes", route: "./movies" },
        { id: 3, name: "Hqs", route: "./comics" },
        { id: 4, name: "Sair", route: "" },
      ]} />
      <ContainerApp>
        <RouterApp />
      </ContainerApp>
    </>
  )
}

export default App
