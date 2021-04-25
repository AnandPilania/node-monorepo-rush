import { AuthenticatedUser } from "@travelhoop/infrastructure-types";
import { Guid } from "guid-typescript";
import { sign } from "jsonwebtoken";
import { addMinutes } from "date-fns";

interface AuthServiceDependencies {
  expiry: number;
  secretKey: string;
}

export class AuthService {
  constructor(private readonly deps: AuthServiceDependencies) {}

  createToken(userId: Guid) {
    const expiresIn = addMinutes(new Date(), this.deps.expiry);
    const authUser: AuthenticatedUser = { id: userId, exp: expiresIn.getTime() };
    return sign(authUser, this.deps.secretKey);
  }
}
