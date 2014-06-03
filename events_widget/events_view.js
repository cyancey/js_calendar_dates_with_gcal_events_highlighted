function EventsView() {
  this.calendarDaySelector = ".fc-day"
  this.nextMonthButtonSelector = ".fc-button-next"
  this.prevMonthButtonSelector = ".fc-button-prev"
  this.todayButtonSelector = ".fc-button-today"
}

EventsView.prototype = {
  getDays: function() {
    return document.querySelectorAll(this.calendarDaySelector)
  },

  getNextMonthButton: function() {
    return document.querySelector(this.nextMonthButtonSelector)
  },

  getPrevMonthButton: function() {
    return document.querySelector(this.prevMonthButtonSelector)
  },

  getTodayButton: function() {
    return document.querySelector(this.todayButtonSelector)
  },
}