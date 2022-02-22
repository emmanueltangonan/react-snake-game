export const Options = {
    gridHeight: 5, 
    gridWidth: 6, 
    snakeGirth: 10, 
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