import { createSlice } from "@reduxjs/toolkit";

export interface Driver {
    id: string,
    name: string,
    color: string
}

const initialState: { drivers: Driver[] } = {
    drivers: [
        { id: "driver-1", name: "Chofer 1", color: "red" },
        { id: "driver-2", name: "Chofer 2", color: "blue" },
        { id: "driver-3", name: "Chofer 3", color: "green" },
        { id: "driver-4", name: "Chofer 4", color: "yellow" },
        { id: "driver-5", name: "Chofer 5", color: "purple" },
    ]
}
export const driversSlice = createSlice({
    name: "drivers",
    initialState,
    reducers: {
        addDriver: (state, newDriver) => {
            console.log(state, newDriver)
        },
    }
})

export const { addDriver } = driversSlice.actions

export default driversSlice.reducer