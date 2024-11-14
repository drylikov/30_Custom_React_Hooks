import React from 'react'
import useGeolocation from './useGeolocation'

export default function GeolocationComponent() {
  const { loading, error, data } = useGeolocation()

  return (
    <>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error?.message}</div>
      <div>{JSON.stringify(data, null, 2)}</div>
    </>
  )
}
