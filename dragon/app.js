var settings = {
	width: 800,
	height: 600,
	backgroundColor: 0x262626
};

var app = new PIXI.Application(settings);

$("body").append(app.view);

var textStyle = new PIXI.TextStyle({
	fontFamily: 'Roboto',
	fontSize: 36,
	dropShadow: true,
	droShadowColor: '#000000',
	dropShadowBlur: 4,
	dropShadowAngle: Math.PI / 6,
	dropShaowDistance: 6
});

var messageText = new PIXI.Text('Click on the dragon to try killing it', style);
messageText.x = app.renderer.width / 2;
messageText.y = app.renderer.height - app.renderer.height / 10;

var dragon = PIXI.Sprite.fromImage('./dragon.png');
dragon.anchor.set(0.5);
dragon.x = app.renderer.width - app.renderer.width / 5;
dragon.y = app.renderer.height / 2;
dragon.interactive = true;
dragon.buttonMode = true;
dragon.on('pointerdown', onClick);

var hero = PIXI.Sprite.fromImage('./hero.png');
hero.anchor.set(0.5);
hero.x = app.renderer.width - app.renderer.width / 1.5;
hero.y = app.renderer.height / 2;

app.stage.addChild(dragon, hero, messageText);

app.ticker.add(function(delta) {
	dragon.rotation += 0.1 * delta;
});