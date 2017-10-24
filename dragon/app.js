var settings = {
	width: 800,
	height: 600,
	backgroundColor: 0x1099bb
};

var app = new PIXI.Application(settings);

$("body").append(app.view);

var dragon = PIXI.Sprite.fromImage('./dragon.png');
dragon.anchor.set(0.5);
dragon.x = app.renderer.width - app.renderer.width / 4.5;
dragon.y = app.renderer.height / 2;

var hero = PIXI.Sprite.fromImage('./hero.png');
hero.anchor.set(0.5);
hero.x = app.renderer.width - app.renderer.width / 1.5;
hero.y = app.renderer.height / 2;

app.stage.addChild(dragon, hero);

app.ticker.add(function(delta) {
	dragon.rotation += 0.1 * delta;
});
