'use client'

import { AgencySidebarOption, SubAccount, SubAccountSidebarOption } from '@prisma/client'
import React from 'react'

type Props = {
    defaultOpen?:boolean
    subAccount: SubAccount[]
    sidebarOpt: AgencySidebarOption[] | SubAccountSidebarOption[]
    sidebarLogo: string
    details: any
    user: any
    id: any
}

const MenuOptions = ({
    details,
    id,
    defaultOpen,
    user,
    subAccount,
    sidebarLogo,
    sidebarOpt,
}: Props) => {
  return (
    <div>MenuOptions</div>
  )
}

export default MenuOptions