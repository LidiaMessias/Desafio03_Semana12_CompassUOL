export type Product = {
    id: number;
    title: string;
    subtitle: string;
    shorDescription: string;
    description: string;
    size: string;
    color: string[];
    price: number;
    discount: number;
    isInSale: boolean;
    category: string;
    tags: string[];
    new: boolean;
    addInfo: string;
}
