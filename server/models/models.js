const sequelize = require('../db');
const {DataTypes, INTEGER, STRING} = require('sequelize');

const Products = sequelize.define('Products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    cost: {type: INTEGER, allowNull: false},
    title: {type: STRING, allowNull: false},
    imgs: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false,},
    colors: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false,},
    light: {type: DataTypes.STRING, allowNull: false,},
    format: {type: DataTypes.STRING, allowNull: false,},
    flowers: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false,},
    description: {type: DataTypes.STRING, allowNull: false,},
    categories: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false,},
    topics: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false,},
})

const CorporativeClients = sequelize.define('CorporativeClients', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    organisationName: {type: DataTypes.STRING, allowNull: false},
    mailIndex: {type: DataTypes.STRING, allowNull: false},
    contactPerson: {type: DataTypes.STRING, allowNull: false},
    contactNumber: {type: DataTypes.STRING, allowNull: false},
    busketAmount: {type: DataTypes.STRING, allowNull: false},
    emailAdress: {type: DataTypes.STRING, allowNull: false},
    YNP: {type: DataTypes.STRING, allowNull: false},
    currentAccount: {type: DataTypes.STRING, allowNull: false},
    bankCode: {type: DataTypes.STRING, allowNull: false},
    countOfOrders: {type: DataTypes.STRING, allowNull: false},
})

const OrderCall = sequelize.define('Calls', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    message: {type: DataTypes.STRING},
    number: {type: DataTypes.STRING, unique: true},
})

const Reviews = sequelize.define('Review', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    review: {type: DataTypes.STRING, allowNull: false,},
    name: {type: DataTypes.STRING, allowNull: false,},
    mail: {type: DataTypes.STRING, allowNull: false,},
    rating: {type: DataTypes.INTEGER, allowNull: false,},
    ProductId: {type: DataTypes.INTEGER},
})

const Orders = sequelize.define('Order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    number: {type: DataTypes.STRING, unique: true},
    mail: {type: DataTypes.STRING, unique: true},
    personName: {type: DataTypes.STRING},
    personNumber: {type: DataTypes.STRING},
    comment: {type: DataTypes.STRING},
    deliveryType: {type: DataTypes.STRING},
    city: {type: DataTypes.STRING},
    street: {type: DataTypes.STRING},
    corp: {type: DataTypes.STRING},
    house: {type: DataTypes.STRING},
    office: {type: DataTypes.STRING},
    deliveryTime: {type: DataTypes.STRING},
    paymentTime: {type: DataTypes.STRING},
    orderedProducts: {type: DataTypes.STRING, allowNull: false}
})

module.exports = { Products, Reviews, Orders, OrderCall, CorporativeClients };

Products.hasMany(Reviews);
Reviews.belongsTo(Products);

Products.hasMany(Reviews);
Reviews.belongsTo(Products);