import Navbar from "./Components/Navbar/Navbar"
import {Routes ,Route} from 'react-router-dom'
import Home from "./Pages/HomePage.jsx/Home"
import Sidebar from "./Components/Sidebar/Sidebar"
import MoveiDetails from "./Pages/MoveiDetails/MoveiDetails"
import ActorDetails from "./Pages/ActorsData/ActorDetails"
import EntryPage from "./Pages/EntryPage/EntryPage"



function App() {

  return (
    <main className="flex">
      <section className="max-md:hidden">
        <Sidebar />
      </section>
      <section className="w-full">
        <Navbar />
        <Routes>
          <Route path={`/`} element={<EntryPage />}></Route>
          <Route path={`/:id`} element={<Home />}></Route>
          <Route path={`/:id/:movei_id`} element={<MoveiDetails />}></Route>
          <Route path={`/:id/:movei_id/:actor_id`} element={<ActorDetails />}></Route>
        </Routes>
      </section>

    </main>
  )
}

export default App
