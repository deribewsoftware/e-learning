import { MdDashboardCustomize } from "react-icons/md";
import { MdDomainAdd } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";
import { MdGroupAdd } from "react-icons/md";
import { RiFileList3Fill } from "react-icons/ri";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdSettings } from "react-icons/md";
import { HiSupport } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { IoIosDocument } from "react-icons/io";
import { BiCabinet } from "react-icons/bi";
import { MdMonetizationOn } from "react-icons/md";
import { AiOutlineCustomerService } from "react-icons/ai";
import { IoMdApps } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiFillApi } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

export const SidebarContents = [
  {
    name: "Dashboard",
    url: "/",
    icon: MdDashboardCustomize,
  },
  {
    name: "User Management",
    url: "/user-management",
    icon: BsPeople,
  },
  {
    name: "Course Management",
    url: "/course-management",
    icon: MdDomainAdd,
  },
  {
    name: "Enrollment Management",
    url: "/enrollment-management",
    icon: IoIosPaper,
  },
  {
    name: "Content Management",
    url: "/content-management",
    icon: IoIosDocument,
  },
  {
    name: "Announcements",
    url: "/announcements",
    icon: IoMdNotifications,
  },
  {
    name: "Analytics and Reporting",
    url: "/analytics-reporting",
    icon: AiOutlineLineChart,
  },
  {
    name: "Finance and Billing",
    url: "/finance-billing",
    icon: MdMonetizationOn,
  },
  {
    name: "Settings",
    url: "/settings",
    icon: MdSettings,
  },
  {
    name: "Support and Help Desk",
    url: "/support-help-desk",
    icon: HiSupport,
  },
  {
    name: "Communication",
    url: "/communication",
    icon: AiFillMessage,
  },
  {
    name: "Feedback and Surveys",
    url: "/feedback-surveys",
    icon: IoMdCheckmarkCircleOutline,
  },
  {
    name: "User Authentication",
    url: "/user-authentication",
    icon: BiCabinet,
  },
  {
    name: "System Updates",
    url: "/system-updates",
    icon:  IoMdApps,
  },
  {
    name: "Integration",
    url: "/integration",
    icon: AiFillApi,
  },
  {
    name: "FAQ and Documentation",
    url: "/faq-documentation",
    icon: AiFillQuestionCircle ,
  },
  {
    name: "Logout",
    url: "/logout",
    icon: AiOutlineArrowRight,
  },
];
