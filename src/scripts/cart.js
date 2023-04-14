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
  ];

  let foodDept = departmentList.includes(department);
  let foodCat = categoryList.includes(category);

  console.log(foodDept || foodCat);

  return foodDept || foodCat;
}

export function processCart(rawBasket) {
  var nonFoodBasket = {};
  nonFoodBasket.lineItems = [];
  var foodBasket = {};
  foodBasket.lineItems = [];
  rawBasket.lineItems = [];

  rawBasket.AvailableItems.forEach((item) => {
    if (
      isFood(
        item.SapCategories.SapDepartmentName,
        item.SapCategories.SapCategoryName
      )
    ) {
      // adds food items to food item list?
      console.log("IS FOOD");
      foodBasket.lineItems.push(
        new LineItem(
          item.Name,
          item.SalePrice,
          item.SapCategories.SapDepartmentName,
          item.SapCategories.SapCategoryName,
          item.AdditionalAttributes.allergencontains
        )
      );
    } else {
      // adds non-food tiems to food item list
      nonFoodBasket.lineItems.push(
        new LineItem(
          item.Name,
          item.SalePrice,
          item.SapCategories.SapDepartmentName,
          item.SapCategories.SapCategoryName
        )
      );
    }
  });

  console.log(foodBasket.lineItems);
  console.log(nonFoodBasket.lineItems);

  return [foodBasket, nonFoodBasket];
}

export class LineItem {
  constructor(name, price, deptName, catName, allergencontains) {
    this.name = name;
    this.price = price;
    this.deptName = deptName;
    this.catName = catName;
    this.allergencontains = allergencontains;
  }
}

export class NutritionalInformation {}
