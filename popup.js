chrome.action.getBadgeText({}, function(result) {
  document.getElementById('windowCount').innerText = result;
});
