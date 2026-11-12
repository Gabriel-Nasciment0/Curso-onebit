import { Sequelize } from "sequelize"

export const sequelize = new Sequelize({
    dialect: "postgres",

    host: process.env.DB_HOST || "localhost",

    port: Number(process.env.DB_PORT || 5432),

    database: process.env.DB_NAME || "onebitflix_development",

    username: process.env.DB_USER || "postgres",

    password: process.env.DB_PASSWORD || "12345",

    define: {
        underscored: true,
    },

    logging: false,
})
