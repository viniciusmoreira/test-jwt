const PRODUCTS = [
  {
    code: '01',
    name: 'Product 01'
  },
  {
    code: '02',
    name: 'Product 02'
  },
  {
    code: '03',
    name: 'Product 03'
  },
  {
    code: '04',
    name: 'Product 04'
  },
  {
    code: '05',
    name: 'Product 05'
  }
];

const list = (req, res) => {
  res.json(PRODUCTS)
}

const create = (req, res) => {
  const { code, name } = req.body;

  PRODUCTS.push({
    code,
    name
  });

  res.json({
    success: true
  })
}

module.exports = {
  list,
  create
}