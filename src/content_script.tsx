
const observer = new MutationObserver(mutations => {
  var aTags = document.getElementsByTagName("span");
  var searchText = "Pro";
  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent == searchText) {
      (aTags[i] as any).parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.opacity = '55%';
      (aTags[i] as any).parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style["pointer-events"] = 'none'; 
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
