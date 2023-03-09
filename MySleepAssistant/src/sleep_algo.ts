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

/*
when calculating sleep_scores, you will need to know how to use 3 classes.
  1) Call p1 = new Person(22, 'm')
  2) Call bedtime/wakeup = new time(12, 0, 'am')
  3) date = new Date(month, day, year)
  4) Call day = new sleep_day(deep, light, rem, sleep_duration, bedtime, wakeup, caffeine_intake = default to 0, date)
  5) Call calculate_sleep_score(p1, day) //this will set the sleep_score for that day
  6) Call p1.addDay(day)
*/
export function calculate_sleepscore(person: Person, day: sleep_day) {
  //Retrieves the averages associated with this persons gender and age
  let a1 = new Averages(person);

  //Grabs the most recent sleep data of the person
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
    (deep_score + light_score + rem_score + sleeptime_score * 2 + bedtime_score * .5 + wakeup_score * .5 + caffeine_score) * (100 / 7);

  day.setSleepscore(sleep_score)

  let rec = []

  var personsSleepTime = 0;

  for (let i = 0; i < 5; i++) // looping over 5 most recent days
  {
    personsSleepTime += person.sleep_data[i].getSleeptime()
  }

  if (avg_sleeptime < personsSleepTime / 5) // not getting enough sleep
  {
    rec.push("You are getting more than average sleep")
  }

  if (avg_sleeptime > personsSleepTime / 5) // not getting enough sleep
  {
    rec.push("You are getting less than average sleep")
  }

  var gettingTooMuchSleep = false;
  for (let i = 1; i < 5; i++) // looping over 5 most recent days
  {
    if (person.sleep_data[i - 1].getSleeptime() - person.sleep_data[i].getSleeptime() > 90) // not getting enough sleep
    {
      rec.push("You are getting less than average sleep due to sleeping later than usual")
    }
  }

  for (let i = 1; i < 5; i++) // looping over 5 most recent days to see if they got too much sleep
  {
    if (person.sleep_data[i - 1].getSleeptime() - person.sleep_data[i].getSleeptime() < 90) // not getting enough sleep
    {
      rec.push("You are getting greater than average sleep due to sleeping in earlier than usual")
      gettingTooMuchSleep = true;
      break;
    }
  }



  if (bedtime_score < .8) {
    if (cur_bedtime > avg_bedtime) {
      rec.push("We recommend going to sleep earlier")
    }
    else {
      rec.push("We recommend going to sleep later")
    }
  }
  if (wakeup_score < .8) {
    if (cur_wakeup > avg_wakeup) {
      rec.push("We recommend waking up earlier")
    }
    else {
      rec.push("We recommend waking up later")
    }
  }
  if (caffeine_score < 1) {
    rec.push("We recommend drinking less caffeine")
  }


  var date = new Date()
  var earliestSleepTimeAvailable = null;
  var latestWakeUpTimeAvailable = null;
  if (date.getDay() == 0) // Monday
  {
    earliestSleepTimeAvailable = person.getSleepAvailability().get("mondayStart")![0];
    latestWakeUpTimeAvailable = person.getSleepAvailability().get("mondayEnd")![0];
  }
  else if (date.getDay() == 1) // Tuesday
  {
    earliestSleepTimeAvailable = person.getSleepAvailability().get("tuesdayStart")![0];
    latestWakeUpTimeAvailable = person.getSleepAvailability().get("tuesdayEnd")![0];
  }
  else if (date.getDay() == 2) // Wednesday
  {
    earliestSleepTimeAvailable = person.getSleepAvailability().get("wednesdayStart")![0];
    latestWakeUpTimeAvailable = person.getSleepAvailability().get("wednesdayEnd")![0];
  }
  else if (date.getDay() == 3) // Thursday
  {
    earliestSleepTimeAvailable = person.getSleepAvailability().get("thursdayStart")![0];
    latestWakeUpTimeAvailable = person.getSleepAvailability().get("thursdayEnd")![0];
  }
  else if (date.getDay() == 4) // Friday
  {
    earliestSleepTimeAvailable = person.getSleepAvailability().get("fridayStart")![0];
    latestWakeUpTimeAvailable = person.getSleepAvailability().get("fridayEnd")![0];
  }
  else if (date.getDay() == 5) // Saturday
  {
    earliestSleepTimeAvailable = person.getSleepAvailability().get("saturdayStart")![0];
    latestWakeUpTimeAvailable = person.getSleepAvailability().get("saturdayEnd")![0];
  }
  else // Sunday
  {
    earliestSleepTimeAvailable = person.getSleepAvailability().get("sundayStart")![0];
    latestWakeUpTimeAvailable = person.getSleepAvailability().get("sundayEnd")![0];
  }

  var recBedtime = null;
  if (!gettingTooMuchSleep) {
    recBedtime = String(earliestSleepTimeAvailable);
    rec.push("Reccomended sleep time: ${recBedtime}");
  }
  else {
    var avg_sleep_time = a1.get_avg_sleeptime();

    var sleepTime = earliestSleepTimeAvailable;
    while (time_diff(latestWakeUpTimeAvailable, sleepTime) > avg_sleep_time)
    {
      if (sleepTime.getMinutes() < 10)
      {
        sleepTime.set_hours(sleepTime.getHours() - 1);
        sleepTime.set_minutes(sleepTime.getMinutes() + 50);
      }
      else
      {
        sleepTime.set_minutes(sleepTime.getMinutes() - 10)
      }
    }
    rec.push("We recommend going to sleep at " + sleepTime.getTime());
  }
  // account for if they don't have enough available hours


  day.setRecommendations(rec);


}
