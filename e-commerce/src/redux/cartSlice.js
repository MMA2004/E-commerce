import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalItems: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            let producto = action.payload;
            const productoExistente = state.items.find(item => item.id === producto.id);
            if (productoExistente) {
                productoExistente.cantidad += 1;
            }
            else {
                state.items.push({ ...producto, cantidad: 1 });
            }
            state.totalItems += 1;
        },
        removeFromCart: (state, action) => {
            const { id, removeAll } = action.payload; // Recibir id y removeAll
            const index = state.items.findIndex(item => item.id === id);

            if (index !== -1) {
                const cantidadProducto = state.items[index].cantidad; // Guardamos la cantidad actual

                if (removeAll) {
                    // Si `removeAll` es true, restamos la cantidad total antes de eliminarlo
                    state.totalItems -= cantidadProducto;
                    state.items.splice(index, 1);
                } else {
                    // Si hay más de 1 unidad, reducimos la cantidad en 1
                    state.items[index].cantidad -= 1;
                    state.totalItems -= 1;

                    // Si la cantidad llega a 0, eliminamos el producto
                    if (state.items[index].cantidad === 0) {
                        state.items.splice(index, 1);
                    }
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalItems = 0;
        }
    }
});

// Exportar las acciones
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Exportar el reducer
export default cartSlice.reducer;
