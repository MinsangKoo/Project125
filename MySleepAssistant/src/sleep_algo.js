var avg_deep = (avg_male_deep + avg_genZ_deep) / 2;
var avg_light = (avg_male_light + avg_genZ_light) / 2;

var sleep_score = (avg_deep - math.abs(avg_deep - cur_deep) / avg_deep);
