import { createSlice } from "@reduxjs/toolkit";

const openAppsInitialState = {
  isAboutMeOpened: false,
  
  isSpotifyOpened: false,

  isVsCodeOpened: false,

  isChromeOpened: false,

  isPersonalize : false,

  isContact:false,
  
  arrowClicked:false
};

const openAppSlice = createSlice({
  name: "Apps",
  initialState: openAppsInitialState,
  reducers: {
    AboutMeOpened(state, action) {
      let value = action.payload;
      
      
      
      state.isAboutMeOpened = value;
    },
    SpotifyOpened(state, action) {
      let value = action.payload;
      state.zIndex +=1;
      state.isSpotifyOpened = value;
    },
    vsCodeOpened(state, action) {
      let value = action.payload;
      state.isVsCodeOpened = value;
    },
    chromeOpened(state, action) {
      let value = action.payload;
      state.isChromeOpened = value;
    },
    personalizeOpened(state, action) {
      let value = action.payload;
      state.isPersonalize = value;
    },
    contactOpened(state, action) {
      let value = action.payload;
      state.isContact = value;
     
    },
    arrowOpened(state, action) {
      let value = action.payload;
      state.arrowClicked = value;
     
    },
  }
});

export const appActions = openAppSlice.actions;

export default openAppSlice.reducer;
