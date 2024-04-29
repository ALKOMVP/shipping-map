"use client"

import React, { useState } from "react"
import { useAppSelector } from '@/redux/hooks'
import truckIco from '../../public/icons/truck.webp'
import arrowDropdown from '../../public/icons/arrow-dropdown.svg'

export function Driver({ driverData }: any) {
    const [isToggleActive, setIsToggleActive] = useState(true)
    const shippingLocations = useAppSelector(state => state.shippingLocationsReducer.shippingLocations)
    const driverLocationsFiltered = shippingLocations.filter(location => location.selectedDriverId === driverData.id)
    const driverLocations = driverLocationsFiltered.map(driverLocation => <div key={driverLocation.id} className="text-sm italic">● {driverLocation.address}</div>)
    const onToggleDriverDropdown = () => {
        if (driverLocations.length) {
            setIsToggleActive(!isToggleActive)
        }
    }
    return (
        <div>
            <div className={"flex items-center mt-4 cursor-pointer"} onClick={onToggleDriverDropdown} >
                {driverData.name}
                <div className="rounded-lg flex justify-center items-center ml-3" style={{ backgroundColor: driverData.color }} >
                    <img src={truckIco.src} alt="truckIco" className="size-7" />
                </div>
                <img src={arrowDropdown.src} alt="arrowIco" className={`transition duration-500 ease-in-out w-[25px] ${!isToggleActive && 'rotate-180'}`} />
            </div>
            <div className={`transition duration-500 ease-in-out max-h-22 ${!isToggleActive && "max-h-0 overflow: hidden"}`}>
                {driverLocations}
            </div>
        </div>
    )
}