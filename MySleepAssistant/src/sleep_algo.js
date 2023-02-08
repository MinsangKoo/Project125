const avg_m_deep = 15
const avg_m_light = 52
const avg_m_rem = 21
const avg_m_sleeptime = 386
const avg_f_deep = 15
const avg_f_light = 52
const avg_f_rem = 22
const avg_f_sleeptime = 410

const avg_genZ_sleeptime = 417
const avg_genZ_deep = 17
const avg_genZ_light = 50
const avg_genZ_rem = 21
const avg_mil_sleeptime = 400
const avg_mil_deep = 16
const avg_mil_light = 51
const avg_mil_rem = 21
const avg_genX_sleeptime = 394
const avg_genX_deep = 15
const avg_genX_light = 52
const avg_genX_rem = 21
const avg_boom_sleeptime = 393
const avg_boom_deep = 13
const avg_boom_light = 54
const avg_boom_rem = 21

var cur_deep = 14

var avg_deep = (avg_m_deep + avg_genZ_deep) / 2;
var avg_light = (avg_m_light + avg_genZ_light) / 2;

function Person() {
  this.cur_deep = [];
  this.add = function (deep_sleep) {
    this.cur_deep.push(deep_sleep)
  }
  this.get_deep = function (deep_sleep) {
    return this.cur_deep[this.cur_deep.length - 1];
  }
}

const p1 = new Person()
p1.add(14)
p1.add(15)
console.log(p1.get_deep())
