function createAnalytics() {
  let counter = 0;
  let isDestroy = false;
  const listener = () => counter++;
  document.addEventListener("click", listener);
  return {
    destroy() {
      document.removeEventListener("click", listener);
      isDestroy = true;
    },
    getAnalytics() {
      if (isDestroy) {
        console.log("Analytics is Destroy");
      }
      console.log(`tolal clics on page - ${counter}`);
    },
  };
}

if (window) {
  window.analytics = createAnalytics();
}
