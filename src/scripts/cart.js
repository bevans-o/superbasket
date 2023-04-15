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
  var end;

  for(var macro of nutritionalInformation){
    for (var id of macroOrder){
      if (macro["Id"] == id){
        // to remove the units at the end.
        if (id == kj || id == sodium){
          end = -2;
        } else{
          end = -1;
        }
        if(macro["Value"][0] == 'A'){
          // if the value starts with the substring "APPROX."
          var value = parseFloat(macro["Value"].slice(7, end));
        } else{
          var value = parseFloat(macro["Value"].slice(0, end));
        }
        returnInfo.push(value);
        break;
      }
    }
  }
  
  return returnInfo;

}

// returns a NutritionalInfo which has the sums of each individual macro in the cart
function basketMacroSum(foodBasket){
  var sum = new NutritionalInformation([0, 0, 0, 0, 0, 0, 0], 0)
  for (var food of foodBasket.lineItems){
    sum.carb += food.nutInfo.carb;
    sum.kj += food.nutInfo.kj;
    sum.satfat += food.nutInfo.satfat;
    sum.fat += food.nutInfo.fat;
    sum.protein += food.nutInfo.protein;
    sum.sodium += food.nutInfo.sodium;
    sum.sugar += food.nutInfo.sugar;
   }

  return sum;
}


// creates an overall health star rating of the cart

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
          nutInfo === null ? null : new NutritionalInformation(getMacros(nutInfo["Attributes"]), parseFloat(item.Quantity)),

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
  console.log(basketMacroSum(foodBasket));

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
  constructor([carb, kj, satfat, fat, protein, sodium, sugar], quantity){
    this.carb = carb*quantity; //g
    this.kj = kj*quantity; //kj
    this.fat = fat*quantity; //g
    this.protein = protein*quantity; //g
    this.satfat = satfat*quantity; //g
    this.sodium = sodium*quantity; //mg
    this.sugar = sugar*quantity; //g
  }
}

// TODO: create a function that sums up the macros
