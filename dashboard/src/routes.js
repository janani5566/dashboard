import React,{lazy} from 'react';
const dashBoard = lazy(() => import("../src/Views/dashboard"))
const StudentsCreate = lazy(() => import("../src/Views/Students/studentCreate"))
const StudentsList = lazy(() => import("../src/Views/Students/studentList"))

export const Routes = [
    {
        path:"/",
        component:dashBoard,
        exact:true
    },
    {
        path:"/dashboard",
        component:dashBoard,
        exact:true
    },
    {
        path:"/Students",
        component:StudentsList,
        exact:true
    },
    {
        path:"/students/create",
        component:StudentsCreate,

    },
    {
        path:"/students/list",
        component:StudentsList,

    }
]