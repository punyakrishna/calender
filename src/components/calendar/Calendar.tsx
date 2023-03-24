import { useEffect, useState } from "react"
import { StyledCalendar } from "./StyledCalendar";
import moment from 'moment';
import { Grid } from "@mui/material";
import { getMonthName, WeekDays } from "./CalendarUtils";

export interface ICalendarProps {
    date: string
}

const Calendar = (CalendarProps: ICalendarProps) => {

    const date = new Date(CalendarProps.date)

    const [weekDays, setWeekDays] = useState<any>(WeekDays);
    const [currentMonth, setCurrentMonth] = useState<any>(new Date(date).getMonth());
    const [currentMonthName, setCurrentMonthName] = useState<any>(moment(new Date(date)).format('MMMM'));
    const [currentYear, setCurrentYear] = useState<any>(new Date(date).getFullYear());
    const [dateArray, setDateArray] = useState<any>();

    useEffect(() => {
        getDaysArray(currentMonth)
    }, [currentMonth])

    const onClickOnLeftArrow = () => {
        if (currentMonth <= 11 && currentMonth > 0) {
            setCurrentMonth(currentMonth - 1)
            setCurrentMonthName(getMonthName(currentMonth - 1))
        } else if (currentMonth <= 0) {
            setCurrentYear(currentYear - 1)
            setCurrentMonth(11)
            setCurrentMonthName(getMonthName(11))
        }
    }
    const onClickOnRightArrow = () => {
        if (currentMonth < 11 && currentMonth >= 0) {
            setCurrentMonth(currentMonth + 1)
            setCurrentMonthName(getMonthName(currentMonth + 1))
        } else if (currentMonth >= 11) {
            setCurrentYear(currentYear + 1)
            setCurrentMonth(0)
            setCurrentMonthName(getMonthName(0))
        }
    }

    const getDaysArray = (currentMonth: any) => {
        var date = new Date(currentYear, currentMonth, 1);
        var result: any = [];
        while (date.getMonth() == currentMonth) {
            result.push(
                {
                    date: date.getDate(),
                    day: WeekDays[date.getDay()].value,
                    isSelected: false,
                });
            date.setDate(date.getDate() + 1);
        }
        setDateArray(result)
    }

    const formatResponseOfArray = (monthArray: any) => {
        for (let date of dateArray) {
            for (let week of WeekDays) {
                if (date.day === week.value) {
                    break;
                } else {
                    monthArray.unshift({ date: '' })
                }
            }
            break
        }
    }

    const StructureDateAndDays = () => {
        let monthArray: Array<any> = dateArray
        if (dateArray && dateArray?.length) {
            formatResponseOfArray(monthArray)
        }
        return (
            <Grid container className="dates-container" >
                {monthArray?.map((item, index) => {
                    return (
                        <Grid key={index} item xs={1.6}>
                            <Grid container>
                                <Grid item className={item.date === date.getDate() && (date.getMonth() === currentMonth) ? 'selected-date' : 'dates'} >
                                    <div style={{ display: "flex", flexDirection: 'column' }}>
                                        <div className={item.date === date.getDate() && (date.getMonth() === currentMonth) ? "inside-current-date" : ''}  >
                                            {item.date}
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
        )
    }

    return (
        <StyledCalendar>
            <div className="container">
                <Grid container style={{ display: 'flex', justifyContent: "space-between" }}>
                    <Grid className="arrow-icon" item md={1.71} onClick={() => onClickOnLeftArrow()}>{'<'}</Grid>
                    <Grid className="calendar-month-year" item onClick={() => ''} >{currentMonthName} {currentYear}</Grid>
                    <Grid className="arrow-icon" item onClick={() => onClickOnRightArrow()} >{'>'}</Grid>
                </Grid>

                <Grid container className="weekdays-container" >
                    {weekDays?.map((day: any, index: any) => {
                        return (
                            <Grid key={index} className={day.id === date.getDay() ?
                                'current-day'
                                : 'day'}
                                item xs={1.6}>{day.day}</Grid>
                        )
                    })}
                    {StructureDateAndDays()}
                </Grid>
            </div>
        </StyledCalendar>
    )
}

export default Calendar