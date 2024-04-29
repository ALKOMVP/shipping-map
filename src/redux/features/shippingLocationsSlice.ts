import { createSlice } from "@reduxjs/toolkit";

interface ShippinLocation {
    id: string
    address: string
    selectedDriverId: string | null
    coordinates: { lat: number, lng: number }
}

const initialState: { shippingLocations: ShippinLocation[] } = {
    shippingLocations: [
        { id: "address-1", address: "Gavilan 1771, La Paternal", selectedDriverId: null, coordinates: { lat: -34.60836520391215, lng: -58.46809102127264 } },
        { id: "address-2", address: "Constitución 4151, Boedo", selectedDriverId: null, coordinates: { lat: -34.6287744, lng: -58.422909 } },
        { id: "address-3", address: "Cabildo 2400, Belgrano", selectedDriverId: null, coordinates: { lat: -34.5593756, lng: -58.4617654 } },
        { id: "address-4", address: "Guatemala 5033, Palermo", selectedDriverId: null, coordinates: { lat: -34.583819, lng: -58.4300969 } },
        { id: "address-5", address: "Cuenca 2473, Villa Del Parque", selectedDriverId: null, coordinates: { lat: -34.6072428, lng: -58.4905475 } },
        { id: "address-6", address: "Av. Callao 1956, Recoleta", selectedDriverId: null, coordinates: { lat: -34.5889475, lng: -58.3904012 } },
        { id: "address-7", address: "Mcal Antonio José de Sucre 4700, Villa Urquiza", selectedDriverId: null, coordinates: { lat: -34.5766235, lng: -58.4815089 } },
        { id: "address-8", address: "Roseti 429, Chacarita", selectedDriverId: null, coordinates: { lat: -34.5844355, lng: -58.4553049 } },
        { id: "address-9", address: "Av. Díaz Velez 4551, Caballito", selectedDriverId: null, coordinates: { lat: -34.608718, lng: -58.4353969 } },
        { id: "address-10", address: "Dr. Juan Felipe Aranguren 3922, Caballito", selectedDriverId: null, coordinates: { lat: -34.6283945, lng: -58.4895019 } },
        { id: "address-11", address: "Mexico 547, San Telmo", selectedDriverId: null, coordinates: { lat: -34.615540, lng: -58.3781469 } },
        { id: "address-12", address: "O'Higgins 4202, Nuñez", selectedDriverId: null, coordinates: { lat: -34.5424967, lng: -58.4676615 } },
        { id: "address-13", address: "Av. Jujuy 1974, Parque Patricios", selectedDriverId: null, coordinates: { lat: -34.6333652, lng: -58.402253 } },
        { id: "address-14", address: "Alberti 1159, San Cristobal", selectedDriverId: null, coordinates: { lat: -34.6229115, lng: -58.4054549 } },
        { id: "address-15", address: "Av. Brasil 2851, Parque Patricios", selectedDriverId: null, coordinates: { lat: -34.6328158, lng: -58.4049995 } },
        { id: "address-16", address: "Av. Asamblea 1055, Parque Chacabuco", selectedDriverId: null, coordinates: { lat: -34.6354031, lng: -58.4396567 } },
        { id: "address-17", address: "Av. Directorio 2340, Flores", selectedDriverId: null, coordinates: { lat: -34.6331096, lng: -58.4622849 } },
        { id: "address-18", address: "Nueva York 3763, Villa Devoto", selectedDriverId: null, coordinates: { lat: -34.5983596, lng: -58.5116909 } },
        { id: "address-19", address: "Potosí 3839, Almagro", selectedDriverId: null, coordinates: { lat: -34.6072296, lng: -58.4232059 } },
        { id: "address-20", address: "Carlos Pellegrini 2722, Martinez", selectedDriverId: null, coordinates: { lat: -34.4972371, lng: -58.5048409 } },

    ]
}
export const shippingLocationsSlice = createSlice({
    name: "drivers",
    initialState,
    reducers: {
        setSelectedDriverId: (state, { payload }) => {
            const { selectedAddressId, selectedDriverId } = payload
            const selectedAddressIndex = state.shippingLocations.findIndex((shippingLocation) => shippingLocation.id === selectedAddressId)
            state.shippingLocations[selectedAddressIndex].selectedDriverId = selectedDriverId
        },
        addShippingLocation: (state, newLocation) => {
            console.log(state, newLocation)
        },
    }
})

export const { addShippingLocation, setSelectedDriverId } = shippingLocationsSlice.actions

export default shippingLocationsSlice.reducer