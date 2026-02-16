import { create } from "zustand"

const useProductsStore = create((set) => ({

    productsCount: 0,
    increaseProductsCount: () => set((state) => ({ productsCount: state.productsCount + 1 })),
    decreaseProductsCount: () => set((state) => ({ productsCount: state.productsCount - 1 }))

}))


export default useProductsStore