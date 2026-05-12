import {createBrowserRouter, RouterProvider, Outlet } from 'react-router'
import { Menu } from '@/pages/Menu'
import { PageNotFound } from '@/pages/PageNotFound'
import './App.scss'

const baseUrl = import.meta.env.VITE_URL_BASE;

const RootLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      HydrateFallback: () => <div>Loading...</div>,
      children: [
        { index: true, 
          lazy: async () => { const module = await import("@/pages/Home"); return { Component: module.Home }; },
        },
        { path: "*", 
          Component: PageNotFound 
        },
      ]
    },
  ], 
{basename: baseUrl}
)

const App = () => {
  return (
     <RouterProvider router={router} />
  )
}

export default App

 
