*link: https://ltyl260.github.io/FA205_workshop2/*
## Workshop 2: Coding Environments & Sharing Work

I struggled setting up VScodium to show my sketches like the online editor, i will troubleshot this next week.
I got VScodium working on my laptop, but the online editor was still more convenient to work on the go, so i used a combination of both. I never liked GitHub but I'll give it another go.

I expanded my duck class by adding a grow, shrink, zoom and animate functions.   
**grow(increment, x)** enlarges the duck until it reaches size x                         
**shrink(increment, x)** enlarges the duck until it reaches size x                     
**zoom(a,b, increment)** enlarges and shrinks the duck between the ranges of a and b (where a must be less than b)                 
**animate()** will apply all of my special functions to animate my ducks.
> My favourite thing about classes is making reusable code that requires much less typing! by putting all my different animations into this animation class i only have one function call to make per duck! (definitely better than the 4 function calls id be making without this function and significantly better than the 64 lines of code needed to make these functions wihtout classes as all) I love the efficiency of classes because it enables me to code lazily.

I wanted to use the **setTimeout(x)** function to stagger my action sequence, except it only works on direct function calls and **not functions imbedded in classes**, I didnt let this setback stop me from staggering my ducks, so I made my own!
> I created a tic variable that counts the iterations of the code
> When the tics exceed x then the action sequence will execute for the duck.                                                                                             
           *i.e. setTimeout(x){    if (tic > x){      this.animate();    }  }*

This way I was able to stagger the entrance of my ducks while maintaining the efficiency of using class structure for my ducks!
> although this works wonderfully in the live preview from VScodium and the external browser preview,                                                                       
  as soon as it gets to github it stops working, hopefully debug this next week.

I chose to only set the background in the sketch setup, so the ducks leave traces.             
> When playing around with code in workshop 0, I made the mistake of removing the background in the main draw function, but this showed me that every movement leaves a trace, despite the mistake I really enjoyed this effect and intentionally made my ducks leave traces. I still leave a background function commented out in the main body so I can easily change my sketch back should the task call for it.

*This creates a fun abstraction of ducks that I thoroughly enjoy.*
