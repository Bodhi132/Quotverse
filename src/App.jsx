import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import IndexPage from "./pages/IndexPage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<IndexPage/>} />
        </Route>
      </Routes>
    </Router>
  )
}