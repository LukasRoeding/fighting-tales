import * as PIXI from '../node_modules/pixi.js/dist/pixi.mjs'
import * as io from '../node_modules/socket.io-client/dist/socket.io.js';
import { connect } from './socket.js';

let app = new PIXI.Application({ width: innerWidth, height: innerHeight });
document.body.appendChild(app.view);
let sprite = PIXI.Sprite.from('sample.png');
app.stage.addChild(sprite);

const graphics = new PIXI.Graphics();

// Rectangle
graphics.beginFill(0xDE3249);
graphics.drawRect(50, 50, 100, 100);
graphics.endFill();

connect(io);

app.stage.addChild(graphics);

// Add a variable to count up the seconds our demo has been running
let elapsed = 0.0;
// Tell our application's ticker to run a new callback every frame, passing
// in the amount of time that has passed since the last tick
app.ticker.add((delta) => {
    // Add the time to our total elapsed time
    elapsed += delta;
    // Update the sprite's X position based on the cosine of our elapsed time.  We divide
    // by 50 to slow the animation down a bit...
    sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
});
console.log("moin")