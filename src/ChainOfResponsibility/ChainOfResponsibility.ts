import Score from "../Score";
import IHandler from "./IHandler";
import { AdvantageHandler, AllHandler, DefaultHandler, DeuceHandler, WinHandler } from "./ChainLinks";

export default class ChainOfResponsibility {
    private _handler: IHandler;

    constructor() {
        const chain: IHandler[] = [
            new AdvantageHandler(),
            new AllHandler(),
            new DefaultHandler(),
            new DeuceHandler(),
            new WinHandler()
        ];

        for (let i = 0; i < chain.length - 1; i++) {
            chain[i].setNext(chain[i + 1]);
        }

        this._handler = chain[0];
    }

    handle(score: Score): string {
        return this._handler.handle(score);
    }
}