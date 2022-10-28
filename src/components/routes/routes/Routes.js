import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog";
import Category from "../../pages/Category";
import CourseDetails from "../../pages/CourseDetails";
import FAQ from "../../pages/FAQ";
import Login from "../../pages/Login";
import PageNotFound from "../../pages/PageNotFound";
import Premium from "../../pages/Premium";
import Register from "../../pages/Register";
import Terms from "../../pages/Terms";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Courses from "../../pages/Courses";
import Home from "../../pages/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://learning-platform-server-eta-seven.vercel.app/courses')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://learning-platform-server-eta-seven.vercel.app/courses')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://learning-platform-server-eta-seven.vercel.app/category/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://learning-platform-server-eta-seven.vercel.app/course/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learning-platform-server-eta-seven.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])