"use strict"

const commonConfig = {
    username: process.env.DB_USER || "postgres",

    password: process.env.DB_PASSWORD || "12345",

    host: process.env.DB_HOST || "localhost",

    port: Number(process.env.DB_PORT || 5432),

    dialect: "postgres",

    logging: false,
}

module.exports = {
    development: {
        ...commonConfig,

        database: process.env.DB_NAME || "onebitflix_development",
    },

    test: {
        ...commonConfig,

        database: process.env.DB_TEST_NAME || "onebitflix_test",
    },

    production: {
        ...commonConfig,

        database: process.env.DB_NAME,

        logging: false,
    },
}
