// Generated by Phaser Editor v1.2.1

/**
 * preBackGround.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group. If not given the game world will be used instead.
 */
function preBackGround(aGame, aParent) {
	Phaser.Group.call(this, aGame, aParent);

	/* --- pre-init-begin --- */

	// you can insert code here

	/* --- pre-init-end --- */

	var preBackGound_png = this.game.add.sprite(0, 0, 'preImage', 'preBackGound.png', this);
	preBackGound_png.scale.setTo(0.9127847483458625, 0.8339597286371081);

	var GroupAnimTimeOver = this.game.add.group(this);
	this.game.add.sprite(155, 451, 'preImage', 'loading0000.png', GroupAnimTimeOver);
	

	this.fGroupAnimTimeOver = GroupAnimTimeOver;
	/* --- post-init-begin --- */

	// you can insert code here

	/* --- post-init-end --- */
}

/** @type Phaser.Group */
var preBackGround_proto = Object.create(Phaser.Group.prototype);
preBackGround.prototype = preBackGround_proto;
preBackGround.prototype.constructor = Phaser.Group;

/* --- end generated code --- */

// you can insert code here

