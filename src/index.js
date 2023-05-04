// 2. Виконай задачки, які направлні на роботу з датами та використанням бібліотеки date-fns.
// Напишіть функцію, яка приймає формат (наприклад, "yyyy-mm-dd" або "dd/mm/yyyy")
// та повертає сьогоднішню дату у вказаному форматі.
// import { format } from "date-fns";

// function formatDate(formatStringn) {
    
//     // console.log(formatStringn);
//     return format(new Date(), formatStringn);



// console.log(formatDate("EEEE, MMMM d, yyyy")); // "Wednesday, May 4, 2022"
// console.log(formatDate("dd/MM/yyyy HH:mm:ss")); // "04/05/2022 12:30:45"
// console.log(formatDate("h:mm a")); // "12:30 PM"
// console.log(formatDate("MMMM do yyyy, h:mm:ss a"));
 // "May 4th 2022, 12:30:45 PM"
// console.log(formatDate("yyyy/MM/dd")); // "2022/05/04"
// console.log(formatDate("dd.MM.yyyy")); // "04.05.2022"
// console.log(formatDate("dd MMM yyyy")); // "04 May 2022"




// Напишіть функцію, яка приймає дату в форматі "yyyy-mm-dd" та повертає кількість днів, що пройшли з цієї дати до сьогоднішньої дати.
// import { differenceInDays } from "date-fns";
// import { differenceInHours, parse} from "date-fns" ;

// function daysSince(dateString) {
//     return Math.floor(differenceInHours(new Date(), new Date(dateString)) / 24) | 0;
    

// }



// console.log(daysSince("2022-01-01"));
// Напишіть функцію, яка приймає масив ат в форматі "yyyy-mm-dd"
// та повертає масив з назвами дня тижня, на які припадають ці дати.
// import { format } from "date-fns";

// function getDaysOfWeek(dateStrings) {
   
//    return dateStrings.map(date => format(new Date(date), 'EEEE'))
    

// }

// console.log(getDaysOfWeek(["2022-05-01", "2022-05-02", "2022-05-03"])); // => ["Sunday", "Monday", "Tuesday"]



// Напишіть функцію, яка приймає дату та кількість днів та повертає дату,
//     яка буде через передану кількість днів після заданої дати: const result = addDays(new Date(2014, 8, 1), 10)
// import { addDays, format } from "date-fns";

function addDaysToDate(dateString, days) {
    const result = (addDays(new Date(dateString), days))
   return format(result, "y-MM-d")
  
    
}

console.log(addDaysToDate("2022-05-04", 7)); // => "2022-05-11"