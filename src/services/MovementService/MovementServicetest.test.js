import MovementService from ".";
import { Movement } from "../../utils/Constants";

describe('MovementService.isValidDirection', () => {
  test('Change direction from UP to UP should be false', () => {
    expect(MovementService.isValidDirection(Movement.UP, Movement.UP))
      .toBe(false);
  });

  test('Change direction from UP to DOWN should be false', () => {
    expect(MovementService.isValidDirection(Movement.UP, Movement.DOWN))
      .toBe(false);
  });

  test('Change direction from UP to LEFT should be true', () => {
    expect(MovementService.isValidDirection(Movement.UP, Movement.LEFT))
      .toBe(true);
  });

  test('Change direction from UP to RIGHT should be true', () => {
    expect(MovementService.isValidDirection(Movement.UP, Movement.RIGHT))
      .toBe(true);
  });

  test('Change direction from DOWN to DOWN should be false', () => {
    expect(MovementService.isValidDirection(Movement.DOWN, Movement.DOWN))
      .toBe(false);
  });

  test('Change direction from DOWN to UP should be false', () => {
    expect(MovementService.isValidDirection(Movement.DOWN, Movement.UP))
      .toBe(false);
  });

  test('Change direction from DOWN to LEFT should be true', () => {
    expect(MovementService.isValidDirection(Movement.DOWN, Movement.LEFT))
      .toBe(true);
  });

  test('Change direction from DOWN to RIGHT should be true', () => {
    expect(MovementService.isValidDirection(Movement.DOWN, Movement.RIGHT))
      .toBe(true);
  });

  test('Change direction from LEFT to LEFT should be false', () => {
    expect(MovementService.isValidDirection(Movement.LEFT, Movement.LEFT))
      .toBe(false);
  });

  test('Change direction from LEFT to RIGHT should be false', () => {
    expect(MovementService.isValidDirection(Movement.LEFT, Movement.RIGHT))
      .toBe(false);
  });

  test('Change direction from LEFT to UP should be true', () => {
    expect(MovementService.isValidDirection(Movement.LEFT, Movement.UP))
      .toBe(true);
  });

  test('Change direction from LEFT to DOWN should be true', () => {
    expect(MovementService.isValidDirection(Movement.LEFT, Movement.DOWN))
      .toBe(true);
  });

  test('Change direction from RIGHT to RIGHT should be false', () => {
    expect(MovementService.isValidDirection(Movement.RIGHT, Movement.RIGHT))
      .toBe(false);
  });

  test('Change direction from RIGHT to LEFT should be false', () => {
    expect(MovementService.isValidDirection(Movement.RIGHT, Movement.LEFT))
      .toBe(false);
  });

  test('Change direction from RIGHT to UP should be true', () => {
    expect(MovementService.isValidDirection(Movement.RIGHT, Movement.UP))
      .toBe(true);
  });

  test('Change direction from RIGHT to DOWN should be true', () => {
    expect(MovementService.isValidDirection(Movement.RIGHT, Movement.DOWN))
      .toBe(true);
  });
});