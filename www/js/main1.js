$.getJSON('/json/lunch-data.json', start); // getting data from JSON

let ul = $('<ul class="meny"/>'); //creating a list - meny
let menuData;

let svTranslations = {
  'whole-week': 'hela veckan',
  monday: 'måndag',
  tuesday: 'tisdag',
  wednesday: 'onsdag',
  thursday: 'torsdag',
  friday: 'fredag'
}   //translation of the words

let lang = "sv";

/*svTranslations[day]*/

function start(lunchData) {
  menuData = lunchData;
  for (let day in lunchData) {
    let dayData = lunchData[day];
    console.log("Veckodag", day);
    let li = $('<li class="item ' + lang + '"/>');  //looping through JSON data

    if (lang === 'sv') {
      day = svTranslations[day];
    }                                               //if statement, if chosen language is Swedish
    li.append('<h3>' + day + '</h3>');
    for (let meal of dayData[lang]) {
      console.log("name", meal.name, "desc", meal.desc);
      li.append('<h4 class="meal-name">' + meal.name + '</h4>');
      li.append('<p class="mean-desc">' + meal.desc + '</p>');
      ul.append(li);
    }
  }
  $('main').append(ul);
}




$('#switch-lang').click(function () {    //button, changing languages

  if (lang === 'sv') {
    lang = 'en';
    $('.item.sv').remove();
    $('.item.en').show();
  }
  else {
    lang = 'sv';
    $('.item.en').remove();
    $('.item.sv').show();
  }
  start(menuData)
});