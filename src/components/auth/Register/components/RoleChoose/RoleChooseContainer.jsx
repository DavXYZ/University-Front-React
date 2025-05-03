"use client"

import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import RoleChoose from "./RoleChoose"
import { getUserRole } from "../../../../../redux/reducers/authUserReducer"
import { roles } from "../../../../../constants/roles"
import { useState } from "react"

const RoleChooseContainer = (props) => {
  const [selectedRole, setSelectedRole] = useState(null)
  const navigate = useNavigate()

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId)
  }

  const handleCreateAccount = () => {
    if (selectedRole) {
      props.getUserRole(selectedRole)
      navigate("/register")
    }
  }

  return (
    <RoleChoose
      selectedRole={selectedRole}
      roles={roles}
      handleRoleSelect={handleRoleSelect}
      handleCreateAccount={handleCreateAccount}
    />
  )
}

const mapDispatchToProps = {
  getUserRole,
}

export default connect(null, mapDispatchToProps)(RoleChooseContainer)
