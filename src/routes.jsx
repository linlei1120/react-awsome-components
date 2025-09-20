import {
  Card1,
  Carousel1,
  Accordion1Example,
  Accordion2Example,
  Navbar1,
  Parallax1,
  Parallax2,
  Sidebar1,
  Sidebar2,
  Widget1Example,
  Widget2,
  FabButton,
} from "./components";

export const routes = [

  {
    name: "Accordion1 & 手风琴01",
    path: "/accordions/accordion-1",
    element: <Accordion1Example />,
  },
  {
    name: "Accordion2 & 手风琴02",
    path: "/accordions/accordion-2",
    element: <Accordion2Example />,
  },
  {
    name: "Card1 & 卡片01",
    path: "/cards/card-1",
    element: <Card1 />,
  },
  {
    name: "Parallax1 & 视差效果01",
    path: "/parallax/parallax-1",
    element: <Parallax1 />,
  },
  {
    name: "Card3 & 卡片03",
    path: "/widgets/widget-1",
    element: <Widget1Example />,
  },
  {
    name: "Sidebar1 & 侧边栏01",
    path: "/sidebars/sidebar-1",
    element: <Sidebar1 />,
  },
  {
    name: "Card2 & 卡片02",
    path: "/widgets/widget-2",
    element: <Widget2 />,
  },
  {
    name: "Navbar1 & 导航栏01",
    path: "/navbars/navbar-1",
    element: <Navbar1 />,
  },
  {
    name: "Sidebar2 & 侧边栏2",
    path: "/sidebars/sidebar-2",
    element: <Sidebar2 />,
  },
  {
    name: "Carousel1 & 轮播图01",
    path: "/carousels/carousel-1",
    element: <Carousel1 />,
  },
  {
    name: "Parallax2 & 视差效果02",
    path: "/parallax/parallax-2",
    element: <Parallax2 />,
  },
  {
    name: "FabButton & 悬浮按钮",
    path: "/buttons/fab-button",
    element: <FabButton />,
  },
];
