export interface Product {
    id: string;
    title: string;
    description: string;
    vendor: string;
    featuredImage: {
        altText: string;
        url: string;
    };
    compareAtPriceRange: {
        maxVariantPrice: {
            amount: string;
        };
        minVariantPrice: {
            amount: string;
        };
    };
}