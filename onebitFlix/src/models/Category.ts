import { sequelize } from "../database"
import { DataTypes, Model, Optional } from "sequelize"
// intergfaces para definir o objeto
export interface Category {
    id: number
    name: string
    position: number
}
// atributos para criação de um novo objeto
export interface CategoryCreationAttributes extends Optional<Category, "id"> {}
// atributos para atualização de um objeto
export interface CategoryInstance
    extends Model<Category, CategoryCreationAttributes>, Category {}
//modulo de definição do objeto
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
            field: "name",
        },
        position: {
            allowNull: false,
            type: DataTypes.INTEGER,
            field: "position",
        },
    },
)

