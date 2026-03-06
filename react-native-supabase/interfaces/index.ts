

export interface IProduct {
    id: number;
    name: string;
    price: number;
    description?: string;
    category: string;
    launch_date?: Date;
    created_at: Date
}