/***********************************************************************************
  Nanobloc
  by Sean Ko 

  Uses the p5.2DAdventure.js class 

***********************************************************************************/

// adventure manager global  
var adventureManager;

// p5.play
var playerSprite;
var playerAnimation;

// Clickables: the manager class
var clickablesManager;    // the manager class
var clickables;           // an array of clickable objects


// indexes into the clickable array (constants) 
const cl_Continue1 = 0;
const cl_Continue2 = 1;
const cl_Continue3 = 2;
const cl_Continue4 = 3;
const cl_StartScenario = 4;
const cl_S11 = 5;
const cl_S12 = 6;
const cl_S13 = 7;
const cl_S21 = 8;
const cl_S22 = 9;
const cl_S23 = 10;
const cl_S31 = 11;
const cl_S32 = 12;
const cl_S33 = 13;
const cl_S41 = 14;
const cl_S42 = 15;
const cl_S43 = 16;
const cl_S51 = 17;
const cl_S52 = 18;
const cl_S53 = 19;
const cl_TryAgain1 = 20;
const cl_TryAgain2 = 21;
const cl_TryAgain3 = 22;
const cl_TryAgain4 = 23;
const cl_TryAgain5 = 24;
const cl_TryAgain6 = 25;
const cl_TryAgain7 = 26;
const cl_TryAgain8 = 27;
const cl_TryAgain9 = 28;
const cl_TryAgain10 = 29;

// warning emojis
var warningImage;   // warning emoji
var maxWarning = 3;

// room indices - look at adventureManager
const Splash = 0;
const Introduction = 1;
const Instructions = 2;
const haracters = 3;
const Welcome = 4;
const Scenario1 = 5;
const Scenario2 = 6;
const Scenario3 = 7;
const Scenario4 = 8;
const Scenario5 = 9;
const Ending1 = 10;
const Ending2 = 11;
const Ending3 = 12;
const Ending4 = 13;
const Ending5 = 14;
const Ending6 = 15;
const Ending7 = 16;
const Ending8 = 17;
const Ending9 = 18;
const Ending10 = 19;
const Ending11 = 20;

let headlineFont;
let bodyFont;

// Allocate Adventure Manager with states table and interaction tables
function preload() {

  headlineFont = loadFont('fonts/FogCityGothic-Wide.otf');
  bodyFont = loadFont('fonts/FogCityGothic-Regular.otf');

  // load all images
  warningImage = loadImage("assets/warning.png");
  
  // allocateCharacters();

  clickablesManager = new ClickableManager('data/clickableLayout.csv');
  adventureManager = new AdventureManager('data/adventureStates.csv', 'data/interactionTable.csv', 'data/clickableLayout.csv');
}

// Setup the adventure manager
function setup() {
  createCanvas(1280, 720);

  // setup the clickables = this will allocate the array
  clickables = clickablesManager.setup();

  // this is optional but will manage turning visibility of buttons on/off
  // based on the state name in the clickableLayout
  adventureManager.setClickableManager(clickablesManager);

  // This will load the images, go through state and interation tables, etc
  adventureManager.setup();

  // load all text screens
  // loadAllText();

  // call OUR function to setup additional information about the p5.clickables
  // that are not in the array 
  setupClickables(); 

  fs = fullscreen();
}

// Adventure manager handles it all!
function draw() {
  // draws background rooms and handles movement from one to another
  adventureManager.draw();

 // // drawCharacters();

 //  // don't draw them on first few screens
  // if( adventureManager.getStateName() === "Splash" ||
  //     adventureManager.getStateName() === "Instructions" ||
  //     adventureManager.getStateName() === "Characters" ) {
  //   image(warningImage, 10, 10, 50, 50);
  // }

  if( adventureManager.getStateName() === "Ending1") {
    image(warningImage, 10, 10, 80, 80);
    image(warningImage, 20, 10, 80, 80);
    image(warningImage, 30, 10, 80, 80);
  }

 //  else {
 //    drawCharacters();
 //  }
  
  // draw the p5.clickables, in front of the mazes but behind the sprites 
  clickablesManager.draw();
}

// pass to adventure manager, this do the draw / undraw events
function keyPressed() {
  // toggle fullscreen mode
  if( key === 'f') {
    fs = fullscreen();
    fullscreen(!fs);
    return;
  }

  // dispatch all keys to adventure manager
  adventureManager.keyPressed(key); 
}

function mouseReleased() {
  // dispatch all mouse events to adventure manager
  adventureManager.mouseReleased();
}

// function drawCharacters() {
//   for( let i = 0; i < characters.length; i++ ) {
//     characters[i].draw();
//   }
// }

//-------------- CLICKABLE CODE  ---------------//

function setupClickables() {
  // All clickables to have same effects
  for( let i = 0; i < clickables.length; i++ ) {
    clickables[i].onHover = clickableButtonHover;
    clickables[i].onOutside = clickableButtonOnOutside;    
  }

  // we do specific callbacks for each clickable
  clickables[0].onPress = clickableButtonPressed;
  clickables[1].onPress = clickableButtonPressed;
  clickables[2].onPress = clickableButtonPressed;
  clickables[3].onPress = clickableButtonPressed;
  clickables[4].onPress = clickableButtonPressed;
  clickables[5].onPress = clickableButtonPressed;
  clickables[6].onPress = clickableButtonPressed;
  clickables[7].onPress = clickableButtonPressed;
  clickables[8].onPress = clickableButtonPressed;
  clickables[9].onPress = clickableButtonPressed;
  clickables[10].onPress = clickableButtonPressed;
  clickables[11].onPress = clickableButtonPressed;
  clickables[12].onPress = clickableButtonPressed;
  clickables[13].onPress = clickableButtonPressed;
  clickables[14].onPress = clickableButtonPressed;
  clickables[15].onPress = clickableButtonPressed;
  clickables[16].onPress = clickableButtonPressed;
  clickables[17].onPress = clickableButtonPressed;
  clickables[18].onPress = clickableButtonPressed;
  clickables[19].onPress = clickableButtonPressed;
  clickables[20].onPress = clickableButtonPressed;
  clickables[21].onPress = clickableButtonPressed;
  clickables[22].onPress = clickableButtonPressed;
  clickables[23].onPress = clickableButtonPressed;
  clickables[24].onPress = clickableButtonPressed;
  clickables[25].onPress = clickableButtonPressed;
  clickables[26].onPress = clickableButtonPressed;
  clickables[27].onPress = clickableButtonPressed;
  clickables[28].onPress = clickableButtonPressed;
  clickables[29].onPress = clickableButtonPressed;
}

// tint when mouse is over
clickableButtonHover = function () {
  this.color = "#AA33AA";
  this.noTint = false;
  this.tint = "#FF0000";
}

// color a light gray if off
clickableButtonOnOutside = function () {
  // backto our gray color
  this.color = "#AAAAAA";
}

clickableButtonPressed = function() {
  adventureManager.clickablePressed(this.name);
} 

//-- specific button callbacks: these will add or subtrack anger, then
//-- pass the clickable pressed to the adventure manager, which changes the
//-- state. A more elegant solution would be to use a table for all of these values
// clGoomazonPays = function() {
//     characters[goomazon].addAnger(2);
//     characters[nimby].subAnger(1);
//     characters[bigLabor].addAnger(1);
//     adventureManager.clickablePressed(this.name);
// }

// clCityPays = function() {
//   characters[mayor].addAnger(1);
//   characters[nimby].subAnger(1);
//   characters[goomazon].subAnger(2);
//   adventureManager.clickablePressed(this.name);
// }

// clRaiseTaxes = function() {
//   characters[nimby].addAnger(1);
//   characters[consumer].addAnger(1);
//   characters[treeHugger].addAnger(1);
//   characters[goomazon].subAnger(1);
//   adventureManager.clickablePressed(this.name);
// }

// clBuildRival = function() {
//   characters[nimby].addAnger(2);
//   characters[consumer].subAnger(1);
//   characters[goomazon].addAnger(1);
//   characters[bigLabor].addAnger(1);
//   adventureManager.clickablePressed(this.name);
// }

// clIgnoreThem = function() {
//   characters[nimby].addAnger(1);
//   characters[treeHugger].addAnger(1);
//   characters[bigLabor].addAnger(1);
//   adventureManager.clickablePressed(this.name);
// }

// clCutArts = function() {
//   characters[treeHugger].addAnger(2);
//   characters[consumer].addAnger(2);
//   characters[mayor].addAnger(1);
//   adventureManager.clickablePressed(this.name);
// }

// clCutTransportation = function() {
//   characters[treeHugger].addAnger(3);
//   characters[mayor].addAnger(1);
//   characters[consumer].addAnger(1);
//   adventureManager.clickablePressed(this.name);
// }

// clCutCityWages = function() {
//   characters[mayor].addAnger(2);
//   characters[bigLabor].addAnger(2);
//   characters[consumer].addAnger(1);
//   adventureManager.clickablePressed(this.name);
// }

// clCutParks = function() {
//   characters[mayor].addAnger(1);
//   characters[treeHugger].addAnger(2);
//   characters[consumer].addAnger(1);
//   adventureManager.clickablePressed(this.name);
// }





//-------------- CHARACTERS -------------//
// function allocateCharacters() {
//   // load the images first
//   characterImages[goomazon] = loadImage("assets/goomazon.jpg");
//   characterImages[mayor] = loadImage("assets/mayor.jpg");
//   characterImages[bigLabor] = loadImage("assets/bigLabor.jpg");
//   characterImages[nimby] = loadImage("assets/nimby.jpg");
//   characterImages[treeHugger] = loadImage("assets/treeHugger.jpg");
//   characterImages[consumer] = loadImage("assets/consumer.jpg");

//   for( let i = 0; i < characterImages.length; i++ ) {
//     characters[i] = new Character();
//     characters[i].setup( characterImages[i], 50 + (400 * parseInt(i/2)), 120 + (i%2 * 120));
//   }

//   // default anger is zero, set up some anger values
//   characters[bigLabor].addAnger(1);
//   characters[nimby].addAnger(2);
//   characters[treeHugger].addAnger(1);
//   characters[consumer].subAnger(2); // test
// }

// class Character {
//   constructor() {
//     this.image = null;
//     this.x = width/2;
//     this.y = width/2;
//   }

//   setup(img, x, y) {
//     this.image = img;
//     this.x = x;
//     this.y = y;
//     this.anger = 0;
//   }

//   draw() {
//     if( this.image ) {
//       push();
//       // draw the character icon
//       imageMode(CENTER);
//       image( this.image, this.x, this.y );

//       // draw anger emojis
//       for( let i = 0; i < this.anger; i++ ) {
//         image(angerImage, this.x + 70 + (i*40), this.y +10 );
//       }

//       pop();
//     }
//   }

//   getAnger() {
//     return this.anger;
//   }

//   // add, check for max overflow
//   addAnger(amt) {
//     this.anger += amt;
//     if( this.anger > maxAnger ) {
//       this.anger = maxAnger;
//     }

//   }

//   // sub, check for below zero
//   subAnger(amt) {
//     this.anger -= amt;
//     if( this.anger < 0 ) {
//       this.anger = 0;
//     }
//   }
// }

//-------------- ROOMS --------------//

// hard-coded text for all the rooms
// the elegant way would be to load from an array
// function loadAllText() {
//   // go through all states and setup text
//   // ONLY call if these are ScenarioRoom
  
// // copy the array reference from adventure manager so that code is cleajer
//   scenarioRooms = adventureManager.states;

//   scenarioRooms[startScreen].setText("Who Pays for it?", "The underground tunnels cost money to maintain. Goomazon threatens to leave the city if they have to pay for all the maintenance work. Who pays for it?");
//   scenarioRooms[goomazonMovesScreen].setText("Do we lure them back?", "Goomazon moves their headquarters to our rival city across the river. They layoff local workers. How should we respond?");
//   scenarioRooms[cityPaysScreen].setText("What do we cut?", "The city budget is getting tanked because of the cost of the tunels. Which programs should we cut?");
//   scenarioRooms[raisedTaxesScreen].setText("How do we help the economy?", "The wealthy leave the city in droves. Restaurants start closing and our tax base is depleted. What do we do?");
//   scenarioRooms[rivalCompanyScreen].setText("It's bad, what do we do?", "The rival company is even worse than Goomazon. In addition to being anti-union, they force everyone to wear silly uniforms, sing happy children's songs and sign the most restrictive NDAs ever.");
//   scenarioRooms[goomazonExpands].setText("Oh-no! Now what to do?", "Goomazon expands its operations. It is now both in your city and the rival city. It's driven out all the local businesses.");
//   scenarioRooms[cityUgly].setText("How can we fix this?", "The city has cut the budget to some of its essential services. It's been a cascading effect. Without arts and adequate transportation, everyone has become depressed. THE END.");
//   scenarioRooms[workersStrike].setText("How do we respond?", "There are massive worker's strikes. The city is shut down. Big labor is angry and riling people up. Thousands of protesters are in the streets.");
// }

//-------------- SUBCLASSES / YOUR DRAW CODE CAN GO HERE ---------------//

// Instructions screen has a backgrounnd image, loaded from the adventureStates table
// It is sublcassed from PNGRoom, which means all the loading, unloading and drawing of that
// class can be used. We call super() to call the super class's function as needed
class ScenarioRoom extends PNGRoom {
  // Constructor gets calle with the new keyword, when upon constructor for the adventure manager in preload()
  constructor() {
    super();    // call super-class constructor to initialize variables in PNGRoom

    this.titleText = "";
    this.bodyText = "";
  }

  // should be called for each room, after adventureManager allocates
  setText( titleText, bodyText ) {
    this.titleText = titleText;
    this.bodyText = bodyText;
    this.drawY = 360;
    this.drawX = 52;
  }

  // call the PNGRoom superclass's draw function to draw the background image
  // and draw our instructions on top of this
    draw() {
      // this calls PNGRoom.draw()
      super.draw();
      
      push();

      // title text
      fill(255);
      textAlign(LEFT);
      textFont(headlineFont);
      textSize(36);

      text("How do we feel?", this.drawX , 60);

      // title text
      textSize(30);

      text(this.titleText, this.drawX , this.drawY);
     
      // Draw text in a box
      //text(this.titleText, width/6, height/6, this.textBoxWidth, this.textBoxHeight );
    
      textFont(bodyFont);
      textSize(24);

      text(this.bodyText, this.drawX , this.drawY + 60, width - (this.drawX*2),height - (this.drawY+100) );
      
      pop();
    }
}

