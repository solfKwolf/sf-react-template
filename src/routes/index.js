import Root from "@/views/root"
import _import from "./lazy_import"

export  const routes = [
  {
    component: Root,
    routes: [
      // router
      {
        path: "/login",
        exact: true,
        component: _import("login")
      },
      // test
      {
        path: "/test",  
        exact: true,
        component: _import("test")
      },
      // about
      {
        path: "/about",
        exact: true,
        component: _import("about")
      },
      // jacksorbetter
      {
        path: "/jacksorbetter",
        exact: true,
        component: _import("jacksorbetter")
      },
      // 404
      {
        path: "*",
        exact: true,
        component: _import("404")
      }
    ]
  }
];