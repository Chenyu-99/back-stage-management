import Login from "../page/Login";
import Index from "../page/admin/dashboard/Index";
import List from "../page/admin/products/List";
import Edit from "../page/admin/products/Edit";
import PageNotFound from "../page/PageNotFound";

export const mainRoutes = [{
    path: '/login',
    component: Login
},
{
    path:'/404',
    component: PageNotFound
}]

export const adminRoutes = [{
    path: '/admin/dashboard',
    component: Index,
    isShow: true,
    title: "看板",
 //   icon: "area-chart"
},{
    path: '/admin/products',
    component: List,
    isShow: true,
    exact: true,
    title: "视频管理",
//    icon: "shop"
},{
    path: '/admin/products/edit/:id',
    component: Edit,
    isShow: false
}]