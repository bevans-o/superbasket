// function to determine if basket item is a food item
function isFood(department, category) {
  const departmentList = [
    "FRUIT AND VEG",
    "FRESH CONVENIENCE",
    "PROPRIETARY BAKERY",
    "BAKEHOUSE",
  ];
  const categoryList = [
    "VEG",
    "FRESHCUTS",
    "HARD PRODUCE",
    "FRUIT",
    "MEAT CONVENIENCE",
    "FROZEN MEALS",
    "LONGLIFE JUICE",
    "DRINKS",
    "HEALTH FOODS",
    "BISCUITS",
    "CONDIMENTS",
    "CONFECTIONERY",
    "FREEZER - POULTRY",
    "ICE CREAM",
    "HEALTH FOODS",
    "SNACKS",
    "PREPARED FOODS",
    "PASTA / RICE",
    "CARBONATED SOFT DRINKS",
    "CANNED FRUIT / DESSERTS",
    "ETHNIC / GOURMET FOOD",
  ];

  let foodDept = departmentList.includes(department);
  let foodCat = categoryList.includes(category);

  return foodDept || foodCat;
}

// pulls the relevant nutritional information from the json file
function getMacros(nutritionalInformation, quantity) {
  if (nutritionalInformation == null) {
    return;
  }

  // index of each macro.
  const kj = 759;
  const carbs = 705;
  const sugar = 909;
  const protein = 878;
  const fat = 764;
  const satfat = 253;
  const sodium = 491;
  const macroOrder = [carbs, kj, satfat, fat, protein, sodium, sugar];

  var returnInfo = [];
  var end;

  for (var macro of nutritionalInformation) {
    for (var id of macroOrder) {
      if (macro["Id"] == id) {
        // to remove the units at the end.
        if (id == kj || id == sodium) {
          end = -2;
        } else {
          end = -1;
        }
        if (macro["Value"][0] == "A") {
          // if the value starts with the substring "APPROX."
          var value = parseFloat(macro["Value"].slice(7, end));
        } else if (macro["Value"][0] == "<") {
          var value = parseFloat(macro["Value"].slice(1, end));
        } else {
          var value = parseFloat(macro["Value"].slice(0, end));
        }
        if (isNaN(value)) {
          console.log("AAAAAA");
          value = 0;
        }
        returnInfo.push(value);
        break;
      }
    }
  }

  return returnInfo;
}

// returns a NutritionalInfo which has the sums of each individual macro in the cart
export function basketMacroSum(foodItems, activeFilters) {
  // console.log(activeFilters);
  var sum = new NutritionalInformation([0, 0, 0, 0, 0, 0, 0], 0);
  // console.log(foodBasket);
  // console.log("sdkfjslkd;f");
  for (var food of foodItems) {
    var active = false;
    activeFilters.forEach((filter) => {
      if (food.pies.includes(filter)) {
        active = true;
      }
    });

    if (!active) continue;

    if (food.nutInfo != null) {
      const sugar = isNaN(food.nutInfo.sugar) ? "0" : food.nutInfo.sugar;
      sum.carb += food.nutInfo.carb;
      sum.kj += food.nutInfo.kj;
      sum.satfat += food.nutInfo.satfat;
      sum.fat += food.nutInfo.fat;
      sum.protein += food.nutInfo.protein;
      sum.sodium += food.nutInfo.sodium;
      sum.sugar += sugar;
    }
  }
  console.log(sum.sugar);
  return sum;
}

function subtractingHealth(macroSum) {
  var minus = 0;
  var ratio = 0;
  // console.log("subtracting health");
  console.log("carb: " + macroSum.carb);
  console.log("sugar" + macroSum.sugar);
  // ratio = macroSum.sugar / macroSum.carb;
  minus = -6 / (2 * ratio - 2.2);

  // console.log(minus);
  return minus;
}

// creates an overall health star rating of the cart
export function overallHealthStar(foodItems, activeFilters) {
  // console.log("yahoo");
  // console.log(foodItems);
  var itemCount = 0;
  var totalStars = 0;
  var macroSum = basketMacroSum(foodItems, activeFilters);

  for (var food of foodItems) {
    var active = false;
    activeFilters.forEach((filter) => {
      if (food.pies.includes(filter)) {
        active = true;
      }
    });

    if (!active) continue;

    if (food.starrating != 0 && food.starrating != null) {
      totalStars += Number(food.quantity) * Number(food.starrating);
    }
    itemCount += Number(food.quantity);
  }
  var final = Math.round(
    (totalStars / itemCount) * 20 - subtractingHealth(macroSum)
  );

  console.log(final);
  return final;
}

export function processCart(rawBasket) {
  var nonFoodBasket = {};
  nonFoodBasket.lineItems = [];
  var foodBasket = {};
  foodBasket.lineItems = [];
  //rawBasket.lineItems = [];

  rawBasket.AvailableItems.forEach((item) => {
    if (
      isFood(
        item.SapCategories.SapDepartmentName,
        item.SapCategories.SapCategoryName
      )
    ) {
      // adds food items to food item list

      var nutInfo =
        item.AdditionalAttributes.nutritionalinformation === undefined
          ? null
          : JSON.parse(item.AdditionalAttributes?.nutritionalinformation);
      // console.log(item.AdditionalAttributes.piesdepartmentnamesjson);
      // console.log(item.Name + " is food");
      foodBasket.lineItems.push(
        new LineItem(
          item.Name,
          item.SalePrice,
          item.SapCategories.SapDepartmentName,
          item.SapCategories.SapCategoryName,
          item.Quantity,
          item.LargeImageFile,
          item.PackageSize,
          nutInfo === null
            ? null
            : new NutritionalInformation(
                getMacros(nutInfo["Attributes"]),
                parseFloat(item.Quantity)
              ),
          item.AdditionalAttributes.healthstarrating,
          item.AdditionalAttributes.allergencontains,
          item.AdditionalAttributes.piesdepartmentnamesjson
        )
      );
    } else {
      // adds non-food tiems to food item list
      // console.log(item.Name + " is not food");
      nonFoodBasket.lineItems.push(
        new LineItem(
          item.Name,
          item.SalePrice,
          item.SapCategories.SapDepartmentName,
          item.SapCategories.SapCategoryName,
          item.Quantity,
          item.LargeImageFile
        )
      );
    }
  });

  // console.log(foodBasket.lineItems);
  // console.log(nonFoodBasket.lineItems);
  // //console.log(basketMacroSum(foodBasket));
  // /*console.log(
  //   "avg health star: " +
  //     overallHealthStar(
  //       foodBasket,
  //       basketMacroSum(foodBasket, ["Fruit & Veg", "Bakery", "Pantry"])
  //     )
  // );*/

  return new Basket(
    foodBasket.lineItems,
    nonFoodBasket.lineItems,
    rawBasket.Totals.SubTotal
  );
}

export class Basket {
  constructor(foodItems, nonFoodItems, totalPrice) {
    this.foodItems = foodItems;
    this.nonFoodItems = nonFoodItems;
    this.totalPrice = "$" + totalPrice;
  }
}

export class LineItem {
  constructor(
    name,
    price,
    deptName,
    catName,
    quantity,
    image,
    packagesize,
    nutInfo,
    starrating,
    allergencontains,
    pies
  ) {
    this.name = name;
    this.price = price;
    this.deptName = deptName;
    this.catName = catName;
    this.quantity = quantity;
    this.image = image;
    this.packagesize = packagesize;
    this.included = true;
    this.nutInfo = nutInfo;
    this.starrating = starrating;
    this.allergencontains = allergencontains;
    this.pies = pies;
  }
}

export class NutritionalInformation {
  constructor([carb, kj, satfat, fat, protein, sodium, sugar], quantity) {
    this.carb = carb * quantity; //g
    this.kj = kj * quantity; //kj
    this.fat = fat * quantity; //g
    this.protein = protein * quantity; //g
    this.satfat = satfat * quantity; //g
    this.sodium = sodium * quantity; //mg
    this.sugar = sugar * quantity; //g
  }
}

// TODO: create a function that sums up the macros
