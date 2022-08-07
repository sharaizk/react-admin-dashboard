import {
  BsWallet2,
  BsFolder2,
  BsLayoutWtf,
  BsBarChart,
  BsBag,
} from "react-icons/bs";
const sidebarRoutes = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard/main",
    icon: <BsLayoutWtf size={24} />,
  },
  {
    id: 2,
    title: "Analytics",
    path: "/dashboard/analytics",
    icon: <BsBarChart size={24} />,
  },
  {
    id: 3,
    title: "Payments",
    path: "/dashboard/payments",
    icon: <BsWallet2 size={22} />,
  },
  {
    id: 4,
    title: "Products",
    path: "/dashboard/products",
    icon: <BsBag size={24} />,
    childrens: [
      {
        id: 100,
        title: "Published",
        path: "/dashboard/products/published",
      },
      {
        id: 101,
        title: "Draft",
        path: "/dashbord/products/draft",
      },
      {
        id: 102,
        title: "Under Review",
        path: "/dashboard/products/under-review",
      },
    ],
  },
  {
    id: 5,
    title: "Reports",
    path: "/dashboard/reports",
    icon: <BsFolder2 size={24} />,
  },
  
];

export { sidebarRoutes };
