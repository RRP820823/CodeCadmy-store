import React, { useEffect } from "react"
import Image from 'next/image'
import { calculatePrice, getCurrencySymbol } from "../../../utilities/utilities"
import { addItem } from "../cart/cartSlice.js"
import { loadData } from "./inventorySlice"
//added image  component


export const Inventory = ({ inventory, currencyFilter, dispatch }) => {
  const onMount = () => {
    dispatch(loadData())
  }
  useEffect(onMount, [dispatch])

  const onClickHandler = (inventoryItem) => {
    dispatch(addItem(inventoryItem))
  }

  if (inventory.length === 0) {
    return <p> Sorry, no products are currently available... </p>
  }

  return <ul id="inventory-container">{inventory.map(createInventoryItem)}</ul>

  function createInventoryItem(inventoryItem) {
    const { price, name, img } = inventoryItem
    const displayPrice = calculatePrice(price, currencyFilter)
    return (
      <li key={name} className="item">
        <Image src={img} alt={""} height = {300}  width  = {800}  style={{objectFit: "contain"}}/>
        <h3>{name}</h3>
        <h3 className="price">
          {getCurrencySymbol(currencyFilter)}
          {displayPrice.toFixed(2)} {currencyFilter}
        </h3>
        <button
          onClick={() => onClickHandler(inventoryItem)}
          className="add-to-cart-button"
        >
          Add to Cart
        </button>
      </li>
    )
  }
}
