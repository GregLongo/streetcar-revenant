kaboom({
  ...{
    "fullscreen":true,
    "width":0,
    "height":240,
    "scale":1,
    "startScene":"start",
    "version":"0.5.0",
    "clearColor":[0.03529411764705882,0.06274509803921569,0.20392156862745098,1]},
    global: true,
    plugins: [ peditPlugin, asepritePlugin, kbmspritePlugin ],
});
loadSprite("bg", "sprites/nightsky_1920x1080.png");
loadSprite("bg2", "sprites/Ruined_City_Background_Preview_1440x1080.png");

loadSprite("Brick2_crack2", "sprites/Brick2_crack2.png");
loadSprite("Brick2_with_fungus_bottom_edge", "sprites/Brick2_with_fungus_bottom_edge.png");
loadSprite("Brick2_with_fungus_edge_L", "sprites/Brick2_with_fungus_edge_L.png");
loadSprite("Brick2_with_fungus_edge_R", "sprites/Brick2_with_fungus_edge_R.png");
loadSprite("Brick2_with_fungus_upper_edge", "sprites/Brick2_with_fungus_upper_edge.png");
loadSprite("Brick_roof_1", "sprites/Brick_roof_1.png");
loadSprite("Brick_roof_2", "sprites/Brick_roof_2.png");
loadSprite("Door1_Tape", "sprites/Door1_Tape.png");
loadSprite("Door1_Simple", "sprites/Door1_Simple.png");
loadSprite("Door_Wood", "sprites/door_wood.png");
loadSprite("Door_Cursed", "sprites/door_cursed.png");
loadSprite("Roof_Edge", "sprites/Roof_Edge.png");
loadSprite("baddie-1_still", "sprites/baddie-1_still.png");
// loadSprite("baddie-2", "sprites/baddie-2_still.png");
loadSprite("balcony", "sprites/balcony.png");
loadSprite("barrel_green", "sprites/barrel_green.png");
loadSprite("barrel_red", "sprites/barrel_red.png");
loadSprite("broken_crate", "sprites/broken_crate.png");
loadKbmsprite("charm", "sprites/charm.kbmsprite");
loadKbmsprite("chimney-L", "sprites/chimney-L.kbmsprite");
loadKbmsprite("coin", "sprites/coin.kbmsprite");
loadSprite("crate", "sprites/crate.png");
loadSprite("heroine_right", "sprites/heroine_still_right.png");
loadSprite("heroine_left", "sprites/heroine_still_left.png");
loadSprite("kaboom", "sprites/pure_22.png");
loadSprite("haduken", "sprites/pure_09.png");
loadSprite("key", "sprites/key.png");
loadSprite("fireCharm", "sprites/firecharm.png");
loadSprite("starCharm", "sprites/starcharm.png");

// loadSprite("heroine", "sprites/heroine7x9.png", {
//   sliceX: 9,
//   sliceY: 7,
//   anims: {
//     walkLeft:{ from: 29, to: 35},
//     walkRight:{ from: 37, to: 44}
//   },
// })


loadSprite("heroine", "sprites/heroine.png", {
  sliceX: 13,
  sliceY: 21,
  anims: {
    idleLeft:{ from: 117, to: 117 },
    walkLeft:{ from: 118, to: 125},
    idleRight:{ from: 143, to: 143},
    walkRight:{ from: 144, to: 151},
    spellCastLeft:{ from: 14, to: 19},
    spellCastCenter:{ from: 28, to: 34},
    spellCastRight:{ from: 39, to: 45},
    spellCastDouble:{ from: 27, to:35}
  },
})



loadSprite("baddie-1", "sprites/baddie-1.png", {
  sliceX: 13,
  sliceY: 21,
  anims: {
    walkLeft:{ from: 118, to: 125},
    walkRight:{ from: 144, to: 151},
    die:{ from: 260, to: 265},
  },
})

loadSprite("baddie-2", "sprites/orc.png", {
  sliceX: 13,
  sliceY: 21,
  anims: {
    walkLeft:{ from: 118, to: 125},
    walkRight:{ from: 144, to: 151},
  },
})

loadSprite("baddie-3", "sprites/elf_mage.png", {
  sliceX: 13,
  sliceY: 21,
  anims: {
    walkLeft:{ from: 118, to: 125},
    walkRight:{ from: 144, to: 151},
    spellCastRight:{ from: 39, to: 45},
  },
})

loadSprite("baddie-4", "sprites/tuxskel.png", {
  sliceX: 13,
  sliceY: 21,
  anims: {
    walkLeft:{ from: 118, to: 125},
    walkRight:{ from: 144, to: 151},
  },
})



loadSprite("effects", "sprites/effects.png", {
  sliceX: 20,
  sliceY: 10,
  anims: {
    starmagic:{ from: 10, to: 12 },
    wildfire:{ from: 17, to: 19 },
    purplefire:{ from: 32, to: 37 },
    deathmagic:{from:40, to:45},
    blood:{ from: 123, to: 127}
  },
})

loadSprite("puff", "sprites/puff.png", {
  sliceX: 5,
    sliceY: 1,
  anims: {
    puff:{ from: 1, to: 5 },
  },
})


function addButton(txt, p, f) {

		const bg = add([
			pos(p),
			rect(100, 30),
			origin("center"),
			color(1, 1, 1),
		]);

		// TODO: text() and rect() both have 'width'
		add([
			text(txt),
      scale(1),
			pos(p),
			origin("center"),
			color(0, 0, 0),
		]);

		bg.action(() => {
			if (bg.isHovered()) {
				bg.color = rgb(0.8, 0.8, 0.8);
				if (mouseIsClicked()) {
					f();
				}
			} else {
				bg.color = rgb(1, 1, 1);
			}
		});

	}

scene("start", (args = {}) => {
  layers(['bg','ui'], 'ui')
  camIgnore(["bg"]);
  add([
    sprite("bg2"),
    layer('bg'),
  ])
  add([
    text('TappingBones Games Presents'),
    origin('center'),
    pos(width()/2, height()/3),
    scale(2)
  ])
  add([
    text('Streetcar Revenant'),
    origin('center'),
    pos(width()/2, height()/2.5),
    scale(6)
  ])
  add([
    text('Ghosts of New York'),
    origin('center'),
    pos(width()/2, height()/2),
    scale(2)
  ])
  addButton("play", vec2(width()/2, height()/1.5), () => {
    go('main'),
    scale(2)
  });
});

scene("lose", (args = {}) => {
add([
  text(args.score),
  origin('center'),
  pos(width()/2, height()/2),
  scale(10)
])

	addButton("replay", vec2(width()/2, height()/1.5), () => {
    go('main')
	});

});

scene("main", (args = {}) => {
layers(['bg','obj' ,'ui'], 'obj')
camIgnore(["bg",'ui']);

const MOVE_SPEED = 220
const JUMP_FORCE = 400
const BIG_JUMP_FORCE = 600
let CURRENT_JUMP_FORCE = JUMP_FORCE
const ENEMY_SPEED = 60
const FALL_DEATH = 800

let isJumping = true
const maps =[
  [ '                                 ',
    '                                 ',
    '                                 ',
    '                                 ',
    '                                 ',
    '       )             ~ )         ',
    '       )    *    @%@@@ )         ',
    '       )               )         ',
    '   C   )      &        )       D ',
    '       )               )         ',
    '=================================='
  ],
  [ 'W                                w',
    'W                                W',
    'W                                W',
    'W                                W',
    'W                                W',
    'W                        ~       W',
    'W   *    @%@@@          S S      W',
    'W                     S S S      W',
    'W   B   !           S S S S    D W',
    'W                 S S S S S      W',
    'W________________________________W'
  ]
]

const levelCfg = {
  width: 32,
  height: 32,
  '=': [sprite('Roof_Edge'), solid()],
  '_': [sprite('Brick2_crack2'), 'bricks', solid()],
  'W': [sprite('Brick2_with_fungus_bottom_edge'),'bricks', solid()],
  '$': [sprite('coin'), 'coin', scale(.6)],
  '%': [sprite('crate'), 'coin-surprise', solid()],
  '*': [sprite('crate'), 'charm-surprise', solid()],
  '}': [sprite('broken_crate'), solid()],
  '(': [sprite('Brick2_with_fungus_edge_L'), 'bricks', solid()],
  ')': [sprite('Brick2_with_fungus_edge_R'), 'bricks', solid()],
  '-': [sprite('barrel_green'),solid()],
  '+': [sprite('barrel_red'), solid()],
  '#': [sprite('charm'), 'charm', body()],
  'D': [sprite('Door1_Simple'), 'door', 'locked'],
  'Q': [sprite('Door_Wood'), 'wood', 'door', 'locked'],
  'C': [sprite('Door_Cursed'), 'cursed', 'door', 'locked'],
  'B': [sprite('Door1_Simple'), 'back', 'door', 'unlocked'],
  '@': [sprite('balcony'), solid()],
  'S': [sprite('Brick2_with_fungus_upper_edge'), solid()],
  // '^':  [rect(32, 64), ,'dangerous', 'skeleton', solid(), body()],
  '^': [sprite('baddie-1',{animSpeed: 0.05,frame: 125}),'dangerous', 'baddie','skeleton',  solid(), body()],
  '!': [sprite('baddie-2',{animSpeed: 0.05,frame: 125}),'dangerous', 'baddie', 'ogre',  origin('center'), solid(), body(),{dir:-1, timer:0}],
  '0': [sprite('baddie-3',{animSpeed: 0.05,frame: 125}),'dangerous', 'baddie','elfMage',  origin('center'), solid(), body(),{dir:-1, timer:0}],
  '&': [sprite('baddie-4',{animSpeed: 0.05,frame: 125}),'dangerous', 'baddie','skeletonMage',  origin('center'), solid(), body(),{dir:-1, timer:0}],
  '~': [sprite('key'),'key'],
  'F': [sprite('fireCharm'), 'fireCharm'],
  'G': [sprite('starCharm'), 'starCharm', scale(2)],
  pos:vec2(0, 0)
}

const levelIndex = args.level ?? 0
const gameLevel = addLevel(maps[levelIndex], levelCfg )

const scoreGlobal = args.score ?? 0
const scoreLabel = add([
  text(scoreGlobal),
  pos(150, 6),
  layer('ui'),
  scale(2),
  {
    value: '0',
  }
])

add([text('level ' + parseInt(levelIndex + 1)), pos(20,6),layer('ui'),scale(2)])

function big() {
  let timer = 0
  let isBig = false
  return{
    update(){
      if(isBig){
        timer -=dt()
        if(timer<=0){
          this.smallify()
        }
      }
    },
    isBig(){
      return isBig
    },
    smallify() {
      // this.scale = vec2(1)
      timer= 0
      isBig = false
      CURRENT_JUMP_FORCE = JUMP_FORCE
    },
    biggify(time){
     // this.scale = vec2(1.5)
     add([text('High Jump'), pos(300, 10),layer('ui')])
      timer= time
      isBig = true
      CURRENT_JUMP_FORCE = BIG_JUMP_FORCE
    }
  }
}

add([
  sprite("bg"),
  layer('bg'),
])
var thisPos;


if(args.back==true){
  thisPos= gameLevel.getPos(32,9)
}
else{
  thisPos= gameLevel.getPos(4,9)
}
const player = add([
  sprite('heroine',{
    animSpeed: 0.1,
    frame: 143
  }),
  pos(thisPos),
  {
    dir: vec2(-1,0)
  },
  solid(),
  body(),
  big(),
  origin('center')
  ],
)


player.action(() => {
    player.resolve();

});
//
// const skeleton = add([
//   sprite('baddie-1',{
//     animSpeed: 0.1,
//     frame: 143
//   }),
//   pos(30,0),
//   body(),
//   ],
// )

const skel = get('skeleton')
for (var i = 0; i < skel.length; i++) {
  debug.log(i)
  var thisSkel = skel[i]
  thisSkel.use('skel'+i)
  thisSkel.use(health(5))
}

action('skeleton', (s)=>{
  s.move(-ENEMY_SPEED,0)
})
every('skeleton', (s)=>{
  s.play('walkLeft')
})


const ogre = get('ogre')
for (var i = 0; i < ogre.length; i++) {
  debug.log(i)
  var thisOgre = ogre[i]
  thisOgre.use('ogre'+i)
  thisOgre.use(health(20))
}


    // action('ogre', (s)=>{
    //   s.move(s.dir * ENEMY_SPEED,0)
    // })

    // collides('ogre', 'bricks', (s)=>{
    //   s.dir = -s.dir
    //   if(s.dir=1){
    //     s.play('walkRight')
    //   }
    //   else if(s.dir=-1){
    //     s.play('walkLeft')
    //   }
    // })

    action('ogre', (s)=>{
      s.move(s.dir * ENEMY_SPEED,0)
      s.timer -=dt()
      if (s.timer <= 0){
        s.dir = -s.dir
        s.use(scale(vec2(1.5 * s.dir, 1.5)))
        s.timer= rand(5)
      }
    })

every('ogre', (s)=>{
  s.play('walkRight')
})



const elfMage = get('elfMage')
for (var i = 0; i < elfMage.length; i++) {
  debug.log(i)
  var thisElfMage = elfMage[i]
  thisElfMage.use('elfMage'+i)
  thisElfMage.use(health(30))
}

    action('elfMage', (s)=>{
      s.move(s.dir * ENEMY_SPEED,0)
      s.timer -=dt()
      if (s.timer <= 0){
        s.dir = -s.dir
        s.use(scale(vec2(1 * s.dir, 1)))
        s.timer= rand(3)
        s.play('spellCastRight')
        wait(.3,()=>{
          enemyMagic(s.pos, s.dir)
          s.play('walkRight')
        })
      }
    })

every('elfMage', (s)=>{
  s.play('walkRight')
})

function enemyMagic(p, d){
  const obj = add([sprite('effects'), pos(p), scale(2), origin(vec2(0, 0)), 'purpleFire', 'dangerous'])
  obj.play('purplefire')
  action('purpleFire', (b) =>{
    obj.move(d * 200, 0)
  })
  wait(.7, () => {
    destroy(obj)
  })
}



const skeletonMage = get('skeletonMage')
for (var i = 0; i < skeletonMage.length; i++) {
  debug.log(i)
  var thisSkeletonMage = skeletonMage[i]
  thisSkeletonMage.use('skeletonMage'+i)
  thisSkeletonMage.use(health(10))
}

    action('skeletonMage', (s)=>{
      s.move(s.dir * ENEMY_SPEED,0)
      s.timer -=dt()
      if (s.timer <= 0){
        skeletonMagic(s.pos, s.dir)
        s.dir = -s.dir
        s.use(scale(vec2(1 * s.dir, 1)))
        if(s.grounded()){
          s.jump(JUMP_FORCE)
        }
        s.timer= rand(3)
      }
    })

every('skeletonMage', (s)=>{
  s.play('walkRight')
})

function skeletonMagic(p, d){
  const obj = add([sprite('effects'), pos(p), scale(1.5), origin(vec2(0, 0)),  'deathMagic', 'dangerous'])
  obj.play('deathmagic')
  action('deathMagic', (b) =>{
    obj.move(d * 200, 0)
  })
  wait(1, () => {
    destroy(obj)
  })
}

function spawnBullet(p){
  const obj = add([sprite('kaboom'), pos(p), scale(.5), origin('center'), 'haduken'])
  wait(.7, () => {
    destroy(obj)
  })
  // const obj = add([
  //   rect(24, 24),
  //   pos(p),
  //   origin('center'),
  //   color(1,1,1),
  //   'haduken'
  // ])
  // wait(.5, () => {
  //   destroy(obj)
  // })
}

keyPress('space', () => {
  spawnBullet(player.pos)
})

BULLET_SPEED = 700

action('haduken', (b) =>{
  b.move(player.dir.scale(BULLET_SPEED))
})




function blood(p){
  const blood = add([sprite('effects'), pos(p)])
  blood.play('blood')
  wait(.5, () => {
    destroy(blood)
  })
}


function puff(p){
  const puff = add([sprite('puff'), pos(p)])
  puff.play('puff')
  wait(.3, () => {
    destroy(puff)
  })
}



collides('haduken', 'baddie', (b,s) =>{
  s.hurt(1)
  // blood(b.pos)
  puff(b.pos)
  destroy(b)
  })




action('baddie', (d) =>{
  d.on('death', () =>{
    blood(d.pos)
    camShake(5);
    wait(.5,()=>{
      destroy(d)
    })
  })
})


collides('haduken', 'bricks', (b) =>{
  destroy(b)
})

function health(hp) {
  return {
    hurt(n) {
      hp -= (n === undefined ? 1 : n);
      this.trigger("hurt");
      if (hp <= 0) {
        this.trigger("death");
      }
    },
    hp() {
      return hp;
    },
  };
}



function spawnKaboom(p) {
  const obj = add([sprite('kaboom'), pos(p), origin('center'), 'kaboom'])
  wait(.5, () => {
    destroy(obj)
  })
}

// function spawnDoubleKaboom(p) {
//   const obj-1 = add([sprite('kaboom'), pos(p), origin('center'), 'kaboom'])
//   const obj-2 = add([sprite('kaboom'), pos(p), origin('center'), 'kaboom'])
//   wait(.5, () => {
//     destroy(obj-1)
//     destroy(obj-2)
//   })
// }

keyPress('shift', () =>{
  spawnKaboom(player.pos.add(player.dir.scale(48)))
})

keyPress('enter', () =>{
  player.play('spellCastCenter')
  spawnKaboom(player.pos.add(player.dir.scale(60)))
  spawnKaboom(player.pos.add(player.dir.scale(-60)))
  player.move(0,0)
})


collides('kaboom', 'bricks', (k,b)=>{
    destroy(b)
})


//wildfire

function spawnWildfire(p) {
  const obj = add([sprite('effects'), pos(p), scale(3), origin('center'), 'wildfire'])
  obj.play('wildfire')
  wait(2, () => {
    destroy(obj)
  })
}


collides('wildfire', 'baddie', (b,s) =>{
  // destroy(s)
  s.hurt(6)
})
//
// action('wildfire', (w)=>{
//   w.move(player.dir.scale(5))
// })



let hasWildfire = true

player.overlaps('fireCharm',(f)=>{
  hasWildfire = true
  destroy(f)
})

keyPress('w', () =>{
if(hasWildfire){
    spawnWildfire(player.pos.add(player.dir.scale(48)))
  }
})



collides('wildfire', 'wood',(f,w)=>{
    if(w.is('door')){
        hasKey=true
        w.changeSprite('Door1_Tape')
      }else{
      destroy(w)
    }
})

//StarMagic


function spawnStarmagic(p) {
  const obj = add([sprite('effects'), pos(p), scale(3), origin('center'), 'starmagic'])
  obj.play('starmagic')
  wait(.3, () => {
    destroy(obj)
  })
}


collides('starmagic', 'baddie', (b,s) =>{
  // destroy(s)
  s.hurt(4)
})
//
// action('wildfire', (w)=>{
//   w.move(player.dir.scale(5))
// })



let hasStarmagic = false

player.overlaps('starCharm',(f)=>{
  hasStarmagic = true
  destroy(f)
})

keyPress('s', () =>{
if(hasStarmagic){
    spawnStarmagic(player.pos.add(player.dir.scale(48)))
  }
})


collides('starmagic', 'cursed',(f,w)=>{
    if(w.is('door')){
        hasKey=true
        w.changeSprite('Door1_Tape')
      }else{
      destroy(w)
    }
})

action('starmagic', (b) =>{
  b.move(player.dir.scale(BULLET_SPEED))
})



////
keyRelease('enter', () =>{
  player.play('idleRight')
})

collides('kaboom', 'baddie', (b,s) =>{
  // destroy(s)
  s.hurt(3)
})


keyDown('left', () => {
  // player.changeSprite('heroine_left')
  // player.play('walkLeft')
  player.move(-MOVE_SPEED, 0)
  player.dir = vec2(-1,0)
})

keyPress('left', () => {
  player.play('walkLeft')
})

keyRelease('left', () => {
  player.play('idleLeft')
})

keyDown('right', () => {
  // player.changeSprite('heroine_right')
  player.move(MOVE_SPEED, 0)
  player.dir = vec2(1,0)
})

keyPress('right', () => {
  player.play('walkRight')
})

keyRelease('right', () => {
  player.play('idleRight')
})

player.collides('baddie', (d) => {
  if(isJumping){
    destroy(d)
    blood(d.pos)
  }else{
    go('lose', { score: scoreLabel.value})
  }
})

player.action(() => {
  if(player.grounded()){
    isJumping = false
  }
})

keyDown('up', () => {
  if(player.grounded()){
  isJumping = true
  player.jump(CURRENT_JUMP_FORCE)
  }
})

player.on('headbump', (obj) => {
  if (obj.is('coin-surprise')){
    gameLevel.spawn('$', obj.gridPos.sub(0,1))
    destroy(obj)
    gameLevel.spawn('}', obj.gridPos.sub(0,0))
  }
  if (obj.is('charm-surprise')){
    gameLevel.spawn('#', obj.gridPos.sub(0,1))
    destroy(obj)
    gameLevel.spawn('}', obj.gridPos.sub(0,0))
  }
})

action('charm', (charm)=> {
  charm.move(50, 0)
} )

player.collides('charm', (charm) => {
  player.biggify(6)
  destroy(charm)
})

player.collides('coin', (coin) =>{
  scoreLabel.value++
  scoreLabel.text =  scoreLabel.value
  destroy(coin)
})


player.action(() => {
  camPos(player.pos)
  if(player.pos.y >= FALL_DEATH)
    go('lose', { score: scoreLabel.value })
})

let hasKey = false;

player.overlaps("key", (key) => {
  destroy(key);
  hasKey = true;
  add([sprite('key'), pos(500, 0),layer('ui')]);
  add([text('Key'), pos(600, 10),layer('ui')])

});



player.overlaps('door', (d) =>{

  keyPress('tab', () =>{

    if(d.is('locked')){

    if(hasKey){
      d.changeSprite('Door1_Tape')
      wait(.3,()=>{
      keyPress('tab', () =>{
        player.stop();
          go ('main',{
            level: (levelIndex + 1) % maps.length,
            score: scoreLabel.value
        })
      })

      })

      }
    }else{
      d.changeSprite('Door1_Tape')
      keyPress('tab', () =>{
        if(d.is('back')){
          wait(.3,()=>{
            player.stop();
              go ('main',{
                level: (levelIndex - 1) % maps.length,
                score: scoreLabel.value,
                back:true
            })
          })
        }else{
          wait(.3,()=>{
            player.stop();
              go ('main',{
                level: (levelIndex + 1 ) % maps.length,
                score: scoreLabel.value,
                back:false
            })
          })
        }
      })
    }
  })
})



});
start("start");
// debug.inspect = true;
