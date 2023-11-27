export interface Product{
 productID:Number;
 productName: string;
 productVol: string;
 productImage?:string;
 productPromotionPrice:string;
 productOriginalPrice:string;
}

export const products: Product[] = [ 
 { productID:1, productName: "Shisiedo vitamin C serum", productVol:"30ml", productPromotionPrice:"$50", productOriginalPrice:"$62.5"},
 { productID:2, productName: "Niacinamide serum", productVol:"30ml", productPromotionPrice:"$7", productOriginalPrice:"$8.75"},
 { productID:3, productName: "Shisiedo vitamin C serum", productVol:"60ml", productPromotionPrice:"$70", productOriginalPrice:"$100"},
 { productID:4, productName: "Laniege lip sleeping mask", productVol:"5ml", productPromotionPrice:"$10", productOriginalPrice:"$12.5"},
 { productID:5, productName: "Isntree eye cream", productVol:"10ml", productPromotionPrice:"$15", productOriginalPrice:"$18.75"},
 { productID:6, productName: "T’iam B3 serum" , productVol:"30ml", productPromotionPrice:"$25", productOriginalPrice:"$31.25"},
 { productID:7, productName: "cerave retinol" , productVol:"10ml", productPromotionPrice:"$34", productOriginalPrice:"$42.5"},
 { productID:8, productName: "Abib sunscreen" , productVol:"50ml", productPromotionPrice:"$27", productOriginalPrice:"$33.75"},
 { productID:9, productName: "The ordinary azelaic acid" , productVol:"30ml", productPromotionPrice:"$28", productOriginalPrice:"$35"},
 { productID:10, productName: "Good molecules niacinamide" , productVol:"75ml", productPromotionPrice:"$30", productOriginalPrice:"$37.5"},
 { productID:11, productName: "Differin gel" , productVol:"8ml", productPromotionPrice:"$25", productOriginalPrice:"$31.25"},
 { productID:12, productName: "Glow recipe toner" , productVol:"30ml", productPromotionPrice:"$30", productOriginalPrice:"$37.5"},
 { productID:13, productName: "Paula’s choice bha liquid" , productVol:"250ml", productPromotionPrice:"$70", productOriginalPrice:"$87.50"},
 { productID:14, productName: "Elf hydrated moisturizer" , productVol:"75ml", productPromotionPrice:"$17", productOriginalPrice:"$21.25"},
 { productID:15, productName: "Cosrx snail mucin" , productVol:"50ml", productPromotionPrice:"$25", productOriginalPrice:"$31.25"},
 { productID:16, productName: "Nivea super sun gel" , productVol:"90ml", productPromotionPrice:"$24", productOriginalPrice:"$30"},
 { productID:17, productName: "Medi heal toner" , productVol:"100ml", productPromotionPrice:"$20", productOriginalPrice:"$25"},
 { productID:18, productName: "Cetaphil gentle facewash" , productVol:"559ml", productPromotionPrice:"$30", productOriginalPrice:"$39"},
 { productID:19, productName: "Cerave moisturizer" , productVol:"200ml", productPromotionPrice:"$36", productOriginalPrice:"$45"},
 { productID:20, productName: "Anua heartleaf toner" , productVol:"100ml", productPromotionPrice:"$30", productOriginalPrice:"$39"}
];