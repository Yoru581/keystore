export interface IGame {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    reviewsCount: number;
    salesCount: number;
}

export type GameCardPublic = Pick<IGame, 'id' | 'title' | 'price' | 'salesCount'>