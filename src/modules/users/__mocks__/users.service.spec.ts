import { userStub } from '../test/stubs/user.stub';

export const UsersService = jest.fn().mockReturnValue({
  getAllUsers: jest.fn().mockResolvedValue(userStub()),
  creatNewUser: jest.fn().mockResolvedValue([userStub()]),
  getUserById: jest.fn().mockResolvedValue(userStub()),
});
