import { Type } from '../constants/enemy';

const generateEnemyStatus = (className, type) => ({ className, type });

export const getEnemiesClassTypeList = (count) => {
  switch (count) {
    case 1:
      return [generateEnemyStatus('top', Type.Top)];
    case 2:
      return [generateEnemyStatus('left-top', Type.Top), generateEnemyStatus('right-top', Type.Top)];
    case 3:
      return [
        generateEnemyStatus('left', Type.Left),
        generateEnemyStatus('top', Type.Top),
        generateEnemyStatus('right', Type.Right),
      ];
    case 4:
      return [
        generateEnemyStatus('left', Type.Left),
        generateEnemyStatus('left-top', Type.Top),
        generateEnemyStatus('right-top', Type.Top),
        generateEnemyStatus('right', Type.Right),
      ];
    case 5:
      return [
        generateEnemyStatus('left', Type.Left),
        generateEnemyStatus('left-top', Type.Left),
        generateEnemyStatus('top', Type.Top),
        generateEnemyStatus('right-top', Type.Right),
        generateEnemyStatus('right', Type.Right),
      ];
    default:
      return [];
  }
};
