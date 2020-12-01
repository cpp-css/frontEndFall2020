export default convertDateFormat = (date) => {
        let ISODate = new Date(date).toLocaleString();
        let parseDate = ISODate.split(" ");

        const getWeek = {
            Mon: "Monday",
            Tue: "Tuesday",
            Wed: "Wednesday",
            Thu: "Thursday",
            Fri: "Friday",
            Sat: "Saturday",
            Sun: "Sunday"
        }

        const getMonth = {
            Jan: "January", 
            Feb: "Feburary", 
            Mar: "March", 
            Apr: "April", 
            May: "May", 
            Jun: "June", 
            Jul: "July", 
            Aug: "August", 
            Sep: "September", 
            Oct: "October", 
            Nov: "November", 
            Dec: "December"
        };

        const removeZero = (value) => {
            return value >= 10 ? +value : value;
        }

        const time = parseDate[3].split(":");

        const convert24to12Hour = (hour) => {
            let zeroIssue = (hour > 12) ? hour - 12 : hour;
            return zeroIssue == '00' ? 12 : zeroIssue;
        }

        const fDate = {
            week: getWeek[parseDate[0]],
            month: getMonth[parseDate[1]],
            day: parseDate[2],
            year: parseDate[4],
            hour: convert24to12Hour(time[0]),
            minutes: time[1],
            period: time[0] >= 12 ? "PM" : "AM"
        }

        return fDate.week + ", " + fDate.month + " " + fDate.day + ", " + fDate.year 
        + " @ " + fDate.hour + ":" + fDate.minutes + " " + fDate.period

    }