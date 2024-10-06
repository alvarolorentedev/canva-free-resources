let modifiedRootDocument: any

const observer = new MutationObserver(() => {
  const aside = (modifiedRootDocument || window.document).getElementsByTagName('aside')
  if(aside.length <= 0)
    return
  const svgTags = aside[0].getElementsByTagName("svg");
  const searchPath = "M7.51 4.87C7.01 6.27 6.45 6.95 5.94 7c-.57.07-1.07-.18-1.54-.8a.54.54 0 0 0-.1-.1 1 1 0 1 0-.8.4l.01.12.82 3.24A1.5 1.5 0 0 0 5.78 11h4.44a1.5 1.5 0 0 0 1.45-1.14l.82-3.24a.54.54 0 0 0 .01-.12 1 1 0 1 0-.8-.4.54.54 0 0 0-.1.09c-.49.62-1 .87-1.54.81-.5-.05-1.04-.74-1.57-2.13a1 1 0 1 0-.98 0zM11 11.75a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h6z";
  for (var i = 0; i < svgTags.length; i++) {
    if (svgTags[i].getElementsByTagName('path')[0].getAttribute('d') == searchPath) {
      (svgTags[i] as any).parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.opacity = '55%';
      (svgTags[i] as any).parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style["pointer-events"] = 'none'; 
    }
  }
});

const observeRootDocument = () => {
  if(modifiedRootDocument)
    return
  const iframe = window.document.getElementsByTagName('iframe')[0];
  const rootDocument = iframe?.contentDocument || iframe?.contentWindow?.document;
  if(!rootDocument)
    return
  modifiedRootDocument=rootDocument
  observer.disconnect()
  observer.observe(modifiedRootDocument, {
    childList: true,
    subtree: true,
  });
  clearInterval(interval)
}

const interval = setInterval(observeRootDocument, 5000);

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
