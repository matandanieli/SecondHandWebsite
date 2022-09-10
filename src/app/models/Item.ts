export default class Item {
    id: number;
    name: string;
    description: string;
    imageSource: string;
    price: number;
    city: string;
    phoneNumber: string;
    publishDate: Date;

    constructor(id: number, name: string, description: string, imageSource: string, price: number, city: string, phoneNumber: string, publishDate: Date = new Date()) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageSource = imageSource;
        this.price = price;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.publishDate = publishDate;
    }
}
