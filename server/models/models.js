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

const HaveAQuestions = sequelize.define('Questions', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    number: {type: DataTypes.STRING, unique: true},
    comment: {type: DataTypes.STRING},
})

const OrderCall = sequelize.define('Calls', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    number: {type: DataTypes.STRING, unique: true},
})

const Buskets = sequelize.define('Busket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    OrderId: {type: DataTypes.INTEGER},
    count: {type: DataTypes.INTEGER},
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
    BusketId: {type: DataTypes.INTEGER},
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
})

module.exports = { Products, Reviews, Orders, OrderCall, Buskets, HaveAQuestions };

Products.hasMany(Reviews);
Reviews.belongsTo(Products);

Products.hasOne(Buskets);
Buskets.belongsTo(Products);

Products.hasMany(Reviews);
Reviews.belongsTo(Products);

Orders.hasMany(Buskets);
Buskets.belongsTo(Orders);