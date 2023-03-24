export const WeekDays: any = [
  {
    id: 0,
    day: 'S',
    value: 'Sunday',
  },
  {
    id: 1,
    day: 'M',
    value: 'Monday',
  },
  {
    id: 2,
    day: 'T',
    value: 'Tuesday',
  },
  {
    id: 3,
    day: 'W',
    value: 'Wednesday',
  },
  {
    id: 4,
    day: 'T',
    value: 'Thursday',
  },
  {
    id: 5,
    day: 'F',
    value: 'Friday',
  },
  {
    id: 6,
    day: 'S',
    value: 'Saturday',
  },
]

const MonthsArray = [
  {
    number: '0',
    monthName: 'January',
  },
  {
    number: '1',
    monthName: 'february',
  },
  {
    number: '2',
    monthName: 'March',
  },
  {
    number: '3',
    monthName: 'April',
  },
  {
    number: '4',
    monthName: 'May',
  },
  {
    number: '5',
    monthName: 'June',
  },
  {
    number: '6',
    monthName: 'July',
  },
  {
    number: '7',
    monthName: 'August',
  },
  {
    number: '8',
    monthName: 'September',
  },
  {
    number: '9',
    monthName: 'October',
  },
  {
    number: '10',
    monthName: 'November',
  },
  {
    number: '11',
    monthName: 'December',
  },
]

export const getMonthName = (currentMonth: any) => {
  let monthName: any = ''
  MonthsArray.find((month: any) => {
    if (month.number == currentMonth) {
      monthName = month.monthName
    }
  })
  return monthName
}
