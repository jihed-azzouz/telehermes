import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },

  {
    title: "Rewards",
    href: "/starter/rewards",
    icon: "bi bi-trophy",
  },
  {
    title: "WoF",
    href: "/starter/wheel-of-fortune",
    icon: "bi bi-joystick",
  },
  {
    title: "GMN",
    href: "/starter/gmn",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Cards",
    href: "/starter/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "Quiz",
    href: "/starter/quiz",
    icon: "bi bi-columns",
  },
  {
    title: "Table",
    href: "/starter/table",
    icon: "bi bi-layout-split",
  },

  {
    title: "Referrals",
    href: "/starter/referrals",
    icon: "bi bi-link",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <span className="ms-auto d-lg-none">
          <Button
            close
            size="sm"
            className="ms-auto d-lg-none"
            onClick={() => showMobilemenu()}
          ></Button>
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/ample-react-dashboard/?ref=33"
          >
            Upgrade To Pro
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
