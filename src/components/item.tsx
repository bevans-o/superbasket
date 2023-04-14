
export default function Item({item}: any) {

    console.log(item.image);

    return (
        <div className="item panel">
            <div className="item__selected"></div>
            <img className="item__image" src={item.image}></img>
            <h3 className="item__name">{item.name}</h3>
            <div className="item__price">{item.price}</div>
        </div>
    )
  }
  