
export default function BasketPanel({total, children}: any) {

    return (
        <div className="basket panel">
            <div className="basket__header">
                <h1>Your Basket</h1>
                <h2>{total}</h2>
            </div>

            <div className="basket__content"> 
                {children}
            </div>
            
        </div>
    )
  }
  