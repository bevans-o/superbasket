
export default function Filter({display, filter, applyFilter}: any) {

    return (
        <div className="filter" data-active="true" onClick={(event) => {
            var filterElement: HTMLDivElement = event.target as HTMLDivElement;

            if (filterElement == null) return;

            if (filterElement.dataset.active == "true") {
                filterElement.dataset.active = "false";
            } else {
                filterElement.dataset.active = "true"
            }

            if (applyFilter == null) return;
            applyFilter(filter);
        }}>
            {display}
        </div>
    )
  }
  