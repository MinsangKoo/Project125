import { Averages, Person, sleep_day, time } from './classes';

// let p1 = new Person(1, 'm');
// let s = new sleep_day(1, 1, 1, 1);

//converts hours into 0-23 depending on am or pm
function convert_hour(t: time) {
  let hour = t.getHours();
  if (t.getName() == 'am') {
    return (hour % 12) * 60;
  } else {
    if (hour == 12) {
      return hour * 60;
    }
    return (hour + 12) * 60;
  }
}
//converts the time to total minutes
function time_to_minute(t: time) {
  let m1 = t.getMinutes();
  let h1 = convert_hour(t);
  return m1 + h1;
}

//returns the distance between 2 times
function time_diff(time1: time, time2: time) {
  let total_time1 = time_to_minute(time1);
  let total_time2 = time_to_minute(time2);
  console.log(total_time1);
  console.log(total_time2);

  return 720 - Math.abs(720 - Math.abs(total_time1 - total_time2));
}
function calc_caffeine_score(c: number) {
  return Math.max(0, 1 - (.2 * c))
}
export function calculate_sleepscore(person: Person) {
  //Retrieves the averages associated with this persons gender and age
  let a1 = new Averages(person);

  //Grabs the most recent sleep data of the person
  var day = person.getCurDay();
  var cur_deep = day.getDeep();
  var cur_light = day.getLight();
  var cur_rem = day.getRem();
  var cur_sleeptime = day.getSleeptime();
  var cur_bedtime = day.getBedtime();
  var cur_wakeup = day.getWakeUp();
  var cur_caffeine = day.getCaffeine();

  //Averages associated with this specific person only
  var avg_deep = a1.get_avg_deep();
  var avg_light = a1.get_avg_light();
  var avg_rem = a1.get_avg_rem();
  var avg_sleeptime = a1.get_avg_sleeptime();
  var avg_bedtime = a1.get_avg_bedtime();
  var avg_wakeup = a1.get_avg_wakeup();

  var deep_score = (avg_deep - Math.abs(avg_deep - cur_deep)) / avg_deep;
  var light_score = (avg_light - Math.abs(avg_light - cur_light)) / avg_light;
  var rem_score = (avg_rem - Math.abs(avg_rem - cur_rem)) / avg_rem;
  var sleeptime_score =
    (avg_sleeptime - Math.abs(avg_sleeptime - cur_sleeptime)) / avg_sleeptime;

  var bedtime_score =
    (time_to_minute(avg_bedtime) - time_diff(avg_bedtime, cur_bedtime)) /
    time_to_minute(avg_bedtime);
  var wakeup_score =
    (time_to_minute(avg_wakeup) - time_diff(avg_wakeup, cur_wakeup)) /
    time_to_minute(avg_wakeup);

  var caffeine_score = calc_caffeine_score(cur_caffeine);

  var sleep_score =
    (deep_score + light_score + rem_score + sleeptime_score + bedtime_score + wakeup_score + caffeine_score) * (100 / 7);
  return sleep_score;
}
