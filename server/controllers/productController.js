const { json } = require('sequelize');
const {Products} = require('../models/models');

class productController {

    async getProducts(req, res) {
        try {
            const products = await Products.findAll();
            return res.json(products);
        } catch(err) {
            return json(`${err}`)
        }
    } 

    async getCurrentProducts(req, res) {
        try {
            const {types, props, sortBy} = req.body;

            const products = await Products.findAll();
            let result;

            if (types.length !== 0) {
                // sort when have types requirement
                const byTypes = types.map(type => {
                    const arr = products.map(prod => {
                        if (prod.categories.includes(type)) {
                            return prod;
                        }
                    })

                    return arr;
                })
                .flat()
                .filter(obj => {
                    if (obj !== null) {
                        return obj;
                    };
                })

                const byProps = Object.values(props).flat().map(prop => {
                    const arr = products.map(prod => {
                        if (prod.light.includes(prop.toUpperCase())) {
                            return prod;
                        }
                    })

                    return arr;
                })
                .flat()
                .filter(obj => {
                    if (obj !== null) {
                        return obj;
                    };
                })

                if (sortBy === "ПО ВОЗРОСТАНИЮ") {
                    result = byProps.concat(byTypes)
                    .sort((a, b) => a.cost - b.cost);
                } else if (sortBy === "ПО УБЫВАНИЮ") {
                    result = byProps.concat(byTypes)
                    .sort((a, b) => b.cost - a.cost);
                } else {
                    result = byProps.concat(byTypes);
                }
                
                return res.json(result)
            } else if (Object.values(props).flat().length !== 0) { 
                // sort when have no types requirement
                const byProps = props.map(prop => {
                    const arr = products.map(prod => {
                        if (prod.light.includes(prop)) {
                            return prod;
                        }
                    })

                    return arr;
                })
                .flat()
                .filter(obj => {
                    if (obj !== null) {
                        return obj;
                    };
                })

                if (sortBy === "ПО ВОЗРОСТАНИЮ") {
                    result = byProps.concat(byTypes)
                    .sort((a, b) => a.cost - b.cost);
                } else if (sortBy === "ПО УБЫВАНИЮ") {
                    result = byProps.concat(byTypes)
                    .sort((a, b) => b.cost - a.cost);
                }

                result = byProps.concat(byTypes);
                return res.json(result)
            } else {
                // sortBy when dont have any requirements
                if (sortBy === "ПО ВОЗРОСТАНИЮ") {
                    result = products.sort((a, b) => a.cost - b.cost);
                } else if (sortBy === "ПО УБЫВАНИЮ") {
                    result = products.sort((a, b) => b.cost - a.cost);
                } else {
                    result = products
                }
                return res.json(result)
            }
        } catch (err) {
            console.error(err);
        };
    }
    
    async getProduct(req, res) {
        try {
            const {id} = req.params;
            const prodArray = await Products.findByPk(+(id.slice(1)));
            return res.json(prodArray);
        } catch(err) {
            return json(`${err}`)
        }
    }

    async getProductByString(req, res) {
        try {
            const {string} = req.params;
            const prodArray = await Products.findAll({
                where: {
                    'title': string.slice(1),
                }
            })
            return res.json(prodArray);
        } catch(err) {
            return json(`${err}`)
        }
    }
    
    async setProduct(req, res) {
        try {
            const data = req.body;
            const product = await Products.create(data);
            return res.json(product);
        } catch(err) {
            return json(`${err}`)
        }
    }
};

module.exports = new productController();