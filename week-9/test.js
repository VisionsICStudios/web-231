function CellPhone (manufacturer, model, color, price)
{
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;
  this.getInfo = () => {
      return `Manufacturer: ${this.manufacturer},\nModel: ${this.model},\nColor: ${this.color},\nPrice: ${this.price}`;
  };
};

let mobile = new CellPhone('Apple','X', 'Space Gray', '$1000');
console.log(`\n${mobile.getInfo()}`);
