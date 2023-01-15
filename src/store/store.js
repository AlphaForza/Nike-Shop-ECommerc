import {configureStore} from "@reduxjs/toolkit"
import sliceProduct from "./sliceProduct";
import sliceCart from "./sliceCart";
import sliceModal from "./sliceModal";
import sliceUser from "./sliceUser";

const store = configureStore({
    reducer: {
        productStore: sliceProduct,
        cartStore: sliceCart,
        modalStore: sliceModal,
        userStore: sliceUser,
    }
})
export default store
