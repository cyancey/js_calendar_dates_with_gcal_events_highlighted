function EventsModel() {
  this.events = []
  this.bookedDates = []
}

EventsModel.prototype = {
  addEvent: function(calEventObj) {
    this.events.push(calEventObj)
  },

  eventsDates: function() {
    eventDates = []
    for(var i=0; i<this.events.length; i++) {
      eventDates.push(this.events[i].eventDates())
    }

    var flattened = eventDates.reduce(function(a, b) {
      return a.concat(b);
    });

    return flattened
  }
}