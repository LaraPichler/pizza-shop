export class PizzaModel{

  constructor(id: Number, name: String, size: Number, price: Number, image: String) {
    this._id = id;
    this._name = name;
    this._size = size;
    this._price = price;
    this._image = image;
  }


  get id(): Number {
    return this._id;
  }

  set id(value: Number) {
    this._id = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get size(): Number {
    return this._size;
  }

  set size(value: Number) {
    this._size = value;
  }

  get price(): Number {
    return this._price;
  }

  set price(value: Number) {
    this._price = value;
  }

  get image(): String {
    return this._image;
  }

  set image(value: String) {
    this._image = value;
  }

  private _id!: Number;
  private _name! : String;
  private _size! : Number;
  private _price! : Number;
  private _image! : String;

}
