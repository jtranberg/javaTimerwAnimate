class Timer {                                                //createa class
    constructor(durationInput, startButton, pauseButton) {   //constructor called once
        this.durationInput = durationInput;                  //this. reffers to class
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);  //add action
        this.pauseButton.addEventListener('click', this.pause);        
    }

    start = () => {                                              //method for start button
     this.tick();                                                //this call
     this.interval = setInterval(this.tick, 1000);               //interval
     console.log('start');
    };
  
   pause = () => {                                               //pause method
      clearInterval(this.interval);                              // reset input to 0
      console.log('pasue');
    };
    tick = () => {                                               // tick.. is counter
        console.log('tick');
    const timeRemaining = parseFloat(this.durationInput.value);
    this.durationInput.value = timeRemaining - 1;                //creates countdown
    };
}

 const durationInput = document.querySelector('#duration');       //variables
 const startButton = document.querySelector('#start');
 const pausetButton = document.querySelector('#pause');
 const timer = new Timer(durationInput, startButton, pausetButton); //calls new instance of timer


