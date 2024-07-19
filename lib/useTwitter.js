export const initTwitter = () => {
  const head = document.querySelector('head');
  const addTwitterScript = () => {
    const twitterScript = document.createElement('script');
    twitterScript.type = 'text/javascript';
    twitterScript.async = true;
    twitterScript.src = 'https://static.ads-twitter.com/uwt.js';
    head.appendChild(twitterScript);
  };

// I've converted the base code into the following function which is more
// readable, this does the same thing as the code you copy from the console

const initializeTwq = (windowObj, documentObj, elementType) => {
    if (!windowObj.twq) {
      const twitterEventTracker = (windowObj.twq = (...args) => {
        twitterEventTracker.exe
          ? twitterEventTracker.exe.apply(twitterEventTracker, args)
          : twitterEventTracker.queue.push(args);
      });
      twitterEventTracker.version = '1.1';
      twitterEventTracker.queue = [];
      const twitterScriptElement = documentObj.createElement(elementType);
      twitterScriptElement.async = true;
      twitterScriptElement.src = 'https://static.ads-twitter.com/uwt.js';
      const a = documentObj.getElementsByTagName(elementType)[0];
      a.parentNode.insertBefore(twitterScriptElement, a);
    }
  };
  addTwitterScript();
  initializeTwq(window, document, 'script');
  window.twq('config', 'ohmjp');
};

export const sendTwitterConversion = event_id => {
  if (!window.twq) {
    return;
  }
  window.twq('event', event_id, {
    conversion_id: null,
    email_address: null,
  });
};

export const shuttleAiPageview = 'tw-ohmjp-omyox'
export const shuttleAiFormButtonClick = 'tw-ohmjp-omz2k'
