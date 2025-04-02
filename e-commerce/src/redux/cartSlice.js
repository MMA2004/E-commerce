import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalItems: 0,
        notification: null,
        isOpenModal: false,
    },
    reducers: {
        addToCart: (state, action) => {
            let { producto, flag } = action.payload;
            const productoExistente = state.items.find(item => item.id === producto.id);
            if (productoExistente) {
                productoExistente.cantidad += 1;
            }
            else {
                state.items.push({ ...producto, cantidad: 1 });
            }
            state.totalItems += 1;
            if (flag) {
                state.notification = `${producto.nombre} añadido al carrito`;
            }

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
        toggleModal: (state) => {
            state.isOpenModal = !state.isOpenModal;
        },
        clearCart: (state) => {
            state.items = [];
            state.totalItems = 0;
        },
        clearNotification: (state) => {
            state.notification = null; // Acción para limpiar la notificación
        },
        setCart: (state, action) => {
            state.items = action.payload;
            state.totalItems = action.payload.reduce((sum, item) => sum + item.cantidad, 0);
        }
    }
});

// Exportar las acciones
export const { addToCart, removeFromCart, clearCart, clearNotification, toggleModal, setCart } = cartSlice.actions;

// Exportar el reducer
export default cartSlice.reducer;
