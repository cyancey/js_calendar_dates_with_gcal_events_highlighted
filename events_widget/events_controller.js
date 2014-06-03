function EventsController(model, view) {
  this.model = model
  this.view = view
  // this.eventDates = []
  this.apiKey = "{googleAPIkey}"
  this.baseURI = "https://www.googleapis.com/calendar/v3"
  this.calendarID = "{calendarID}"
}

EventsController.prototype = {
  init: function() {
    this.getEvents()
    this.setListeners()
  },

  setListeners: function() {
    this.view.getNextMonthButton().addEventListener('click', this.formatCalendarForBookedEvents.bind(this), false)
    this.view.getPrevMonthButton().addEventListener('click', this.formatCalendarForBookedEvents.bind(this), false)
    this.view.getTodayButton().addEventListener('click', this.formatCalendarForBookedEvents.bind(this), false)
  },

  formatCalendarForBookedEvents: function() {
    var bookedEventDates = this.model.bookedDates
    var dayDivs = this.view.getDays()

    for(var i=0; i<bookedEventDates.length; i++){
      for(var n=0; n<dayDivs.length; n++) {
        if (bookedEventDates[i] === dayDivs[n].dataset.date) {
          dayDivs[n].classList.add("booked")
        }
      }
    }
  },

  getEvents: function() {
    var eventListMethod = "/calendars/"+this.calendarID+"/events"

    var ajaxRequest = $.ajax({
      url: encodeURI(this.baseURI+eventListMethod + '?key=' + this.apiKey),
      type: 'GET'
    })
    ajaxRequest.done(this.createCalEvents.bind(this))
  },

  createCalEvents: function(response) {
    var googleEventObjects = response.items
    var events = []

    for(var i = 0; i < googleEventObjects.length; i++){
      var googleEvent = googleEventObjects[i]
      var name = googleEvent.summary
      var startDate = googleEvent.start.dateTime
      var endDate = googleEvent.end.dateTime

      var calEvent = new CalEvent(name, startDate, endDate)
      this.model.addEvent(calEvent)
    }
    this.model.bookedDates = this.model.eventsDates()
    this.formatCalendarForBookedEvents()
  }

}