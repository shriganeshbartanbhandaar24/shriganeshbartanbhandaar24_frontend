import React, { useEffect } from "react"
import { Button, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { listUsers, deleteUser } from "../../action/userAction"
import Loader from "../../components/shared/Loader"
import Message from "../../components/shared/Message"

const UserListPage = ({ history }) => {
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.userInfo)
  const { loading, error, users } = useSelector((state) => state.userList)

  const { success: successDelete } = useSelector((state) => state.userselete)
  //no-unused-vars

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())
    } else {
      history.push("/login")
    }
  }, [dispatch, successDelete])

  const deleteHandler = (id) => {
    dispatch(deleteUser(id))
  }

  return (
    <>
      <h1>Users</h1>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/user/${user._id}/edit`}>
                    <div>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => {
                          deleteHandler(user._id)
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
                  <strong>There are No Users Registered Yet.</strong>
                </h3>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  )
}

export default UserListPage

//CSB
//Interview
