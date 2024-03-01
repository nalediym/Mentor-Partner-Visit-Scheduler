function scheduleVisits() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Visits"); 
  var data = sheet.getDataRange().getValues();
  
  var calendar = CalendarApp.getDefaultCalendar(); // TODO: Change this to specific calendar
  
  for (var i = 1; i < data.length; i++) { // Assuming the first row contains headers
    var mentor = data[i][0]; // Assuming mentors are in column A
    var visitDate = new Date(data[i][1]); // Assuming visit dates are in column B
    
    // Other columns like corporate partners, founders, sponsors can be added similarly
    
    var eventTitle = "Visit: " + mentor; // Customize the event title as needed
    var eventDescription = "Scheduled visit with " + mentor; // Customize event description as needed
    
    calendar.createEvent(eventTitle, visitDate, visitDate, {description: eventDescription});
    
  }
}
