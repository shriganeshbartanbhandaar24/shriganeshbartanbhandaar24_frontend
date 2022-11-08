import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userLogOut } from "../../action/userAction"
import Loader from "../../components/shared/Loader"
import Message from "../../components/shared/Message"

const UserLogoutPage = ({ history }) => {
  const dispatch = useDispatch()

  const { error, loading, isLogOut } = useSelector((state) => state.userLogOut)

  dispatch(userLogOut())

  useEffect(() => {
    if (isLogOut) {
      history.push("/")
    }
  }, [isLogOut, history])
  return (
    <div>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <div>Hello World</div>
    </div>
  )
}

export default UserLogoutPage
