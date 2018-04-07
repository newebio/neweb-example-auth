import { FrameController } from "neweb";
export default class extends FrameController<any, any, any> {

    async login(login: string) {
        await this.config.session.setItem("login", login);
        this.config.navigate("/");
    }
}
