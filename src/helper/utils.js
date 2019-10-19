import { Type as EnemyType } from '../constants/enemy';
import { Type as CardListType } from '../constants/card-list';
import { CardType, Size } from '../constants/card';

/**
 * @param cardCode - card code
 * card code:
 *  000      000      00000
 *  type     color    value
 */
export const parseCardCode = (cardCode) => {
  const code = `00000000000${cardCode.toString(2)}`.slice(-11);
  const value = parseInt(code.slice(-5), 2);
  const color = parseInt(code.slice(-8, -5), 2);
  const type = parseInt(code.slice(0, -8), 2);
  return {
    value, color, type,
  };
};

export const generateEnemyCardList = (cardNum) => {
  const num = cardNum > 7 ? 7 : cardNum;
  return Array(num).fill({}).map((_, index) => ({
    id: index,
    type: CardType.Unknown,
  }));
};

export const parseEnemyTypeToCardListType = (enemyType) => {
  switch (enemyType) {
    case EnemyType.Left:
      return CardListType.Left;
    case EnemyType.Right:
      return CardListType.Right;
    case EnemyType.Top:
      return CardListType.Top;
    default:
      return CardListType.Bottom;
  }
};

export const getCardListOptions = (cardListType, cardCount, marginLength) => {
  const cardListSize = (cardCount - 1) * marginLength + Size.width;

  switch (cardListType) {
    case CardListType.Left:
    case CardListType.Right:
      return {
        marginKey: 'top',
        direction: cardListType === CardListType.Left ? 1 : -1,
        style: {
          '--width': `${Size.height}px`,
          '--height': `${Size.width}px`,
          height: cardListSize,
        },
      };
    case CardListType.Top:
    case CardListType.Bottom:
      return {
        marginKey: 'left',
        direction: cardListType === CardListType.Top ? -1 : 1,
        style: {
          '--width': `${Size.width}px`,
          '--height': `${Size.height}px`,
          width: cardListSize,
        },
      };
    default: return {};
  }
};
