function isFood(department, category) {
  const departmentList = [
    "FRUIT AND VEG",
    "FRESH CONVENIENT",
    "PROPRIETARY BAKERY",
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
    "CONFECTIONERY"
  ];

  let foodDept = departmentList.includes(department);
  let foodCat = categoryList.includes(category);

  return foodDept || foodCat;
}

export function processCart(rawBasket) {
  var nonFoodBasket = {};
  nonFoodBasket.lineItems = [];
  var foodBasket = {};
  foodBasket.lineItems = [];
  rawBasket.lineItems = [];

  rawBasket.AvailableItems.forEach((item) => {
    if (isFood(item.SapCategories.SapDepartmentName, item.SapCategories.SapCategoryName)){
      // adds food items to food item list
      var nutInfo = item.AdditionalAttributes.nutritionalinformation;
      console.log(nutInfo);
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
          item.AdditionalAttributes.nutritionalinformation

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
          item.quantity,
          item.LargeImageFile
        )
      );
    }
  });

  console.log(foodBasket.lineItems);
  console.log(nonFoodBasket.lineItems);

  return [foodBasket, nonFoodBasket];
}

export class LineItem {
  constructor(name, price, deptName, catName, starrating, allergencontains, nutInfo, quantity, image, packagesize) {
    this.name = name;
    this.price = price;
    this.deptName = deptName;
    this.catName = catName;
    this.starrating = starrating;
    this.allergencontains = allergencontains;
    this.nutInfo = nutInfo;
    this.quantity = quantity;
    this.image = image;
    this.included = true;
    this.packagesize = packagesize;
  }
}

export class NutritionalInformation {}
