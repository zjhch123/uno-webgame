import {
  CardType,
  CardColor,
  CardValue,
} from '../constants/card';

export const AllCards = [
  {
    id: 1,
    type: CardType.Normal,
    color: CardColor.Red,
    value: CardValue.Zero,
  },
  {
    id: 2,
    type: CardType.Normal,
    color: CardColor.Yellow,
    value: CardValue.One,
  },
  {
    id: 3,
    type: CardType.Normal,
    color: CardColor.Blue,
    value: CardValue.Two,
  },
  {
    id: 4,
    type: CardType.Normal,
    color: CardColor.Green,
    value: CardValue.Three,
  },
  {
    id: 5,
    type: CardType.Normal,
    color: CardColor.Red,
    value: CardValue.Add2,
  },
  {
    id: 6,
    type: CardType.Normal,
    value: CardValue.Add4,
    color: CardColor.None,
  },
  {
    id: 7,
    type: CardType.Normal,
    color: CardColor.Blue,
    value: CardValue.Ban,
  },
  {
    id: 8,
    type: CardType.Normal,
    color: CardColor.Green,
    value: CardValue.Revert,
  },
  {
    id: 9,
    type: CardType.Normal,
    color: CardColor.Green,
    value: CardValue.ChangeColor,
  },
  {
    id: 10,
    type: CardType.Unknown,
    value: CardValue.None,
    color: CardColor.None,
  },
];
