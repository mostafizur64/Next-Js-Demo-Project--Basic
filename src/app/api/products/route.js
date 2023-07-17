import { NextResponse } from "next/server";
import db from '@/db.json'
export const GET = (request) => {
    // console.log(request.cookie.get(''),request.headers.get('x-forwarded-host'))

    const { searchParams } = new URL(request.url);
    console.log(searchParams)
    const categoryId = searchParams.get('categoryId');
    console.log(categoryId)
    let products = db.products;
    if (categoryId) {
        products = products.filter((product) => product.category === +categoryId);
    }
    return NextResponse.json(products)
}

export const POST = async (request) => {
    const body = await request.json()
    db.products.push(body);
    return NextResponse.json({message:'product added successfully'});
}