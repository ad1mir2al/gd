const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.Physics,
		C3.Plugins.Sprite,
		C3.Behaviors.bound,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Physics.Acts.CreateRevoluteJoint,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Physics.Acts.ApplyTorque,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Cnds.AngleWithin,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Физика: 0},
	{фон: 0},
	{ОграничитьСценой: 0},
	{СледитьЗа: 0},
	{байкер: 0},
	{заднееколесо: 0},
	{переднееколесо: 0},
	{Клавиатура: 0},
	{ТайловыйФон: 0},
	{телепорт: 0},
	{Спрайт: 0}
];

self.InstanceType = {
	фон: class extends self.ITiledBackgroundInstance {},
	байкер: class extends self.ISpriteInstance {},
	заднееколесо: class extends self.ISpriteInstance {},
	переднееколесо: class extends self.ISpriteInstance {},
	Клавиатура: class extends self.IInstance {},
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	телепорт: class extends self.ISpriteInstance {},
	Спрайт: class extends self.ISpriteInstance {}
}