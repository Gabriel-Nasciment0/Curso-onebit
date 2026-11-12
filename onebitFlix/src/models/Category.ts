import { sequelize } from "../database"
import { DataTypes, Model, Optional } from "sequelize"

// Interfaces para definir o objeto
export interface Category {
    id: number
    name: string
    position: number
    createdAt: Date
    updatedAt: Date
}

// Atributos para criação de um novo objeto
export interface CategoryCreationAttributes extends Optional<
    Category,
    "id" | "createdAt" | "updatedAt"
> {}

// Atributos para atualização de um objeto
export interface CategoryInstance
    extends Model<Category, CategoryCreationAttributes>, Category {}

// Módulo de definição do objeto
export const Category = sequelize.define<CategoryInstance, Category>(
    "Category",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },

        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },

        position: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },

        createdAt: {
            type: DataTypes.DATE,
        },

        updatedAt: {
            type: DataTypes.DATE,
        },
    },
    {
        tableName: "categories",
    },
)
