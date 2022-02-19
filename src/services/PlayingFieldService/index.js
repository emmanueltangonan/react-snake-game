import { Options } from "../../utils/Constants";

const PlayingFieldService = {
  isInsidePlayingField: (top, left) => {
    return top >= 0 
      && top <= Options.gridHeight
      && left >= 0
      && left <= Options.gridWidth;
  }
};

export default PlayingFieldService;