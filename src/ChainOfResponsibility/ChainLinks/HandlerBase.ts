import Score from "../../Score";
import IHandler from "../IHandler";

class EmptyHandler implements IHandler {
    setNext(handler: IHandler): void {

    }
    handle(score: Score): string {
        return "";
    }
}

export default abstract class HandlerBase implements IHandler {
    private _next: IHandler = new EmptyHandler();

    setNext(handler: IHandler): void {
        this._next = handler;
    }

    handle(score: Score): string {
        if (this.canHandle(score)) {
            return this.handleScore(score);
        }

        if (this._next) {
            return this._next.handle(score);
        }

        return "";
    }

    abstract handleScore(score: Score): string;

    abstract canHandle(score: Score): boolean;
}