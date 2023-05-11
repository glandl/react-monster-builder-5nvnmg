const IMAGE_BASE: string = 'https://cddataexchange.blob.core.windows.net/images/monster-builder/';

export enum Flipping {
  None = 0,
  X = 1,
  Y = 2,
  XY = X | Y,
}

export type PartStyle = { left: string; top: string; scale?: string; rotate?: string };

export function partStyle(
  left: number,
  top: number,
  rotate: number = 0,
  flipping: Flipping = Flipping.None,
  size: number = 1
): PartStyle {
  let result: PartStyle = { left: `${left}px`, top: `${top}px` };

  if (size !== 1 || flipping != Flipping.None) {
    let scaleX = size ?? 1;
    let scaleY = size ?? 1;
    if ((flipping ?? Flipping.None) & Flipping.X) {
      scaleX *= -1;
    }
    if ((flipping ?? Flipping.None) & Flipping.Y) {
      scaleY *= -1;
    }
    result = { ...result, scale: `${scaleX} ${scaleY}` };
  }

  if (rotate !== 0) {
    result = { ...result, rotate: `${rotate ?? 0}deg` };
  }

  return result;
}

export function img(name: string): string {
  return IMAGE_BASE + name;
}
