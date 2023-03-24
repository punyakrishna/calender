import { styled } from "@mui/material";

export const StyledCalendar = styled("div") <any>`
width: 100%;
height: 100%;

.container{
    color: var(--white-color);
    width: 400px;
    padding: 2%;
    height: 100%;
    background: var(--primary-black-color);
    margin: auto;
    height:500px;
    text-align: center;
}

.current-day{
    font-weight: 400;
    color: var(--white-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}

.day{
    font-weight: 600;
    color: var(--secondary-black-color);
    display: flex;
    justify-content: center;
    align-items: center;
}

.selected-date{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 30%;
    padding: 10px;
    background-color: var(--white-color);
    color: var(--primary-black-color);
}

.dates{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 20vw;
}

.arrow-icon{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-weight: 700;
    font-size: 28px;
    cursor: pointer;
}


.dates-container{
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-left: 40px; 
}

.calendar-month-year{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-weight: 600;
    font-size: 20px;
}

.weekdays-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top:40px;
}

`