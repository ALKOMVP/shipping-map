"use client"

import React, { useEffect } from "react"
import { Loader } from "@googlemaps/js-api-loader"
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setSelectedDriverId } from "@/redux/features/shippingLocationsSlice"
import shippingPackageIco from '../../public/icons/shippingPackageIco.png'
import truckIco from '../../public/icons/truck.webp'

export function Map() {
    const mapRef = React.useRef<HTMLDivElement>(null);
    const shippingLocations = useAppSelector(state => state.shippingLocationsReducer.shippingLocations)
    const drivers = useAppSelector(state => state.driversReducer.drivers)
    const dispatch = useAppDispatch();

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: "weekly"
            }
            );
            const { Map } = await loader.importLibrary('maps')
            const { AdvancedMarkerElement, PinElement } = await loader.importLibrary('marker') as google.maps.MarkerLibrary
            const centerMapPosition = {
                lat: -34.6061257,
                lng: -58.4353388
            }
            const mapOptions: google.maps.MapOptions = {
                center: centerMapPosition,
                zoom: 12,
                mapId: 'SHIPPING_MAP_ID'
            }

            const markerIco = document.createElement('img');
            markerIco.src = shippingPackageIco.src;
            const customMarker = {
                glyph: markerIco,
                borderColor: "transparent",
                background: "grey",
                glyphColor: "white",
                scale: 1.7
            }
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions)
            if (shippingLocations.length > 0) {
                shippingLocations.forEach(
                    ({ id, address, selectedDriverId, coordinates: { lat, lng } }) => {
                        const assignedDriver = drivers.find(({ id }) => id === selectedDriverId)
                        const markerIco = document.createElement('img');
                        markerIco.src = shippingPackageIco.src;
                        const customMarker = {
                            glyph: markerIco,
                            borderColor: "transparent",
                            background: assignedDriver?.color ?? "grey",
                            glyphColor: "white",
                            scale: 1.7
                        }
                        const pinBackground = new PinElement(customMarker);
                        const marker = new AdvancedMarkerElement({
                            map,
                            position: { lat, lng },
                            title: 'marker',
                            content: pinBackground.element,
                        })
                        marker.addListener('click', (e: { stop: () => void; latLng: google.maps.LatLng | google.maps.LatLngLiteral; }) => evtMarkerClick(e, id, address));
                    }
                )
            }
            var infowindow = new google.maps.InfoWindow();


            // Se aguarda a que finalice la carga de los marcadores en el mapa para poder declararle los eventos.
            google.maps.event.addListener(infowindow, 'domready', () => {
                const drivers = document.querySelectorAll('.driver-shippin-selector');
                drivers.forEach(driver => {
                    driver.addEventListener('click', (e) => {
                        const selectDriverIdPayload = { selectedAddressId: driver.getAttribute('data-address-id'), selectedDriverId: driver.getAttribute('data-driver-id') }
                        dispatch(setSelectedDriverId(selectDriverIdPayload))
                        infowindow.close();
                    });
                });
            });

            // Función que se ejecuta al hacer click en un marcador
            function evtMarkerClick(e: { stop: () => void; latLng: google.maps.LatLng | google.maps.LatLngLiteral }, addressId: string, address: string) {
                console.log(111111111, addressId)
                e.stop()
                infowindow.close();
                infowindow.setPosition(e.latLng);
                const driversFormatted = drivers.map(({ id, name, color }) =>
                    `<div key="${id}" data-driver-id="${id}" data-address-id=${addressId} class="driver-shippin-selector"
                        style="display: flex; align-items: center; margin-top:1rem; cursor:pointer">
                        <div>${name}</div> 
                        <div style="background-color: ${color}; border-radius:4px; margin-left: 8px">
                            <img src="${truckIco.src}" alt="truckIco" style="width:20px;"/>
                        </div>
                    </div>`
                ).join("")
                infowindow.setContent(
                    '<div>'
                    + `<h2><strong>${address}</strong></h2><br>`
                    + `<h3>Asignar a:</h2>`
                    + driversFormatted
                    + '</div>'
                );
                infowindow.open(map);
            }
        }
        initMap()
    }, [shippingLocations])
    return (
        <div className="w-11/12 h-[300px] lg:w-[800px] lg:h-[600px]" ref={mapRef} >
            Google Maps
        </div>
    )
}