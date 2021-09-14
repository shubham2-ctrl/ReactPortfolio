import { createSlice } from "@reduxjs/toolkit";

const wallpaperInitialState = {
    firstWallpaperSelected : false,
    secondWallpaperSelected : false,
    thirdWallpaperSelected : false,


};

const wallpaperChangeSlice = createSlice({
    name : "wallpapers",
    initialState : wallpaperInitialState,
    reducers : {
        wallpaperFirst(state,action){
            let value = action.payload;
            state.firstWallpaperSelected = value;
        },
        wallpaperSecond(state,action){
            let value = action.payload;
            state.secondWallpaperSelected = value;
        },
        wallpaperThird(state,action){
            let value = action.payload;
            state.thirdWallpaperSelected = value;
        },
    }
})

export const wallpaperActions = wallpaperChangeSlice.actions;

export default wallpaperChangeSlice.reducer;