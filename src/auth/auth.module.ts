import {Module} from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UserDataModule } from "src/userData/userData.module";
import { LocalStrategy } from "./local.strategy";

@Module({
    imports:[PassportModule,UserDataModule],
    providers:[LocalStrategy],
     exports:[],
     controllers:[]
})
export class AuthModule {

}