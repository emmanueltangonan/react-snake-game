export const Options = {
  gridHeight: 30, 
  gridWidth: 50, 
  snakeGirth: 10,
  tickIntervalLimit: 1, // ms
  speedIncrease: 10, // ms
  numberOfFood: 2
};

export const Movement = {
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right'
};

export const GameState = {
  NEW: 'new',
  ACTIVE: 'active',
  PAUSED: 'paused',
  GAME_OVER: 'game_over'
};

export const ButtonText = {
  START: 'Start',
  PAUSE: 'Pause',
  CONTINUE: 'Continue',
  NEW_GAME: 'New Game'
};

export const GameMode = {
  SINGLE_PLAYER: 'Single Player',
  DEATHMATCH: 'Deathmatch'
};