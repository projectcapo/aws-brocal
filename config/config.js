module.exports = {
    development: {
      username: 'root',
      password: 'root',
      database: 'brocal_db',
      host: '127.0.0.1',
      port: 8889,
      dialect: 'mysql'
    },
    test: {
        username: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        database: 'brocal_db',
        host: process.env.RDS_HOSTNAME,
        port : process.env.RDS_PORT,
      dialect: 'mysql'
    },
    production: {
      username: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      database: 'brocal_db',
      host: process.env.RDS_HOSTNAME,
      port : process.env.RDS_PORT,
      dialect: 'mysql'
    }
}