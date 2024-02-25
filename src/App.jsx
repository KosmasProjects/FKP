import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import { routes } from './config/router'
import Providers from './components/Providers'
import NotFound from './pages/NotFound'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
)


function App() {

  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}


export default App