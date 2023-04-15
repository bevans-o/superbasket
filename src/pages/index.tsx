import Head from "next/head";
import { useEffect, useState } from "react";
import {
  Basket,
  LineItem,
  processCart,
  overallHealthStar,
} from "@/scripts/cart.js";
import { getFilters } from "@/scripts/filters.js";
import Sidebar from "@/components/sidebar";
import Logo from "@/components/logo";
import Filter from "@/components/filter";
import Item from "@/components/item";
import BasketPanel from "@/components/basket";

export default function Home() {
  const [basket, setBasket] = useState<Basket>(new Basket([], []));
  const [filters, setFilters] = useState<Array<String>>([]);

  useEffect(() => {
    // retrieve id from url
    var id = new URL(window.location.toLocaleString()).searchParams.get("id");

    // query database
    fetch(
      "https://superbasket-55e27-default-rtdb.asia-southeast1.firebasedatabase.app/" +
        id +
        ".json"
    )
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        var cartReceived = body[Object.keys(body)[0]];
        console.log(cartReceived);

        // process raw woolworths cart data
        var basket: Basket = processCart(cartReceived);
        console.log(basket);
        setBasket(basket);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [filters]);

  function updateFilters() {
    setFilters(getFilters());
  }

  return (
    <>
      <Head>
        <title>Superbasket</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <header className="header">
          <Logo />
        </header>

        <Sidebar>
          <Logo />
          <div className="column-list filters">
            <h2>Filter Items</h2>
            <Filter
              onClick={updateFilters}
              display="Fruit & Veg"
              filter="Fruit & Veg"
            />
            <Filter
              onClick={updateFilters}
              display="Meat, Seafood & Deli"
              filter="Meat, Seafood & Deli"
            />
            <Filter onClick={updateFilters} display="Bakery" filter="Bakery" />
            <Filter
              onClick={updateFilters}
              display="Dairy, Eggs & Fridge"
              filter="Dairy, Eggs & Fridge"
            />
            <Filter
              onClick={updateFilters}
              display="Health & Wellness"
              filter="Health & Wellness"
            />
            <Filter
              onClick={updateFilters}
              display="Lunch Box"
              filter="Lunch Box"
            />
            <Filter onClick={updateFilters} display="Pantry" filter="Pantry" />
            <Filter
              onClick={updateFilters}
              display="Snacks & Confectionery"
              filter="Snacks & Confectionery"
            />
            <Filter
              onClick={updateFilters}
              display="Freezer"
              filter="Freezer"
            />
            <Filter onClick={updateFilters} display="Drinks" filter="Drinks" />
          </div>
        </Sidebar>

        <div id="body" className="body">
          <BasketPanel total={basket.totalPrice}>
            <div className="column-list--large">
              <div className="items column-list">
                <h2>Food Items</h2>

                {basket.foodItems.map((item: LineItem, index: number) => {
                  var active = false;
                  filters.forEach((filter: any) => {
                    if (item.pies.includes(filter)) {
                      active = true;
                    }
                  });
                  return <Item key={index} item={item} active={active} />;
                })}
              </div>

              <div className="items column-list">
                <h2>Non-Food Items</h2>

                {basket.nonFoodItems.map((item: LineItem, index: number) => {
                  var active = true;
                  return <Item key={index} item={item} active={active} />;
                })}
              </div>
            </div>

            <div className="panel insights">
              {overallHealthStar(basket.foodItems, filters)}
            </div>
          </BasketPanel>

          {/*JSON.stringify(basket)*/}
        </div>
      </main>
    </>
  );
}
