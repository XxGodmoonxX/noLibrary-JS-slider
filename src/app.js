import additionCalculator from "./addition-calculator";
import taxCalculator from "./tax-calculator";
import "./style.css";

const item1Price = 400;
const item2Price = 600;
const totalPrice = additionCalculator(item1Price, item2Price);
const tax = 1.08;
const priceIncludeTax = taxCalculator(totalPrice, tax);

console.log(priceIncludeTax);
