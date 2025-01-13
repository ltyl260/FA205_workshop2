*link: https://ltyl260.github.io/FA205_workshop2/*
# FA205_workshop2

## Workshop 2: Coding Environments & Sharing Work

I struggled setting up VScodium to show my sketches like the online edititor, i will troubleshot this next week.
I got VScodium working on my laptop but the online editor was still more convenient to work on the go, so i used a combination of both. I never liked Github but I'll give it another go.

I expanded my duck class by adding a grow, shrink, zoom and animate functions.   

grow(increment, x) enlarges the duck until it reaches size x                         
shrink(increment, x) enlarges the duck until it reaches size x                     
zoom(a,b, increment) enlarges and shrinks the duck between the ranges of a and b (where a must be less than b)                 
animate() will apply all of my special functions to animate my ducks.

I wanted to use the setTimeout(x) function to stagger my action sequene, except it only works on direct function calls and not functions imbedded in classes, so I made my own!
I created a tic variable that counts the iterations of the code and when the tics exceed x then the action sequence will execute for the duck. This way I was able to stagger the entrance of my ducks.

I chose to only set the background in the sketch setup so the ducks leave traces.             
This creates a fun abstraction of ducks that I thoroughly enjoy.
