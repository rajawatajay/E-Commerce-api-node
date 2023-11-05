const CartItem = require("../models/cartItem.model");
const userService = require("../services/user.service.js");


async function updateCartItem(userId, cartItemId, cartItemData){
    console.log(userId, cartItemId, cartItemData)
try {
    const item = await findCartItemById(cartItemId);

    const user = await userService.findUserById(item.userId);
    console.log("item user ", user)
    if(!user){
        throw new Error("user not found : ", userId)
    }

    if(user._id.toString()===userId.toString()){
        item.quantity=cartItemData.quantity;
        item.price=item.quantity*item.product.price;
        item.discountedPrice=item.quantity*item.product.discountedPrice;
        const updateCartItem=await item.save();
        return updateCartItem;
    }
    else{
        throw new Error("you can not update this cart item");
    }
} catch (error) {
    throw new Error(error.message)
}
}

async function removeCartItem(userId, cartItemId){
    const cartItem=await findCartItemById(cartItemId);
    const user = await userService.findUserById(userId);

console.log(user._id.toString(), cartItem.userId.toString())

    if(user._id.toString()===cartItem.userId.toString()){
return await CartItem.findByIdAndDelete(cartItemId)
    }
    throw new Error("you can not remove another user's item");

}

async function findCartItemById(cartItemId){
    const cartItem=await CartItem.findById(cartItemId);
if(cartItem){
    return cartItem
}
else{
    throw new Error("cartItem not found with id", cartItemId);
}
}
module.exports={
    updateCartItem,
    removeCartItem,
    findCartItemById,
    
}