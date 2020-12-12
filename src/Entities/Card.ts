enum Shape {
  Circle = 'Circle',
  Triangle = 'Triangle',
  Cross = 'Cross',
  Square = 'Square',
  Star = 'Star',
  Whot = 'Whot',
}

export class Card {
  constructor(public shape: Shape, public number: number) {}

  toString(): string {
    return `${this.number} of ${this.shape}`;
  }

  static newDeck(): Card[] {
    const circles: Card[] = [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14].map(
      item => new Card(Shape.Circle, item),
    );
    const triangles: Card[] = [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14].map(
      item => new Card(Shape.Triangle, item),
    );
    const crosses: Card[] = [1, 2, 3, 5, 7, 10, 11, 13, 14].map(
      item => new Card(Shape.Cross, item),
    );
    const squares: Card[] = [1, 2, 3, 5, 7, 10, 11, 13, 14].map(
      item => new Card(Shape.Square, item),
    );
    const stars: Card[] = [1, 2, 3, 4, 5, 7, 8].map(
      item => new Card(Shape.Star, item),
    );
    const whots: Card[] = [20, 20, 20, 20, 20].map(
      item => new Card(Shape.Whot, item),
    );

    return [
      ...circles,
      ...triangles,
      ...crosses,
      ...squares,
      ...stars,
      ...whots,
    ];
  }
}
