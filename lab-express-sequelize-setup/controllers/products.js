const { Product } = require('../models');
const { layout } = require('../utils');

const list = async (req, res) => {
    const products = await Product.findAll();
    res.render('products/list', {
        locals: {
            products
        },
        ...layout
    });
};

const showForm = (req, res) => {
    res.render('products/form', {
        ...layout
    });
};

const processForm = async (req, res) => {
    const {
        name,
        price,
        color,
        description
    } = req.body;
    const newProduct = await Product.create({
        name,
        price: parseFloat(price),
        color,
        description
    });
    console.log(newProduct);
    res.redirect(req.baseUrl);
};

module.exports = {
    list,
    showForm,
    processForm
}
