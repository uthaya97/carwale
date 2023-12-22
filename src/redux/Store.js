import{configureStore} from '@reduxjs/toolkit'
import Cardslice from './Cardslice'
export default configureStore({
   reducer:{
        cart:Cardslice,
   }

})
