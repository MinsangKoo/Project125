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
}

export class sleep_day {
  deep: number;
  light: number;
  rem: number;
  sleepduration: number;
  bedtime: time;
  wakeup: time;
  constructor(d: number, l: number, r: number, s: number, b: time, w: time) {
    this.deep = d;
    this.light = l;
    this.rem = r;
    this.sleepduration = s;
    this.bedtime = b;
    this.wakeup = w;
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
}

export class Person {
  age: number;
  gender: string;
  sleep_data: sleep_day[];
  constructor(a: number, g: string) {
    this.age = a;
    this.gender = g;
    this.sleep_data = [];
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
  addDay(s: sleep_day) {
    this.sleep_data.splice(0, 0, s);
    if (this.sleep_data.length > 31) {
      this.sleep_data.splice(0, 1);
    }
  }
}

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
