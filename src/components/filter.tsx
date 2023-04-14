
export default function Filter({display, filter}: any) {

    return (
        <div className="filter" data-active="true" onClick={(event) => {
            var filter: HTMLDivElement = event.target as HTMLDivElement;

            if (filter == null) return;

            if (filter.dataset.active == "true") {
                filter.dataset.active = "false";
            } else {
                filter.dataset.active = "true"
            }
        }}>
            {display}
        </div>
    )
  }
  