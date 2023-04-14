import Head from 'next/head'
import Card from '@/components/card'
import { useEffect, useState } from 'react'
import { processCart } from '@/scripts/cart.js'

export default function Home() {
  const [data, setData] = useState({});

  

  useEffect(() => {
    var url = new URL(window.location.toLocaleString());
    var id = url.searchParams.get("id");

    fetch("https://superbasket-55e27-default-rtdb.asia-southeast1.firebasedatabase.app/" + id + ".json")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      console.log(body);
    })
    .catch((error) => {
      console.error(error);
    })

  }, [])


  function processJson() {
    var jsonInput : HTMLInputElement | null = document.querySelector("#json-input");

    if (jsonInput == null) return;

    var raw = JSON.parse(jsonInput.value);
    var cart = processCart(raw);
    setData(cart);
  }

  return (
    <>
      <Head>
        <title>Superbasket</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <input onChange={() => processJson()} id="json-input" type="text"></input>
        <div className="flex-row">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>

        <div>
          {JSON.stringify(data)}
        </div>
        
      </main>
    </>
  )
}
