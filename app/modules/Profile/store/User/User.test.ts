import { UserModel } from "./User"

test("can be created", () => {
  const user = UserModel.create({
    userId: 'id1',
    nickname: 'Vadim',
    email: 'admin@gmail.com',
    cartItems: []
  })

  expect(user).toMatchSnapshot()
})
