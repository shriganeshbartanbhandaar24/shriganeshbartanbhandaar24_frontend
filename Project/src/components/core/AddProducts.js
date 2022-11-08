import React, { useState } from "react"
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap"
import { useDispatch } from "react-redux"
import { addProduct } from "../../action/userAction.js"
import FormContainer from "../shared/FormContainer.js"

const AddProducts = () => {
  const dispatch = useDispatch()
  const [productName, setProductName] = useState()
  const [productCategory, setProductCateogry] = useState()
  const [productDescp, setProductDescp] = useState()
  const [productMRP, setProductMRP] = useState()
  const [productPrice, setProductPrice] = useState()
  const [productBrand, setProductBrand] = useState()

  const addProductHandler = (e) => {
    e.preventDefault()
    if (
      !productBrand &&
      !productCategory &&
      !productDescp &&
      !productMRP &&
      !productName &&
      !productPrice
    ) {
      return
    }

    const formData = new FormData()
    formData.append("name", productName)
    formData.append("description", productDescp)
    formData.append("category", productCategory)
    formData.append("price", productMRP)
    formData.append("brand", productBrand)

    dispatch(addProduct(formData))
  }
  return (
    <main className="mt-4">
      <h1 className="text-center">Add Product</h1>

      <FormContainer>
        <Form onSubmit={addProductHandler}>
          <FormGroup className="mb-3">
            <FormLabel>Product Name</FormLabel>
            <FormControl
              value={productName}
              type="text"
              placeholder="Entre the product name..."
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Product Category</FormLabel>
            <FormControl
              value={productCategory}
              placeholder="Entre the product name..."
              onChange={(e) => setProductCateogry(e.target.value)}
              type="text"
              required
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Product Brand</FormLabel>
            <FormControl
              value={productBrand}
              placeholder="Entre the product name..."
              onChange={(e) => setProductBrand(e.target.value)}
              type="text"
              required
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Product Image</FormLabel>
            <FormControl
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0])
              }}
              placeholder="Upload Image"
              accept="image/jpeg"
              required
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Product Price</FormLabel>
            <FormControl
              value={productPrice}
              placeholder="Entre the product name..."
              onChange={(e) => setProductPrice(e.target.value)}
              type="text"
              required
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Product MRP</FormLabel>
            <FormControl
              value={productMRP}
              placeholder="Entre the product name..."
              onChange={(e) => setProductMRP(e.target.value)}
              type="text"
              required
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Product Description </FormLabel>
            <FormControl
              value={productDescp}
              placeholder="Entre the product name..."
              onChange={(e) => setProductDescp(e.target.value)}
              type="text"
              required
            />
          </FormGroup>
          <Button type="submit" className="mt-5">
            Add Product
          </Button>
        </Form>
      </FormContainer>
    </main>
  )
}

export default AddProducts
