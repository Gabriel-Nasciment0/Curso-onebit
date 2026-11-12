import { Category } from "./Category"
import { Course } from "./Course"

// Uma categoria possui vários cursos
Category.hasMany(Course, {
    foreignKey: "categoryId",
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
})

// Um curso pertence a uma categoria
Course.belongsTo(Category, {
    foreignKey: "categoryId",
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
})

export { Category, Course }
