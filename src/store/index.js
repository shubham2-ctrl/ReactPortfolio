import { configureStore } from "@reduxjs/toolkit";
import mainLock from "./LockButtonSlice";
import appOpened from "./AppSlice";
import wallpaperChange from "./WallpaperSlice";


const store = configureStore({
    reducer : {isLocked : mainLock, isappOpened : appOpened, wallpaperChange }
})
export default store;