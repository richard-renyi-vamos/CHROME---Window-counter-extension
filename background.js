chrome.windows.getAll({}, function(windows) {
  // Count the number of open windows
  var numWindows = windows.length;

  // Send message to update the badge with the number of windows
  chrome.action.setBadgeText({text: numWindows.toString()});
});
