"use client"

import React, { useState } from "react"
import { useAppSelector } from '@/redux/hooks'
import truckIco from '../../public/icons/truck.webp'
import arrowDropdown from '../../public/icons/arrow-dropdown.svg'

export function ShippingLocation({ shippingLocationData }: any) {
    const drivers = useAppSelector(state => state.driversReducer.drivers)
    const assignedDriverColor = drivers.find(({ id }) => id === shippingLocationData.selectedDriverId)?.color

    return (<div>
        ● {shippingLocationData.address} -  {
            assignedDriverColor ?
                <div className="rounded-lg flex justify-center items-center w-7 ml-3" style={{ backgroundColor: assignedDriverColor }} >
                    <img src={truckIco.src} alt="truckIco" className="size-7" />
                </div>
                :
                'Sin asignar'
        }
    </div>)
}