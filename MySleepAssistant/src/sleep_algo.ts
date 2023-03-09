import { Averages, Person, sleep_day, time } from './classes';

// let p1 = new Person(1, 'm');
// let s = new sleep_day(1, 1, 1, 1);
let deep_and_light_reccomendations = [
  "Exercise 6+ hours before bedtime",
  "Do not use your phone an hour before bedtime. The blue light affects your sleep ability",
  "Eating fiber can improve your sleep quality",
  "Sleep in a dark and quiet room",
  "Consider listening to white noise when attempting to sleep",
  "Avoid consuming alcohol or smoking before sleeping",
  "Maintain reccomended sleep schedule to improve sleep quality",
  "Avoid eating within 3 hours of bedtime"

];
let rem_reccomendation = 'Your REM percentage is low, but due to REM rebound, it will naturally increase';

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
export function calculate_sleepscore(person: Person, day: sleep_day, day_num: number) {
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

  
  if (day_num < 26)
  {
    for (let i = day_num; i <= day_num + 4; i++) // looping over 5 most recent days
    {
      personsSleepTime += person.sleep_data[i].getSleeptime()
    }
  }
  
  else
  {
    for (let i = day_num; i < person.sleep_data.length; i++) // looping over 5 most recent days
    {
      personsSleepTime += person.sleep_data[i].getSleeptime()
    }
  }


  

  var gettingTooMuchSleep = false;

  if (day_num < 26)
  {
    for (let i = day_num; i <= day_num + 3; i++) // looping over 5 most recent days
    {
      if (person.sleep_data[i + 1].getSleeptime() - person.sleep_data[i].getSleeptime() > 90) // not getting enough sleep
      {
        rec.push("You are getting less than average sleep due to sleeping later than usual")
        break;
      }
    }
  }


  else
  {
    for (let i = day_num; i < person.sleep_data.length - 1; i++) // looping over 5 most recent days to see if they got too much sleep
    {

      if (person.sleep_data[i + 1].getSleeptime() - person.sleep_data[i].getSleeptime() < 90) // not getting enough sleep
      {
        rec.push("You are getting greater than average sleep due to sleeping in earlier than usual")
        gettingTooMuchSleep = true;
        break;
      }

    }
  }





  // for (let i = 1; i < 5; i++) // looping over 5 most recent days
  // {
  //   if (person.sleep_data[i - 1].getSleeptime() - person.sleep_data[i].getSleeptime() > 90) // not getting enough sleep
  //   {
  //     rec.push("You are getting less than average sleep due to sleeping later than usual")
  //   }
  // }





  // for (let i = 1; i < 5; i++) // looping over 5 most recent days to see if they got too much sleep
  // {
  //   if (person.sleep_data[i - 1].getSleeptime() - person.sleep_data[i].getSleeptime() < 90) // not getting enough sleep
  //   {
  //     rec.push("You are getting greater than average sleep due to sleeping in earlier than usual")
  //     gettingTooMuchSleep = true;
  //     break;
  //   }
  // }

  if (day.getRem() < a1.get_avg_rem())
  {
    rec.push(rem_reccomendation);
  }

  if ((day.getLight() < a1.get_avg_light()) || (day.getDeep() < a1.get_avg_deep()))
  {
    const random_int = Math.floor(Math.random() * deep_and_light_reccomendations.length);
    rec.push(deep_and_light_reccomendations[random_int]);
  }


  if (caffeine_score < 1) {
    rec.push("We recommend drinking less caffeine 6 hours before reccomended bedtime")
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
    rec.push("Recommended sleep time: " + earliestSleepTimeAvailable.getTime());
  }

  else if ((time_diff(latestWakeUpTimeAvailable, earliestSleepTimeAvailable)) < a1.get_avg_sleeptime())
  {
    recBedtime = String(earliestSleepTimeAvailable);
    rec.push("Your sleep availability doesn't allow for you to have enough sleep time");
    rec.push("Recommended sleep time: " + earliestSleepTimeAvailable.getTime());
  }

  else
  {
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
  


  day.setRecommendations(rec);



}
