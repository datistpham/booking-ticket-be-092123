import * as React from "react"
import Badge from "@mui/material/Badge"
import TextField from "@mui/material/TextField"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { PickersDay } from "@mui/x-date-pickers/PickersDay"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { CalendarPickerSkeleton } from "@mui/x-date-pickers/CalendarPickerSkeleton"
import getDaysInMonth from "date-fns/getDaysInMonth"
import viLocale from "date-fns/locale/vi"

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = getDaysInMonth(date)
      const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth))

      resolve({ daysToHighlight })
    }, 500)

    signal.onabort = () => {
      clearTimeout(timeout)
      reject(new DOMException("aborted", "AbortError"))
    }
  })
}


export default function D(props) {
  const requestAbortController = React.useRef(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15])
  const fetchHighlightedDays = (date) => {
    const controller = new AbortController()
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight)
        setIsLoading(false)
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          throw error
        }
      })

    requestAbortController.current = controller
  }

  React.useEffect(() => {
    fetchHighlightedDays(props.initialValue)
    // abort request on unmount
    return () => requestAbortController.current?.abort()
  }, [props.initialValue])

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort()
    }

    setIsLoading(true)
    setHighlightedDays([])
    fetchHighlightedDays(date)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={viLocale} >
      <DatePicker
        disabled={props.disable || false}
        open={props.open}
        showToolbar={true}
        disableOpenPicker={true}
        disableMaskedInput={true}
        disablePast={true}
        className="sp-1"
        closeOnSelect={true}
        todayText={"true"}
        value={props.value}
        mask={"__/__/____"}
        loading={isLoading}
        onChange={(newValue) => {
          props.setValue(newValue)
        }}
        onMonthChange={handleMonthChange}
        renderInput={(params) => <TextField {...params} />}
        renderLoading={() => <CalendarPickerSkeleton />}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected =
            !DayComponentProps.outsideCurrentMonth &&
            highlightedDays.indexOf(day.getDate()) > 0
          return (
            <Badge
              key={day.toString()}
              overlap="circular"
              badgeContent={isSelected ? "🌚" : undefined}
              className="be-1 "
            >
              <PickersDay {...DayComponentProps} />
            </Badge>
          )
        }}
        
      />
    </LocalizationProvider>
  )
}