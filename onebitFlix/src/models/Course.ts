import { sequelize } from "../database"
import { DataTypes, Model, Optional } from "sequelize"

// Interfaces para definir o objeto
export interface Course {
    id: number
    name: string
    synopsis: string
    thumbnailUrl: string | null
    featured: boolean
    categoryId: number
    createdAt: Date
    updatedAt: Date
}

// Atributos para criação de um novo objeto
export interface CourseCreationAttributes extends Optional<
    Course,
    "id" | "thumbnailUrl" | "featured" | "createdAt" | "updatedAt"
> {}

// Atributos para atualização de um objeto
export interface CourseInstance
    extends Model<Course, CourseCreationAttributes>, Course {}

// Módulo de definição do objeto
export const Course = sequelize.define<CourseInstance, Course>(
    "Course",
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

        synopsis: {
            allowNull: false,
            type: DataTypes.TEXT,
        },

        thumbnailUrl: {
            allowNull: true,
            type: DataTypes.STRING,
        },

        featured: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },

        categoryId: {
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
        tableName: "courses",
    },
)
