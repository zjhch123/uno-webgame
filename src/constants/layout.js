import { Type, ClassName } from './enemy';

export const Layout = {
  1: [
    {
      type: Type.Top,
      className: ClassName.Top,
    },
  ],
  2: [
    {
      className: ClassName.LeftTop,
      type: Type.Top,
    },
    {
      className: ClassName.RightTop,
      type: Type.Top,
    },
  ],
  3: [
    {
      className: ClassName.Left,
      type: Type.Left,
    },
    {
      className: ClassName.Top,
      type: Type.Top,
    },
    {
      className: ClassName.Right,
      type: Type.Right,
    },
  ],
  4: [
    {
      className: ClassName.Left,
      type: Type.Left,
    },
    {
      className: ClassName.LeftTop,
      type: Type.Top,
    },
    {
      className: ClassName.RightTop,
      type: Type.Top,
    },
    {
      className: ClassName.Right,
      type: Type.Right,
    },
  ],
  5: [
    {
      className: ClassName.Left,
      type: Type.Left,
    },
    {
      className: ClassName.LeftTop,
      type: Type.Left,
    },
    {
      className: ClassName.Top,
      type: Type.Top,
    },
    {
      className: ClassName.RightTop,
      type: Type.Right,
    },
    {
      className: ClassName.Right,
      type: Type.Right,
    },
  ],
};
