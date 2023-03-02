// import Users from '../models/Users';

export default interface IServiceUser {
  verifyLogin(email?: string, password?: string): Promise<{
    type: number | null;
    message: string;
  }>;
}
