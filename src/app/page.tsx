"use client"
import { Map } from "../components/map"
import { useAppSelector } from '@/redux/hooks'
import { Driver } from '@/components/driver'
import { ShippingLocation } from '@/components/shippingLocation'

export default function Home() {
  const drivers = useAppSelector(state => state.driversReducer.drivers)
  const shippingLocations = useAppSelector(state => state.shippingLocationsReducer.shippingLocations)
  const driversList = drivers.map((driver) => {
    return (
      <Driver key={driver.id} driverData={driver} />
    )
  })
  const shippingLocationList = shippingLocations.map((shippingLocation) => {
    return (
      <ShippingLocation key={shippingLocation.id} shippingLocationData={shippingLocation} />
    )
  })
  return (
    <main className="flex min-h-screen flex-col items-center lg:p-24 text-black">
      <div className="relative flex flex-col lg:flex-row place-items-center mt-20 lg:mt-6 text-black">
        <div className="text-black border-double border-4 border-[#3de9a8] box-border shadow-sm shadow-[#3de9a8] overflow-auto rounded-md h-auto lg:h-[600px] w-full p-4 mt-4 lg:w-60 lg:mr-4 lg:mt-0 mb-4 lg:mb-0">
          <h2 className="text-black">CHOFERES</h2>
          {driversList}
        </div>
        <Map />
        <div className="border-double border-4 border-[#3de9a8] box-border shadow-sm shadow-[#3de9a8] overflow-auto rounded-md h-auto lg:h-[600px] w-full p-4 mt-4 lg:w-60 lg:ml-4 lg:mt-0">
          <h2>ENVIOS</h2>
          <div className="text-sm italic">
           {shippingLocationList}
          </div>
        </div>
      </div>
      <p className="italic mt-8">
        Haga click en el marcador deseado para asignar un conductor
      </p>
    </main>
  );
}
