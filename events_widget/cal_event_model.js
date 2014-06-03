function CalEvent(name, startDate, endDate) {
  this.name = name
  this.startDateTime = new Date(startDate)
  this.endDateTime = new Date(endDate)
}

CalEvent.prototype = {
  formatDateForFC: function(date) {
    var month = this.formatWithLeadingZero(date.getMonth()+1)
    var day = this.formatWithLeadingZero(date.getDate())
    var year = date.getFullYear()
    return year + "-" + month + "-" + day
  },

  formatWithLeadingZero: function(num){
    var numString = num.toString()
    if (numString.length === 1){
      return "0"+num
    }
    else {
      return num
    }
  },

  eventDates: function() {
    var eventDates = []
    var startDate = this.startDateTime
    var endDate = this.endDateTime
    var date = startDate
    while (this.formatDateForFC(date) <= this.formatDateForFC(endDate)) {
      eventDates.push(this.formatDateForFC(date))
      var day = date.getDate()
      date.setDate(day+1)
    }
    return eventDates
  }
}