
export default function Item({item, active}: any) {

    var ratingLevel = item.starrating > 4 ? 
        "item__rating--high" : 
        item.starrating > 2 ? 
        "item__rating--medium" :
        "item__rating--low";

    return (
        <div className="item panel" data-selected={active ? "true" : "false"}>
            <img className="item__image" src={item.image}></img>
            <h3 className="item__name">{item.name}</h3>
            <div className="item__price">${item.price.toFixed(2)}</div>
            <div className="item__quantity">{item.quantity > 1 ? `${item.quantity} items` : `${item.quantity} item`}</div>
            {item.starrating != 0 && item.starrating != null && 
                <div className={`item__rating ${ratingLevel}`}></div>}

            <div className="item__badges">
                <div className="item__badge item__badge--bad">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 96 960 960" width="20"><path d="M479.386 808Q509 808 529 788.614q20-19.386 20-49T529.614 689.5q-19.386-20.5-49-20.5T431 689.114q-20 20.114-20 49.728t19.386 49.386q19.386 19.772 49 19.772ZM416 625h128V360H416v265Zm64.276 381q-88.916 0-167.743-33.104-78.828-33.103-137.577-91.852-58.749-58.749-91.852-137.535Q50 664.723 50 575.542q0-89.438 33.162-167.491 33.163-78.053 92.175-136.942 59.011-58.889 137.533-91.999Q391.393 146 480.458 146q89.428 0 167.518 33.093T784.94 271.06q58.874 58.874 91.967 137.215Q910 486.615 910 575.808q0 89.192-33.11 167.518-33.11 78.326-91.999 137.337-58.889 59.012-137.167 92.174Q569.447 1006 480.276 1006Z"/></svg>
                    <p>{item.nutInfo?.sodium} of sodium!</p>
                </div>
            </div>
        </div>
    )
  }
  