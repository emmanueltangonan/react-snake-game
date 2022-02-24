export const Options = {
    gridHeight: 20, 
    gridWidth: 30, 
    snakeGirth: 10,
    tickIntervalLimit: 1, // ms
    speedIncrease: 10, // ms
    numberOfFood: 2
};

export const Movement = Object.freeze({
    UP: Symbol('up'),
    DOWN: Symbol('down'),
    LEFT: Symbol('left'),
    RIGHT: Symbol('right')
});

export const GameState = Object.freeze({
    NEW: Symbol('new'),
    ACTIVE: Symbol('active'),
    PAUSED: Symbol('paused'),
    GAME_OVER: Symbol('game_over')
});

export const ButtonText = {
    START: 'Start',
    PAUSE: 'Pause',
    CONTINUE: 'Continue',
    NEW_GAME: 'New Game'
};