// meal_tracker_id, meal_id, meal_date, meal_name, completion
// exercise_id, exercise_name, exercise_detail, exercise_date, completion

const unixToDate = function(unix) {
  let a  = new Date(unix * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  
  return '' + days[a.getDay()] + " " + month + " " + date + " " + year + " " + unix;
  // Wed Mar 16 2022 1647481862
}

module.exports = {
  schedule: (schedule_present, day) => {
    let schedule_obj = {...schedule_present}
    // return schedule_obj;
    let exer_sched = schedule_obj.exerTrack.map((exercise) => {
      exercise.exercise_date = unixToDate(exercise.exercise_date);
      return exercise;
    })
    let meal_sched = schedule_obj.mealTrack.map((meal) => {
      meal.meal_date = unixToDate(meal.meal_date);
      return meal;
    })
    
    schedule_obj['exerTrack'] = exer_sched;
    schedule_obj['mealTrack'] = meal_sched;

    return schedule_obj;
  }
}


let unix = 1647481862


unixToDate(unix);