class Timer {                                                //createa class
    constructor(durationInput, startButton, pauseButton, callbacks) {   //constructor called once
        this.durationInput = durationInput;                  //this. reffers to class
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
           this.onStart = callbacks.onStart;
           this.onTick = callbacks.onTick;
           this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);  //add action
        this.pauseButton.addEventListener('click', this.pause);        
    }

    start = () => {       
    if(this.onStart) {
      this.onStart(this.timeRemaining);
      }                                       //method for start button
     this.tick();                                                //this call
     this.interval = setInterval(this.tick, 10);               //interval
    };
  
   pause = () => {       
    console.log('pause');                                        //pause method
      clearInterval(this.interval);                              // reset input to 0
    };
    tick = () => {   
      if(this.timeRemaining <= 0) {
        this.pause();
        if(this.onComplete) {
          this.onComplete();
        }
         } else{
          this.timeRemaining = this.timeRemaining - 0.02; 
          if(this.onTick) {
            this.onTick(this.timeRemaining);
          }
        }                                       
};
    get timeRemaining() {
return parseFloat(this.durationInput.value);
}
set timeRemaining(time) {
  this.durationInput.value  = time.toFixed(2);
  }
};