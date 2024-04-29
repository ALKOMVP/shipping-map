import { configureStore } from '@reduxjs/toolkit'
import driversReducer from './features/driversSlice'
import shippingLocationsReducer from './features/shippingLocationsSlice'

export const store = configureStore({
    reducer: {
        driversReducer,
        shippingLocationsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch