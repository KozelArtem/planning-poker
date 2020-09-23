module.exports = {
  database: {
    dialect: 'postgres',
    user: 'postgres',
    password: '1234',
    host: '127.0.0.1',
    port: 5432,
    database: 'planning_poker',
    dialectOptions: {},
    poolSettings: {},
    benchmark: true,
  },
  jwt: {
    signature: 'MySuP3R_z3kr3t',
    expiration: '6h',
  },
};
