"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const onemitter_1 = require("onemitter");
class Router {
    constructor(config) {
        this.config = config;
        this.routeEmitter = onemitter_1.default();
        this.currentRequest = this.config.request;
        this.config.session.getItem("login").on(() => {
            this.navigate({ request: this.currentRequest });
        });
    }
    navigate({ request }) {
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
    onNewRoute(cb) {
        this.routeEmitter.addListener(cb);
    }
    waitRoute() {
        return this.routeEmitter.wait();
    }
    dispose() {
        this.routeEmitter.removeAllListeners();
    }
}
exports.default = Router;
