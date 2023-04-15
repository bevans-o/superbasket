## Inspiration
A healthy diet seems impossible for those without time, with 30% of Australians listing 'lack of time' as their reason for not eating healthy. But post-lockdown, online shopping is the new way busy people are buying groceries (Finder, 2021). We want to help them shop healthier. 

We wanted a time-effective shortcut to help customers be more mindful of the contents of their purchases. The need for building a food tracker tool to inform customers to spend on healthy eating is needed (Healthy Life Report, 2023).  

Our solution makes it quick and easy for online shoppers to check the healthiness and nutritional
information of their shopping basket. 

## What it does
Superbasket is a Chrome extension that analyses the healthiness of an online grocery shopping cart before checkout. Though Superbasket is not brand-specific, it is only currently made to analyse a Woolworths online shopping cart. 

## How we built it
We built the website with Next.js, styled it using BEM for CSS, and made the website prototype on Figma. 
We used Firebase for the backend, got the cart data using a chrome extension, and processed it to show the macros applicable in the user's cart. To calculate the overall health score, we factored each cart items' health star rating and the nutritional breakdown of the food. So a basket with a high ratio of sugar to carbs will decrease in score.

## Challenges we ran into
Early on, we discovered that the cart data is inaccessible unless it is on the Woolworths domain. To solve that, we added the feature of a Chrome extension to send the cart data to a database, and then retrieve it to the main website. In addition, we knew very little about food science and had to research more on the topic. 

## Accomplishments that we're proud of
* Learning how to make a Chrome extension
* Created a filtering system for summing macros depending on basket state
* The Figma Prototype of the website
* A nice Figma video presentation 
* The user experience of the project
* Delegating work effectively

## What we learned
* We learnt Firebase for the first time
* We learnt how to make a Chrome Extension
* Some of us learnt Javascript and Next.js for the first time
* We learnt more about food science in general
* Coordinating between different skill sets 

## What's next for Superbasket
* Make extension usable for big chain supermarket websites such as Coles and Aldi
* Add a feature to reccomend healthier options
* Collaborate and pitch to governments and supermarkets 
* Possibily, extend to shopping for environmental sustainable goods like clothing

## Installation Instructions
In Chrome, go to your extensions here: chrome://extensions/
Make sure the "Developer Mode" button is toggled on. Click the "load unpacked" button on the top left. Navigate to the "extension" folder in the repository and select it, and activate the Superbasket extension.

## References
### Research
* [https://www.woolworthsgroup.com.au/content/dam/wwg/investors/reports/2023/9440_HealthyLife_AR22_V9b (RGB)_singles.pdf](https://www.woolworthsgroup.com.au/content/dam/wwg/investors/reports/2023/9440_HealthyLife_AR22_V9b%20(RGB)_singles.pdf)
* [https://www.finder.com.au/million-of-australians-grocery-shopping-online#:~:text=A nationally representative survey of,initial lockdowns in early 2020](https://www.finder.com.au/million-of-australians-grocery-shopping-online#:~:text=A%20nationally%20representative%20survey%20of,initial%20lockdowns%20in%20early%202020).

### APIs
* https://www.woolworths.com.au/