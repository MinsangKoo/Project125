/*
The time class takes in "hour", "minute", and either AM or PM.
All the functions in the sleep_algo class relating to the time class, you don't
need to understand the implementation. Just create a time object when creating a
sleep_data object.
*/
export class time {
  hour: number;
  minute: number;
  l: string;
  constructor(h: number, m: number, l: string) {
    this.hour = h;
    this.minute = m;
    this.l = l;
  }
  getMinutes() {
    return this.minute;
  }
  getHours() {
    return this.hour;
  }
  getName() {
    return this.l;
  }
  getTime() { // returns the time in this format 12:00 PM 
    return this.hour.toString() + ':' + this.minute.toString() + ' ' + this.l;
  }
  set_minutes(minutes: number) {
    this.minute = minutes;
  }
  set_hours(hour: number) {
    this.hour = hour;
  }

}
/*
The sleep_day class represents all the data within a single day that the user records.
It includes their deep, light, rem sleep, sleep duration, what time they go to bed and wake up
and how much caffeine they had during that day.

For caffeine specifically, if they drank any sort of caffeine more than 6 hours before, caffeine will
default to 0 in the constructor. You can either leave out the caffeine when constructing an object or
pass in 0.

If it was less than 6 hours, pass the amount of cups they drank as the
last parameter.
*/

export class Date {
  month: number;
  day: number;
  year: number;
  constructor(m: number, d: number, y: number) {
    this.month = m
    this.day = d
    this.year = y
  }
  getYear() {
    return this.year
  }
  getMonth() {
    return this.month
  }
  getDay() {
    return this.day
  }

  setDate(m: number, d: number, y: number) {
    this.month = m
    this.day = d
    this.year = y
  }

  getDate() {
    return this.month + this.day + this.year;
  }

  printDate() {
    return this.month + '/' + this.day
  }
}
export class sleep_day {
  deep: number;
  light: number;
  rem: number;
  sleepduration: number;
  bedtime: time;
  wakeup: time;
  caffeine: number;
  date: Date;
  sleep_score: number;
  recommendations: string[]

  constructor(d: number, l: number, r: number, s: number, b: time, w: time, c = 0, date: Date) {
    this.deep = d;
    this.light = l;
    this.rem = r;
    this.sleepduration = s;
    this.bedtime = b;
    this.wakeup = w;
    this.caffeine = c;
    this.date = date;
    this.sleep_score = 0
    this.recommendations = []

  }
  getDeep() {
    return this.deep;
  }
  getLight() {
    return this.light;
  }
  getRem() {
    return this.rem;
  }
  getSleeptime() {
    return this.sleepduration;
  }
  getBedtime() {
    return this.bedtime;
  }
  getWakeUp() {
    return this.wakeup;
  }
  getCaffeine() {
    return this.caffeine;
  }
  getDate() {
    return this.date;
  }
  getDateString() {
    return String(String(this.date.getMonth()) + String(this.date.getDay()) + String(this.date.getYear()))
  }
  getSleepscore() {
    return this.sleep_score;
  }
  getRecommendations() {
    return this.recommendations;
  }
  setSleepscore(s: number) {
    this.sleep_score = s;
  }
  setCaffiene(c: number) {
    this.caffeine = c;
  }
  setRecommendations(r: string[]) {
    this.recommendations = r
  }


}
/*
The person class keeps track of "age", "gender", and an array containing "sleep_days".
It will keep track of the 30 most recent sleep_data. To push into the array, call addDay(sleep_data)

If you want to get the most recent day, you can call person.getCurDay(). If you want to grab a
specific date, call person.getDay(v) where v is how many days ago it was.
For example, person.getDay(0) returns the most recent day
person.getDay(5) returns 5 days ago.
*/

let KEYNAMES = ["mondayStart", "mondayEnd",
  "tuesdayStart", "tuesdayEnd",
  "wednesdayStart", "wednesdayEnd",
  "thursdayStart", "thursdayEnd",
  "fridayStart", "fridayEnd",
  "saturdayStart", "saturdayEnd",
  "sundayStart", "sundayEnd"];

export class Person {
  name: string;
  age: number;
  gender: string;
  sleep_data: sleep_day[];
  sleep_availability: Map<string, [time, string]>
  constructor(n: string, a: number, g: string) {
    this.name = n;
    this.age = a;
    this.gender = g;
    this.sleep_data = [];

    this.sleep_availability = new Map<string, [time, string]>();
    // this.initializeSleepAvailability();
  }

  initializeSleepAvailability() {
    for (let i = 0; i < KEYNAMES.length; i++) {
      this.sleep_availability.set(KEYNAMES[i], [new time(0, 0, 'PM'), 'NaN'])
    }
    return
  }

  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getGender() {
    return this.gender;
  }
  getCurDay() {
    return this.sleep_data[0];
  }
  getDay(c: number) {
    return this.sleep_data[c];
  }
  getSleepAvailability() {
    return this.sleep_availability;
  }

  // addDay(s: sleep_day) {
  //   this.sleep_data.unshift(s)
  //   if (this.sleep_data.length > 30) {
  //     this.sleep_data.splice(0, 31);
  //   }
  // }


}

/*
The averages class takes in a person object into the constructor. It returns the averages associated
with that specific persons age and gender. For example, if person is a 22 year old male, the
get_averages functions will return averages associated with genZ males.
*/
export class Averages {
  age: number;
  gender: string;
  constructor(person: Person) {
    this.age = person.getAge();
    this.gender = person.getGender();
  }
  get_avg_deep() {
    var temp1;
    var temp2;
    if (this.gender == 'm') {
      temp1 = avg_m_deep;
    } else {
      temp1 = avg_f_deep;
    }
    if (this.age >= 11 && this.age < 26) {
      temp2 = avg_genZ_deep;
    } else if (this.age >= 27 && this.age < 42) {
      temp2 = avg_mil_deep;
    } else if (this.age >= 43 && this.age < 58) {
      temp2 = avg_genX_deep;
    } else {
      temp2 = avg_boom_deep;
    }
    return (temp1 + temp2) / 2;
  }
  get_avg_light() {
    var temp1;
    var temp2;
    if (this.gender == 'm') {
      temp1 = avg_m_light;
    } else {
      temp1 = avg_f_light;
    }
    if (this.age >= 11 && this.age < 26) {
      temp2 = avg_genZ_light;
    } else if (this.age >= 27 && this.age < 42) {
      temp2 = avg_mil_light;
    } else if (this.age >= 43 && this.age < 58) {
      temp2 = avg_genX_light;
    } else {
      temp2 = avg_boom_light;
    }
    return (temp1 + temp2) / 2;
  }
  get_avg_rem() {
    var temp1;
    var temp2;
    if (this.gender == 'm') {
      temp1 = avg_m_rem;
    } else {
      temp1 = avg_f_rem;
    }
    if (this.age >= 11 && this.age < 26) {
      temp2 = avg_genZ_rem;
    } else if (this.age >= 27 && this.age < 42) {
      temp2 = avg_mil_rem;
    } else if (this.age >= 43 && this.age < 58) {
      temp2 = avg_genX_rem;
    } else {
      temp2 = avg_boom_rem;
    }
    return (temp1 + temp2) / 2;
  }
  get_avg_sleeptime() {
    var temp1;
    var temp2;
    if (this.gender == 'm') {
      temp1 = avg_m_sleeptime;
    } else {
      temp1 = avg_f_sleeptime;
    }
    if (this.age >= 11 && this.age < 26) {
      temp2 = avg_genZ_sleepduration;
    } else if (this.age >= 27 && this.age < 42) {
      temp2 = avg_mil_sleepduration;
    } else if (this.age >= 43 && this.age < 58) {
      temp2 = avg_genX_sleepduration;
    } else {
      temp2 = avg_boom_sleepduration;
    }
    return (temp1 + temp2) / 2;
  }
  get_avg_bedtime() {
    if (this.age >= 11 && this.age < 26) {
      return avg_genZ_bedtime;
    } else if (this.age >= 27 && this.age < 42) {
      return avg_mil_bedtime;
    } else if (this.age >= 43 && this.age < 58) {
      return avg_genX_bedtime;
    } else {
      return avg_boom_bedtime;
    }
  }
  get_avg_wakeup() {
    if (this.age >= 11 && this.age < 26) {
      return avg_genZ_wakeup;
    } else if (this.age >= 27 && this.age < 42) {
      return avg_mil_wakeup;
    } else if (this.age >= 43 && this.age < 58) {
      return avg_genX_wakeup;
    } else {
      return avg_boom_wakeup;
    }
  }
}

//constants taken from https://blog.fitbit.com/sleep-study/
const avg_m_deep = 15;
const avg_m_light = 52;
const avg_m_rem = 21;
const avg_m_sleeptime = 386;
const avg_f_deep = 15;
const avg_f_light = 52;
const avg_f_rem = 22;
const avg_f_sleeptime = 410;

const avg_genZ_sleepduration = 417;
const avg_genZ_deep = 17;
const avg_genZ_light = 50;
const avg_genZ_rem = 21;
const avg_genZ_bedtime = new time(12, 8, 'am');
const avg_genZ_wakeup = new time(8, 12, 'am');

const avg_mil_sleepduration = 400;
const avg_mil_deep = 16;
const avg_mil_light = 51;
const avg_mil_rem = 21;
const avg_mil_bedtime = new time(11, 45, 'pm');
const avg_mil_wakeup = new time(7, 28, 'am');

const avg_genX_sleepduration = 394;
const avg_genX_deep = 15;
const avg_genX_light = 52;
const avg_genX_rem = 21;
const avg_genX_bedtime = new time(11, 25, 'pm');
const avg_genX_wakeup = new time(7, 0, 'am');

const avg_boom_sleepduration = 393;
const avg_boom_deep = 13;
const avg_boom_light = 54;
const avg_boom_rem = 21;
const avg_boom_bedtime = new time(11, 17, 'pm');
const avg_boom_wakeup = new time(6, 53, 'am');
function List<T, U>() {
  throw new Error("Function not implemented.");
}

