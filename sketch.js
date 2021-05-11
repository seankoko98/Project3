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
var logoSprite;

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

  // create logo sprites 
    logoSprite1 = createSprite(630,300,300,300);
    logoSprite1.addAnimation('regular', loadAnimation('assets/logo1.png', 'assets/logo5.png'));
    
    logoSprite2 = createSprite(380,300,300,300);
    logoSprite2.addAnimation('regular', loadAnimation('assets/logo1.png', 'assets/logo5.png'));

  // call OUR function to setup additional information about the p5.clickables
  // that are not in the array 
  setupClickables(); 

  fs = fullscreen();

  frameRate(20);
}

// Adventure manager handles it all!
function draw() {
  // draws background rooms and handles movement from one to another
  adventureManager.draw();


//warning sign score keeper   
  // ending 1 warning graphics
  if( adventureManager.getStateName() === "Ending1") {
    image(warningImage, 650, 30, 80, 80);
    image(warningImage, 720, 30, 80, 80);
    image(warningImage, 790, 30, 80, 80);
  }

   // ending 2 warning graphics
  if( adventureManager.getStateName() === "Ending2") {
    image(warningImage, 990, 210, 80, 80);
    image(warningImage, 1060, 210, 80, 80);
    image(warningImage, 1130, 210, 80, 80);
  }

     // ending 3 warning graphics
  if( adventureManager.getStateName() === "Ending3") {
    image(warningImage, 650, 210, 80, 80);
    image(warningImage, 720, 210, 80, 80);
    image(warningImage, 790, 210, 80, 80);
  }

   // ending 4 warning graphics
  if( adventureManager.getStateName() === "Ending4") {
    image(warningImage, 650, 30, 80, 80);
    image(warningImage, 720, 30, 80, 80);
    image(warningImage, 790, 30, 80, 80);
  }

     // ending 5 warning graphics
  if( adventureManager.getStateName() === "Ending5") {
    image(warningImage, 650, 210, 80, 80);
    image(warningImage, 720, 210, 80, 80);
    image(warningImage, 790, 210, 80, 80);
  }

     // ending 6 warning graphics
  if( adventureManager.getStateName() === "Ending6") {
    image(warningImage, 990, 130, 80, 80);
    image(warningImage, 1060, 130, 80, 80);
    image(warningImage, 1130, 130, 80, 80);
  }

    // ending 7 warning graphics
  if( adventureManager.getStateName() === "Ending7") {
    image(warningImage, 650, 30, 80, 80);
    image(warningImage, 720, 30, 80, 80);
    image(warningImage, 790, 30, 80, 80);
  }

      // ending 8 warning graphics
  if( adventureManager.getStateName() === "Ending8") {
    image(warningImage, 650, 130, 80, 80);
    image(warningImage, 720, 130, 80, 80);
    image(warningImage, 790, 130, 80, 80);
  }

    // ending 9 warning graphics
  if( adventureManager.getStateName() === "Ending9") {
    image(warningImage, 650, 30, 80, 80);
    image(warningImage, 720, 30, 80, 80);
    image(warningImage, 790, 30, 80, 80);
  }

     // ending 10 warning graphics
  if( adventureManager.getStateName() === "Ending10") {
    image(warningImage, 990, 210, 80, 80);
    image(warningImage, 1060, 210, 80, 80);
    image(warningImage, 1130, 210, 80, 80);
  }
  
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
  this.color = "#01BAD7";
  this.noTint = false;
  this.tint = "#FF0000";
  this.width = 250;
  this.height = 50;
  this.textSize = 18;
  this.textColor = "#FFFFFF";
  this.stroke = "FFFFFF";
}

// color a light gray if off
clickableButtonOnOutside = function () {
  // backto our gray color
  this.color = "#AAAAAA";
  this.width = 250;
  this.height = 50;
  this.textSize = 18;
  this.textColor = "#FFFFFF";
  this.stroke = "FFFFFF";
}

clickableButtonPressed = function() {
  adventureManager.clickablePressed(this.name);
  this.width = 250;
  this.height = 50;
  this.textSize = 18;
  this.textColor = "#FFFFFF";
  this.stroke = "FFFFFF";
} 

// class LogoRoom to draw animated logos 

class LogoRoom1 extends PNGRoom {
  draw() {
    super.draw();
    drawSprite(logoSprite1);
  }
}

class LogoRoom2 extends PNGRoom {
  draw() {
    super.draw();
    drawSprite(logoSprite2);
  }
}


