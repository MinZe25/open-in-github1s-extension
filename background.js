let color = '#3aa757';
const filter = {
  url: [
    {
      urlMatches: '.*(?:github.com)\/([0-9A-Za-z_\-]+)\/[^\/]+\/?$'
    },
  ],
};

chrome.webNavigation.onCompleted.addListener(async (e) => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id, allFrames: true },
      func: X,
    }
  );
}, filter);

function X() {
  var firstButton = document.querySelector('.file-navigation > .flex-auto');
  // return document;
  var newButton = document.createElement("a");
  newButton.className = "btn ml-2";
  newButton.style.backgroundColor = "#4a7bc1";
  newButton.innerText = "Open in Github1S";
  newButton.onclick = function () {
    window.location.href = window.location.href.replace(/github(1s)?.com/, function (match, p1) { return p1 ? 'github.com' : 'github1s.com' })
  };
  firstButton.parentNode.insertBefore(newButton, firstButton.nextSibling);
  return document;
}