const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb,
});
globalThis.__PIXI_APP__ = app;

var texture = PIXI.Texture.from("background2.jpg");
      // create a new Sprite using the texture
      var loadingbackground = new PIXI.Sprite(texture);

      // center the sprites anchor point
      loadingbackground.anchor.x = 0.5;
      loadingbackground.anchor.y = 0.5;
      loadingbackground.width=800;
      loadingbackground.height=600;

      // move the sprite t the center of the screen
      loadingbackground.position.x = 400;
      loadingbackground.position.y = 300;

     app.stage.addChild(loadingbackground);
     
     // add logo here
     var texture = PIXI.Texture.from("logo1.png");
      // create a new Sprite using the texture
      var loadinglogo = new PIXI.Sprite(texture);

      // center the sprites anchor point
      loadinglogo.anchor.x = 0.5;
      loadinglogo.anchor.y = 0.5;
      loadinglogo.width=600;
      loadinglogo.height=400;

      // move the sprite t the center of the screen
      loadinglogo.position.x = 380;
      loadinglogo.position.y = 300;

     app.stage.addChild(loadinglogo);
document.body.appendChild(app.view);

const container = new PIXI.Container();
container.x=200;
container.y=500;
app.stage.addChild(container);

const background = new PIXI.Graphics();
background.beginFill(0x666666);
background.drawRect(0, 0, 400, 20);
background.endFill();
container.addChild(background);

const progress = new PIXI.Graphics();
progress.beginFill(0x00ff00);
progress.drawRect(0, 0, 0, 20);
progress.endFill();
container.addChild(progress);

function updateProgress(value) {
    const maxWidth = 400; // Width of the background rectangle
    const width = Math.max(0, Math.min(1, value)) * maxWidth;
    progress.clear();
    progress.beginFill(0x00ff00);
    progress.drawRect(0, 0, width, 20);
    progress.endFill();
    setTimeout(() => {
        this.makeBaseGame();
    }, 2000);
    // this.makeBaseGame();
}
function makeBaseGame(){
    console.log("ram");
    
    var texture = PIXI.Texture.from("home_V1.jpg");
    var texture2 = PIXI.Texture.from("logo1.png");

    // create a new Sprite using the texture
    var basebg = new PIXI.Sprite(texture);
    var basegamelogo = new PIXI.Sprite(texture2);

    // center the sprites anchor point
    basebg.anchor.x = 0.5;
    basebg.anchor.y = 0.5;

    // move the sprite t the center of the screen
    basebg.width=800;
    basebg.height=600;
    basebg.position.x = 400;
    basebg.position.y = 300;
    app.stage.addChild(basebg);
    // basegame logo add here
     // center the sprites anchor point
     basegamelogo.anchor.x = 0.5;
     basegamelogo.anchor.y = 0.5;
 
     // move the sprite t the center of the screen
     basegamelogo.width=200;
     basegamelogo.height=100;
     basegamelogo.position.x = 400;
     basegamelogo.position.y = 42;
     app.stage.addChild(basegamelogo);
    
     setInterval(() => {
        basegamelogo.visible=true;
        logoLighting(); 
        
    }, 2000);
    function logoLighting(){
        basegamelogo.visible=false;
    }

}
// Example usage
setTimeout(() => {
    updateProgress(1); // Update progress to 100%
    
}, 6000);