// create superbasket elements
var superbasketText = document.createElement("h3");
var superbasketIcon = document.createElement("svg");
var superbasketButton = document.createElement("a");
superbasketText.innerText = "Analyse your basket with"
superbasketButton.classList.add("superbasket-button");
superbasketButton.appendChild(superbasketText);
superbasketButton.appendChild(superbasketIcon);
superbasketButton.target = "_blank";
superbasketText.outerHTML += '<svg width="124" height="18" viewBox="0 0 248 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.9645 27.343C43.0885 29.395 46.3645 30.511 49.5685 30.511C54.5005 30.511 57.4525 27.739 57.4525 24.247C57.4525 20.971 53.9245 19.891 51.4045 19.135C49.8205 18.667 48.7765 18.235 48.7765 17.551C48.7765 16.867 49.4245 16.327 50.7205 16.327C52.8085 16.327 54.9685 17.479 55.8325 18.451L58.4605 15.067C56.5525 13.303 53.6365 12.259 50.7205 12.259C45.8965 12.259 43.2685 15.247 43.2685 18.379C43.2685 21.403 46.5445 22.555 49.0285 23.347C50.6485 23.851 51.9085 24.355 51.9085 25.147C51.9085 25.903 51.1885 26.479 50.0725 26.479C47.6245 26.479 44.8885 25.003 43.8085 23.851L40.9645 27.343Z" fill="white"/><path d="M62.11 12.691L59.446 24.571C59.374 24.931 59.266 25.687 59.266 26.011C59.266 28.639 61.354 30.511 64.846 30.511C67.438 30.511 69.166 29.179 70.498 27.955L69.994 30.079H75.538L79.39 12.691H73.846L71.398 23.887C70.534 24.715 69.31 25.615 67.834 25.615C66.43 25.615 65.278 25.075 65.278 23.671C65.278 23.419 65.35 23.059 65.422 22.735L67.618 12.691H62.11Z" fill="white"/><path d="M84.8187 28.027C85.9707 29.647 87.9507 30.511 90.1107 30.511C96.1587 30.511 99.2907 24.499 99.2907 19.495C99.2907 14.851 96.6627 12.259 92.7387 12.259C90.8307 12.259 89.2827 12.979 87.7707 14.707L88.2387 12.691H82.6947L77.3667 36.703H82.9107L84.8187 28.027ZM93.5667 20.647C93.5667 23.347 91.6947 25.615 89.1747 25.615C87.6987 25.615 86.4387 24.967 85.7187 24.031L86.8707 18.775C87.7347 17.839 88.8867 17.155 90.1827 17.155C92.0547 17.155 93.5667 18.523 93.5667 20.647Z" fill="white"/><path d="M100.006 22.627C100.006 27.631 103.714 30.511 109.258 30.511C111.382 30.511 113.758 29.971 115.45 28.819L113.758 25.147C112.822 25.831 111.13 26.227 109.69 26.227C106.81 26.227 105.514 24.211 105.514 23.347V23.131H117.826C117.97 22.519 118.186 21.187 118.186 20.107C118.186 15.031 114.586 12.259 110.194 12.259C104.254 12.259 100.006 17.047 100.006 22.627ZM106.054 19.531C106.342 18.199 107.854 16.543 109.942 16.543C112.354 16.543 113.29 18.163 113.29 19.279C113.29 19.351 113.29 19.459 113.254 19.531H106.054Z" fill="white"/><path d="M123.869 30.079L126.245 19.171C127.217 18.163 128.693 17.479 130.241 17.479C130.997 17.479 131.753 17.623 132.041 17.695L133.229 12.259C130.601 12.259 128.657 13.303 127.217 14.851L127.721 12.691H122.177L118.325 30.079H123.869Z" fill="white"/><path d="M137.081 28.027C138.233 29.647 140.213 30.511 142.373 30.511C148.421 30.511 151.553 24.499 151.553 19.495C151.553 14.851 148.925 12.259 145.001 12.259C143.093 12.259 141.545 12.979 140.033 14.707L141.941 6.06698H136.397L131.105 30.079H136.649L137.081 28.027ZM145.829 20.647C145.829 23.347 143.957 25.615 141.437 25.615C139.961 25.615 138.701 24.967 137.981 24.031L139.133 18.775C139.997 17.839 141.149 17.155 142.445 17.155C144.317 17.155 145.829 18.523 145.829 20.647Z" fill="white"/><path d="M166.738 14.743C165.622 13.123 163.606 12.259 161.446 12.259C155.398 12.259 152.302 18.271 152.302 23.311C152.302 27.955 154.93 30.511 158.818 30.511C160.762 30.511 162.31 29.755 163.786 28.063L163.354 30.079H168.862L172.714 12.691H167.206L166.738 14.743ZM158.026 22.159C158.026 19.423 159.862 17.155 162.418 17.155C163.894 17.155 165.154 17.803 165.874 18.739L164.686 23.995C163.858 24.967 162.706 25.615 161.41 25.615C159.502 25.615 158.026 24.247 158.026 22.159Z" fill="white"/><path d="M171.628 27.343C173.752 29.395 177.028 30.511 180.232 30.511C185.164 30.511 188.116 27.739 188.116 24.247C188.116 20.971 184.588 19.891 182.068 19.135C180.484 18.667 179.44 18.235 179.44 17.551C179.44 16.867 180.088 16.327 181.384 16.327C183.472 16.327 185.632 17.479 186.496 18.451L189.124 15.067C187.216 13.303 184.3 12.259 181.384 12.259C176.56 12.259 173.932 15.247 173.932 18.379C173.932 21.403 177.208 22.555 179.692 23.347C181.312 23.851 182.572 24.355 182.572 25.147C182.572 25.903 181.852 26.479 180.736 26.479C178.288 26.479 175.552 25.003 174.472 23.851L171.628 27.343Z" fill="white"/><path d="M206.777 30.079L202.133 20.611L210.305 12.691H203.393L196.805 19.351L199.757 6.06698H194.213L188.921 30.079H194.465L195.365 25.903L197.597 23.815L200.117 30.079H206.777Z" fill="white"/><path d="M208.256 22.627C208.256 27.631 211.964 30.511 217.508 30.511C219.632 30.511 222.008 29.971 223.7 28.819L222.008 25.147C221.072 25.831 219.38 26.227 217.94 26.227C215.06 26.227 213.764 24.211 213.764 23.347V23.131H226.076C226.22 22.519 226.436 21.187 226.436 20.107C226.436 15.031 222.836 12.259 218.444 12.259C212.504 12.259 208.256 17.047 208.256 22.627ZM214.304 19.531C214.592 18.199 216.104 16.543 218.192 16.543C220.604 16.543 221.54 18.163 221.54 19.279C221.54 19.351 221.54 19.459 221.504 19.531H214.304Z" fill="white"/><path d="M228.699 26.407C228.699 29.215 231.075 30.511 234.459 30.511C235.611 30.511 236.799 30.259 237.447 29.755L237.375 25.327C237.195 25.471 236.691 25.615 236.295 25.615C235.179 25.615 234.639 25.039 234.639 24.175C234.639 23.995 234.675 23.671 234.747 23.383L236.043 17.479H239.571L240.651 12.691H237.123L238.167 7.93898H232.623L231.579 12.691H228.699L227.619 17.479H230.499L228.807 25.147C228.735 25.615 228.699 26.191 228.699 26.407Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.579H36.9371L30.2705 30.579H6.66667L0 10.579ZM6.93713 15.579L10.2705 25.579H26.6667L30 15.579H6.93713Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M27.004 7.61453L18.4685 0L9.93298 7.61453H15.6617L18.4685 5.1106L21.2753 7.61453H27.004Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4886 13.3618L15.4484 12.7961L17.346 26.079H19.5911L21.4886 12.7961L25.4484 13.3618L23.0603 30.079H13.8768L11.4886 13.3618Z" fill="white"/></svg>'

// link font files
var fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700&display=swap";
document.querySelector("head").append(fontLink);

// call database on cart open
var cartButton = document.querySelector("#header-view-cart-button");
cartButton.addEventListener('click', fetchCart);






function generateID(length) {
    var id = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let i = 0;
    while (i < length) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
        i += 1;
    }

    return id;
}

async function fetchCart() {
    fetch("https://www.woolworths.com.au/apis/ui/Trolley")
    .then((response) => {

        // insert superbasket button
        var checkoutContainer = document.querySelector(".cart-checkout");
        var checkoutLower = document.querySelector(".cart-checkout-content");
        checkoutContainer.insertBefore(superbasketButton, checkoutLower);

        return response.json();
    })
    .then((body) => {
        console.log(body);

        // generate random id to identify basket
        var id = generateID(12);

        
        // post cart to database
        var data = JSON.stringify({
          "id": id,
          "basket": body  
        });

        fetch("https://superbasket-55e27-default-rtdb.asia-southeast1.firebasedatabase.app/" + id + ".json", {
          method: "POST",
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "omit", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: data, // body data type must match "Content-Type" header
        })
        .then((response) => {
          console.log(response);
        })
        .error((error) => {
          console.error(error);
        })

        // open superbasket
        superbasketButton.href = "https://superbasket.vercel.app/?id=" + id;
    })
}
