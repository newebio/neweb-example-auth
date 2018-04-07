import { IRequest, IRoute, IRouter, IRouterConfig } from "neweb";
import o from "onemitter";
export default class Router implements IRouter {
    protected routeEmitter = o<IRoute>();
    protected currentRequest: IRequest;
    constructor(protected config: IRouterConfig) {
        this.currentRequest = this.config.request;
        this.config.session.getItem("login").on(() => {
            this.navigate({ request: this.currentRequest });
        });
    }
    public navigate({ request }: { request: IRequest }) {
        this.currentRequest = request;
        switch (request.url) {
            case "/":
                if (!this.config.session.getItem("login").has() || !this.config.session.getItem("login").get()) {
                    this.routeEmitter.emit({
                        type: "redirect",
                        url: "/login",
                    });
                    return;
                }
                this.routeEmitter.emit({
                    type: "page",
                    page: {
                        rootFrame: {
                            name: "withLogin",
                            params: {},
                            frames: {},
                        },
                        url: "/",
                    },
                });
                break;
            case "/login":
                this.routeEmitter.emit({
                    type: "page",
                    page: {
                        rootFrame: {
                            name: "login",
                            params: {},
                            frames: {},
                        },
                        url: "/login",
                    },
                });
        }
    }
    public onNewRoute(cb: any) {
        this.routeEmitter.addListener(cb);
    }
    public waitRoute() {
        return this.routeEmitter.wait();
    }
    public dispose() {
        this.routeEmitter.removeAllListeners();
    }
}
