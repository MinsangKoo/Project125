import { Averages, Person, sleep_day } from '../../classes';

// let p1 = new Person(1, 'm');
// let s = new sleep_day(1, 1, 1, 1);

function calculate_sleepscore(person: Person) {
  //Retrieves the averages associated with this persons gender and age
  let a1 = new Averages(person);

  //Grabs the most recent sleep data of the person
  var day = person.getCurDay();
  var cur_deep = day.getDeep();
  var cur_light = day.getLight();
  var cur_rem = day.getRem();
  var cur_sleeptime = day.getSleeptime();

  //Averages associated with this specific person only
  var avg_deep = a1.get_avg_deep();
  var avg_light = a1.get_avg_light();
  var avg_rem = a1.get_avg_rem();
  var avg_sleeptime = a1.get_avg_sleeptime();

  var deep_score = (avg_deep - Math.abs(avg_deep - cur_deep)) / avg_deep;
  var light_score = (avg_light - Math.abs(avg_light - cur_light)) / avg_light;
  var rem_score = (avg_rem - Math.abs(avg_rem - cur_rem)) / avg_rem;
  var sleeptime_score =
    (avg_sleeptime - Math.abs(avg_sleeptime - cur_sleeptime)) / avg_sleeptime;
  var sleep_score =
    (deep_score + light_score + rem_score + sleeptime_score) * 25;
  return sleep_score;
}
