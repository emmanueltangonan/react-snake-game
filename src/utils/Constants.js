export const Options = {
    gridHeight: 300, //px
    gridWidth: 400, //px
    snakeGirth: 10, //px,
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
    CONTINUE: 'Continue'
};