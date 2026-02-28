export default function ItemForm({ onSubmit, defaultValues = {} }) {
    return (
        <form onSubmit={onSubmit}>
            <input
                name="name"
                defaultValue={defaultValues.name}
                placeholder="Nome"
                required
            />

            <input
                name="quantity"
                type="number"
                defaultValue={defaultValues.quantity}
                placeholder="Quantidade"
                required
            />

            <input
                name="price"
                type="number"
                defaultValue={defaultValues.price}
                placeholder="Preço"
                required
            />

            <input
                name="category"
                defaultValue={defaultValues.category}
                placeholder="Categoria"
                required
            />

            <textarea
                name="description"
                defaultValue={defaultValues.description}
                placeholder="Descrição"
            />

            <button type="submit">Salvar</button>
        </form>
    )
}
