import { UserModel } from '../models/user';

export const findUserByGoogleId = async (googleID: string) => {
    const user = await UserModel.findOne({ googleID });
    return user ? user.toJSON() : null;
};

export const createNewUser = async (credentials) => {
    return (await new UserModel(credentials).save()).toJSON();
};

export const findUserByUserId = async (userID: string) => {
    const user = await UserModel.findById(userID);
    return user.toObject();
};

export const updateUser = async (userID: string, fields: Partial<IUser>) => {

    const user = await UserModel.findByIdAndUpdate(
        userID,
        fields,
        { new: true });

    return user.toObject();
};
