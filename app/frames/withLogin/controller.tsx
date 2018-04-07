import { FrameController } from "neweb";
export default class extends FrameController<any, any, any> {
    onInit() {
        this.config.session.getItem("login").on((login) => {
            this.set({ login });
        });
    }
    async getInitialData() {
        return {
            login: await this.config.session.getItem("login").wait(),
        };
    }
    async logout() {
        this.config.session.setItem("login", null);
    }
}
