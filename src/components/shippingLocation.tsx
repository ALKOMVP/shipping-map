"use client"

export function ShippingLocation({ shippingLocationData }: any) {

    return (
        <div>
            ● {shippingLocationData.address}
        </div>
    )
}