$(function() {
  initializeLocalStorage();
  let weekPreference = getWeekPreference();
  activateButton(weekPreference);
  showOrHideWeekContainer(weekPreference, 0);

  $('.week-selector').on('click', function(event) {
    let previousWeekPreference = getWeekPreference();
    deactivateButton(previousWeekPreference);

    let selection = $(event.target).data('week');
    setWeekPreference(selection);
    activateButton(selection);
    showOrHideWeekContainer(selection, 100);
  });

  function initializeLocalStorage() {
    if (localStorage.getItem('turing-weekPref') === null) {
      localStorage.setItem('turing-weekPref', 0);
    }
  };

  function showOrHideWeekContainer(weekSelection, ease) {
    if (weekSelection == 0) { return $('.week-content').show(ease) };

    $('.week-content').each(function(idx, weekContainer) {
      if ($(weekContainer).data('week') == weekSelection) {
        $(weekContainer).show(ease);
      } else {
        $(weekContainer).hide(ease);
      }
    });
  };

  function activateButton(weekPreference) {
    $(`.week-selector[data-week=${weekPreference}]`).addClass('active');
  };

  function deactivateButton(previousWeekPreference) {
    $(`.week-selector[data-week=${previousWeekPreference}]`).removeClass('active');
  };

  function setWeekPreference(selection) {
    localStorage.setItem('turing-weekPref', selection);
  };

  function getWeekPreference() {
    return localStorage.getItem('turing-weekPref');
  };
}());
