import {Platform} from 'react-native'
import { API_URL , KEY , ANDRIOD_KEY , IOS_KEY} from 'react-native-dotenv'

 export default {
     API_URL,
     KEY,
     MAP_KEY: Platform.select({
         ios: IOS_KEY,
         android: ANDRIOD_KEY
     })
 }