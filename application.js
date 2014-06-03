$(document).ready(function(){
  insertCalendar()

  var eventsModel = new EventsModel()
  var eventsView = new EventsView()
  eventsController = new EventsController(eventsModel, eventsView)

  eventsController.init()
})

function insertCalendar() {
  $('#calendar').fullCalendar({
    })
}