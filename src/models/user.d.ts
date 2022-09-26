


/**
 * 用户类型
 */
export type UserType = {
  id: number,
  username: string,
  userAccount: string,
  avatarUrl?: string,
  gender: string,
  phone: string,
  email?: string,
  userStatus?: number,
  userRole?: number,
  planetCode?: string,
  createTime: Date,
  tags?: string[] | string,
  profile?: string
}