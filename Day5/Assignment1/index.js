function timer(duration) {
  function onComplete() {
    console.log(`Timer of ${duration} ms finished`);
  }
  setTimeout(() => {
    onComplete();
  }, duration);
}

timer(1000);
