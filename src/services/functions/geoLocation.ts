import type { ICoordinates } from '../type'

export function getGeoRequest(): Promise<ICoordinates> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        // save the latitude and longitude data to the Firebase database
        resolve({ latitude, longitude })
      },
      (error) => {
        console.error(getErrorMessage(error))
        reject(error)
      }
    )
  })
}

function getErrorMessage(error: GeolocationPositionError): string {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return 'User denied the request for geolocation.'
    case error.POSITION_UNAVAILABLE:
      return 'Location information is unavailable.'
    case error.TIMEOUT:
      return 'The request to get user location timed out.'
    default:
      return 'An unknown error occurred.'
  }
}
