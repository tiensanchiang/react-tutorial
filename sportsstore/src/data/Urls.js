import { DataTypes } from "./Types"

const protocol = "http";
const hostname = "192.168.56.1";
const port = 3001;

export const RestUrls = {
    [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
    [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
    [DataTypes.ORDERS]: `${protocol}://${hostname}:${port}/api/orders`,
}

export const GraphQlUrl = `${protocol}://${hostname}:${port}/graphql`;
export const authUrl = `${protocol}://${hostname}:${port}/login`;
