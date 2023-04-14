// function to determine if basket item is a food item
function isFood(department, category) {
  const departmentList = [
    "FRUIT AND VEG",
    "FRESH CONVENIENCE",
    "PROPRIETARY BAKERY",
    "BAKEHOUSE"
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
    "ICE CREAM"
  ];

  let foodDept = departmentList.includes(department);
  let foodCat = categoryList.includes(category);

  return foodDept || foodCat;
}

// pulls the relevant nutritional information from the json file
function getMacros(nutritionalInformation, quantity){

  // index of each macro.
  const kj = 759;
  const carbs = 705;
  const sugar = 909;
  const protein = 878;
  const fat = 764;
  const satfat = 253;
  const sodium = 491; 
  const macroOrder = [carbs, kj, satfat, fat, protein, sodium, sugar];

  var returnInfo = []

  for(var macro of nutritionalInformation){
    for (var id of macroOrder){
      if (macro["Id"] == id){
        returnInfo.push(macro["Value"]);
        break;
      }
    }
  }
  
  return returnInfo;

}

export function processCart(rawBasket) {
  var nonFoodBasket = {};
  nonFoodBasket.lineItems = [];
  var foodBasket = {};
  foodBasket.lineItems = [];
  //rawBasket.lineItems = [];

  rawBasket.AvailableItems.forEach((item) => {
    if (isFood(item.SapCategories.SapDepartmentName, item.SapCategories.SapCategoryName)){
      // adds food items to food item list
      
      var nutInfo = item.AdditionalAttributes.nutritionalinformation === undefined ? null : JSON.parse(item.AdditionalAttributes?.nutritionalinformation);
      console.log(item.Name + " is food");
      foodBasket.lineItems.push(
        new LineItem(
          item.Name,
          item.SalePrice,
          item.SapCategories.SapDepartmentName,
          item.SapCategories.SapCategoryName,
          item.AdditionalAttributes.healthstarrating,
          item.AdditionalAttributes.allergencontains,
          item.Quantity,
          item.LargeImageFile,
          item.PackageSize,
          nutInfo === null ? null : new NutritionalInformation(getMacros(nutInfo["Attributes"], item.Quantity)),

        )
      );
    } else {
      // adds non-food tiems to food item list
      console.log(item.Name + " is not food");
      nonFoodBasket.lineItems.push(
        new LineItem(
          item.Name,
          item.SalePrice,
          item.SapCategories.SapDepartmentName,
          item.SapCategories.SapCategoryName,
          null,
          null,
          item.quantity,
          item.LargeImageFile
        )
      );
    }
  });

  console.log(foodBasket.lineItems);
  console.log(nonFoodBasket.lineItems);

  return new Basket(foodBasket.lineItems, nonFoodBasket.lineItems);
}

export class Basket {
  constructor(foodItems, nonFoodItems) {
    this.foodItems = foodItems;
    this.nonFoodItems = nonFoodItems;
  }
}

export class LineItem {
  constructor(name, price, deptName, catName, starrating, allergencontains, quantity, image, packagesize, nutInfo) {
    this.name = name;
    this.price = price;
    this.deptName = deptName;
    this.catName = catName;
    this.starrating = starrating;
    this.allergencontains = allergencontains;
    this.quantity = quantity;
    this.image = image;
    this.packagesize = packagesize;
    this.included = true;
    this.nutInfo = nutInfo;
  }
}

export class NutritionalInformation {
  constructor([carb, kj, satfat, fat, protein, sodium, sugar]){
    this.carb = carb;
    this.kj = kj;
    this.fat = fat;
    this.protein = protein;
    this.satfat = satfat;
    this.sodium = sodium;
    this.sugar = sugar;
  }
}
