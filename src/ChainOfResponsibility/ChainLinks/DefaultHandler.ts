import Score from "../../Score";
import HandlerBase from "./HandlerBase";
import { SCORE_STRINGS, SEPARATOR } from "../../constants";

export default class DefaultHandler extends HandlerBase {
    constructor(){
        super();
    }

    handleScore(score: Score): string {
        return `${this.getName(score.P1)}${SEPARATOR}${this.getName(score.P2)}`;
    }

    canHandle(score: Score): boolean {
        return !score.isBonus && !score.sameScore;
    }

    private getName(score: number) : string {
        return SCORE_STRINGS[score];
    }
}