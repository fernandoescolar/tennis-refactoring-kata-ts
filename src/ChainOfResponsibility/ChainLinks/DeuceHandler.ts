import Score from "../../Score";
import HandlerBase from "./HandlerBase";
import { DEUCE_START_SCORE, DEUCE_STRING } from "../../constants";

export default class DeuceHandler extends HandlerBase {
    constructor(){
        super();
    }

    handleScore(score: Score): string {
        return DEUCE_STRING;
    }

    canHandle(score: Score): boolean {
        return score.P1 >= DEUCE_START_SCORE && score.sameScore;
    }
}