import {
  LayoutDashboard,
  MapPin,
  CalendarDays,
  Settings,
  Cloud,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <Cloud size={25} />
      </div>

      <nav className="side-menu">
        <button className="side-icon active">
          <LayoutDashboard />
        </button>

        <button className="side-icon">
          <MapPin />
        </button>

        <button className="side-icon">
          <CalendarDays />
        </button>

        <button className="side-icon">
          <Settings />
        </button>
      </nav>

      <div className="sidebar-bottom">WEATHER</div>
    </aside>
  );
}

export default Sidebar;