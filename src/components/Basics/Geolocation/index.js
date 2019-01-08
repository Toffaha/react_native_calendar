import {PermissionsAndroid} from 'react-native'

async function requestLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS
        )
    }
}