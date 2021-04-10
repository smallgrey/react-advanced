import  {
    Home,
    Other,
    Second,
    Third
} from "../views";   // 引入页面
  
export const mainRoute = [
    {
        pathname:"/home",
        component: Home
    },
    {
        pathname:"/other/:id",
        component: Other
    },
    {
        pathname:"/second",
        component: Second
    },
    {
        pathname:"/third",
        component: Third
    }
];
