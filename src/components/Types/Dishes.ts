import comments from "./Comments";

export default interface MenuDishes {
    id: number,
    name: string,
    image: string,
    category: string,
    label: string,
    price: string,
    description: string,
    comments: comments[]
}