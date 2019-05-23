$('select optgroup').each(function(index,elmt){
  result = $(elmt).find("option").toArray().sort((option1, option2) => option1.innerHTML.localeCompare(option2.innerHTML));

  $(result).appendTo(elmt);
});
