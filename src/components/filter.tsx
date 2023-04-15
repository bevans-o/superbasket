import { useEffect } from "react";

export default function Filter({display, filter, onClick}: any) {

    useEffect(() => {
        if (onClick != null) onClick(filter, true);
    }, [filter, onClick])

    return (
        <div className="filter" data-filter={filter} data-active="true" onClick={(event) => {
            var filterElement: HTMLDivElement = event.target as HTMLDivElement;

            if (filterElement == null) return;

            if (filterElement.dataset.active == "true") {
                filterElement.dataset.active = "false";
            } else {
                filterElement.dataset.active = "true"
            }

            if (filterElement.dataset.active == "true") {
                onClick(filter, true);
            } else {
                onClick(filter, false)
            }
        }}>
            {display}
        </div>
    )
  }
  