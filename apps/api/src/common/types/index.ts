export type Role = 'admin' | 'Manager'

export type GetUserType = {
  uid: string
  roles: Role[]
}
