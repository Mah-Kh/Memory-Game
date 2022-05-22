export interface ICard {
  id: number;
  image: string;
  clicked: boolean;
  found: boolean;
  handleClick: (id: number, image: string) => void;
}

// export type CardContextType = {
//   cards: ICard[];
//   handleSelectedCard: (image: string) => void;
// };
