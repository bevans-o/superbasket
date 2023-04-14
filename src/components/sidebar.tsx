
export default function Sidebar({children}: any) {

  return (
    <nav id="sidebar" className="sidebar sidebar--open" data-open="true">
        {children}

        <button className="sidebar__toggle" onClick={() => {
            var sidebar: HTMLElement | null = document.querySelector("#sidebar");
            if (sidebar == null) return;

            if (sidebar.dataset.open == "true") {
                sidebar.dataset.open = "false";
                sidebar.classList.remove("sidebar--open");
                sidebar.classList.add("sidebar--closed");
            } else {
                sidebar.dataset.open = "true";
                sidebar.classList.add("sidebar--open");
                sidebar.classList.remove("sidebar--closed");
            }
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="m231 836-75-75 185-185-185-185 75-75 260 260-260 260Zm313 0-75-75 185-185-185-185 75-75 260 260-260 260Z"/></svg>
        </button>
    </nav>
  )
}
