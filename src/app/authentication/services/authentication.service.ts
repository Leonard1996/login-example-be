import { User } from "../../user/entities/user.entity";
import { getRepository } from "typeorm";
import jwt from 'jsonwebtoken';

export class AuthenticationService {
    public static login = async (username: string, password: string): Promise<{ accessToken: string }> => {
        const userRespository = getRepository(User)

        const user = await userRespository.findOneOrFail({
            where: {
                username,
                password,
                deleted: false,
            }
        })

        const accessToken = jwt.sign(
            { username: user.username, id: user.id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: process.env.ACCESS_TOKEN_LIFETIME_MINUTES },
        );

        return { accessToken };
    }
}