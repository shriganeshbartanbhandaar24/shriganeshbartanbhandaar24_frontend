import React, { useEffect } from "react"
import { Button, Col, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
//import { listProducts } from "../../action/productAction"
import Loader from "../../components/shared/Loader"
import Message from "../../components/shared/Message"

const ProductListPage = ({ history, match }) => {
  const dispatch = useDispatch()

  const { loading, error, products } = useSelector(
    (state) => state.productsList
  )
  const { userInfo } = useSelector((state) => state.userInfo)

  const { success: successDelete } = useSelector((state) => state.userselete)
  //no-unused-vars

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      // dispatch(listProducts())
    } else {
      history.push("/login")
    }
  }, [dispatch, userInfo])

  const deleteHandler = (id) => {
    //dispatch(deleteProducts(id))
  }
  const createProductHandler = () => {}

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus"></i> Create
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {products ? (
            products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <LinkContainer to={`admin/product/${product._id}/edit`}>
                    <div>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => {
                          deleteHandler(product._id)
                        }}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </div>
                  </LinkContainer>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                <h3>
                  <strong>There are No Products Registered Yet.</strong>
                </h3>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  )
}

export default ProductListPage

//CSB
//Interview
