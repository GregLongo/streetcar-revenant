layers(['obj' ,'ui'], 'obj')

const MOVE_SPEED = 120
const JUMP_FORCE = 400
const BIG_JUMP_FORCE = 600
let CURRENT_JUMP_FORCE = JUMP_FORCE
const ENEMY_SPEED = 20
const FALL_DEATH = 800

let isJumping = true
const maps =[
  [
    '                                 ',
    '                                 ',
    '                                 ',
    '                                 ',
    '                                 ',
    '                                 ',
    '                                 ',
    '    %  _*_%_                     ',
    '                                 ',
    '              ^   ^     -+     D ',
    '                        ()       ',
    '==========================   ===='
  ],
  [
    'W                                W',
    'W                                W',
    'W                                W',
    'W                                W',
    'W  %     @@@@@          S S      W',
    'W                     S S S      W',
    'W       !           S S S S    D W',
    'W                 S S S S S      W',
    '__________________________________'
  ]
]

const levelCfg = {
  width: 32,
  height: 32,
  '=': [sprite('Roof_Edge'), solid()],
  '_': [sprite('Brick2_crack2'), solid()],
  'W': [sprite('Brick2_with_fungus_bottom_edge'), solid()],
  '$': [sprite('coin'), 'coin', scale(.6)],
  '%': [sprite('crate'), 'coin-surprise', solid()],
  '*': [sprite('crate'), 'charm-surprise', solid()],
  '}': [sprite('broken_crate'), solid()],
  '(': [sprite('Brick2_with_fungus_edge_L'), solid()],
  ')': [sprite('Brick2_with_fungus_edge_R'), solid()],
  '-': [sprite('barrel_green'),solid()],
  '+': [sprite('barrel_red'), solid()],
  '^': [sprite('baddie-1'), 'dangerous', solid()],
  '#': [sprite('charm'), 'charm', body()],
  'D': [sprite('Door1_Tape'), 'door'],
  '!': [sprite('baddie-2_still'), 'dangerous', solid()],
  '@': [sprite('balcony'), solid()],
  'S': [sprite('Brick2_with_fungus_upper_edge'), solid()]
}

const gameLevel = addLevel(maps[1], levelCfg)

const scoreLabel = add([
  text('0'),
  pos(30, 6),
  layer('ui'),
  {
    value: '0',
  }
])

add([text('level ' + '0'), pos(40,6)])

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
      this.scale = vec2(1)
      timer= 0
      isBig = false
      CURRENT_JUMP_FORCE = JUMP_FORCE
    },
    biggify(time){
     this.scale = vec2(1.5)
      timer= time
      isBig = true
      CURRENT_JUMP_FORCE = BIG_JUMP_FORCE
    }
  }
}

const player = add([
  sprite('heroine_still'),
  pos(30,0),
  body(),
  big(),
  origin('bot')
  ],
)

keyDown('left', () => {
  player.move(-MOVE_SPEED, 0)
})

keyDown('right', () => {
  player.move(MOVE_SPEED, 0)
})

player.collides('dangerous', (d) => {
  if(isJumping){
    destroy(d)
  }else{
    go('lose', { score: scoreLabel.value})
  }
})

player.action(() => {
  if(player.grounded()){
    isJumping = false
  }
})

keyDown('space', () => {
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


//bbbaddie

action('dangerous', (d) =>{
  d.move(-ENEMY_SPEED,0)
})



player.action(() => {
  camPos(player.pos)
  if(player.pos.y >= FALL_DEATH)
    go('lose', { score: scoreLabel.value })
})

player.collides('door', () =>{
  keyPress('up', () =>{
    go ('game',{
      level: (level + 1),
      score: scoreLabel.value
    })
  })
})
