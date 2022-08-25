import Image from "next/image";
import { FC } from "react";
import { Product } from "../types/Product.type";

const convertDisplayPrice = (amount: string) => {
    return `¥${Number(amount).toLocaleString('ja')}`;
}

const ProductCard: FC<{data: Product}> = ({data}) => {
    const {title, description, featuredImage: {url, altText}, compareAtPriceRange: {maxVariantPrice}} = data;

    return <div className="shadow-md rounded w-full h-[250px] px-3 py-1 border border-slate-200">
        <div className="text-center">
            {url ? (
                <Image src={url} alt={altText} width={200} height={150} objectFit='contain' />
            ) : (
                <div className="h-[200px] w-[150px] bg-gray"/>
            )}
        </div>
        <h1 className="font-bold text-slate-900">{title}</h1>
        <div>
            <span className='text-xs text-slate-400'>{description}</span>
        </div>
        <div className="text-right mt-auto mt-2 font-bold">
            <span>{convertDisplayPrice(maxVariantPrice.amount)}</span>
        </div>
    </div>
}

export default ProductCard;