import Score from "../../Score";
import HandlerBase from "./HandlerBase";
import { ALL_STRING, DEUCE_START_SCORE, SCORE_STRINGS, SEPARATOR } from "../../constants";

export default class AllHandler extends HandlerBase {
    constructor(){
        super();
    }

    handleScore(score: Score): string {
        return `${SCORE_STRINGS[score.P1]}${SEPARATOR}${ALL_STRING}`;
    }

    canHandle(score: Score): boolean {
        return score.P1 < DEUCE_START_SCORE && score.sameScore;
    }
}