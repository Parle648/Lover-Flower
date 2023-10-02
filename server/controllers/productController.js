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

            console.log(types, props, sortBy);

            const products = await Products.findAll();
            let result;

            if (types.legth !== 0) {
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

                console.log( Object.values(props).flat());
            
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
                
                console.log(new Set(result));
                return res.json(result)
            } else if (props.legth !== 0) { 
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
                    result = byProps.concat(byTypes)
                    .sort((a, b) => a.cost - b.cost);
                } else if (sortBy === "ПО УБЫВАНИЮ") {
                    result = byProps.concat(byTypes)
                    .sort((a, b) => b.cost - a.cost);
                }
            }

            return res.json(result)
        } catch (err) {
            console.error(err);
        };
    }
    
    // async getSortedProducts(req, res) {
    //     try {
    //         const {string} = req.params; 
    //         const products = await Products.findAll();
    //         return res.json(products.filter(obj => obj.categories.includes(string.slice(1))));
    //     } catch(err) {
    //         return json(`${err}`)
    //     }
    // } 
    
    // async getSortedByDecreasing(req, res) {
    //     try {
    //         const {types, params} = req.body; 

    //         const products = await Products.findAll();

    //         const sorted = types.map(type => {
    //             const arr = products.map(prod => {
    //                 if (prod.categories.includes(type)) {
    //                     return prod;
    //                 }
    //             })

    //             return arr;
    //         })
    //         .flat()
    //         .filter(obj => {
    //             if (obj !== null) {
    //                 return obj;
    //             };
    //         })

    //         return res.json(
    //             sorted.sort((a, b) => b.cost - a.cost)
    //         );
    //     } catch(err) {
    //         return json(`${err}`)
    //     }
    // } 
    
    // async getSortedByIncreasing(req, res) {
    //     try {
    //         const {types, params} = req.body; 

    //         const products = await Products.findAll();

    //         const sorted = types.map(type => {
    //             const arr = products.map(prod => {
    //                 if (prod.categories.includes(type)) {
    //                     return prod;
    //                 }
    //             })

    //             return arr;
    //         })
    //         .flat()
    //         .filter(obj => {
    //             if (obj !== null) {
    //                 return obj;
    //             };
    //         })

    //         return res.json(
    //             sorted.sort((a, b) => a.cost - b.cost)
    //         );

    //     } catch(err) {
    //         return json(`${err}`)
    //     }
    // } 

    async getProduct(req, res) {
        try {
            const {id} = req.params;
            const prodArray = await Products.findByPk(id);
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