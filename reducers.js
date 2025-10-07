import { combineReducers } from 'redux'

import NavReducer from './components/MainLayout/reducer'
import ErrorReducer from './components/ErrorToast/reducer'
import JsonConvertReducer from './components/JsonConvert/reducer'
import RandomStringReducer from './components/RandomString/reducer'
import StringHandleReducer from './components/StringHandle/reducer'
import DateConvertReducer from './components/DateConvert/reducer'
import IdCardQueryReducer from './components/IdCardQuery/reducer'
import QrCodeReducer from './components/QrCode/reducer'
import Base64Reducer from './components/Base64/reducer'
import GenenateImageReducer from './components/GenerateImage/reducer'
import CurlConvertReducer from './components/CurlConvert/reducer'

export default combineReducers({
    NavReducer,
    ErrorReducer,
    JsonConvertReducer,
    RandomStringReducer,
    StringHandleReducer,
    DateConvertReducer,
    IdCardQueryReducer,
    QrCodeReducer,
    Base64Reducer,
    GenenateImageReducer,
    CurlConvertReducer,
})