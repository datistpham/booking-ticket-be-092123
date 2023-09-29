import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources= {
    eng: {
        translation: {
            "Chuyến bay":"Flight",
            "Khách sạn": "Hotel",
            "Chuyến bay + khách sạn": "Combo",
            "Vé máy bay": "Airline tickets",
            "Phòng khách sạn": "Hotel rooms"
        }
    },
    vie: {
        translation: {
            "Chuyến bay": "Chuyến bay",
            "Khách sạn": "Khách sạn",
            "Chuyến bay + khách sạn": "Chuyến bay + khách sạn",
            "Vé máy bay": "Vé máy bay",
            "Phòng khách sạn": "Phòng khách sạn"
        }
    }
}

i18n
.use(initReactI18next)
.init({
    resources,
    lng: localStorage.getItem("lang") ? localStorage.getItem("lang").toLocaleLowerCase() : "vie",
    interpolation: {
        escapeValue: false
    }
})
export default i18n