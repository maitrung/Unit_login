import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate{
    async canActivate(context: ExecutionContext){
        const request = context.switchToHttp().getRequest();
        return request.UnauthorizedException;
    }
}