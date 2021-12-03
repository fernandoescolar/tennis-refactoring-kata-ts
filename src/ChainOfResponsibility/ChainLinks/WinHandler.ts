import Score from "../../Score";
import HandlerBase from "./HandlerBase";
import { WIN_STRING } from "../../constants";

export default class WinHandler extends HandlerBase {
    constructor(){
        super();
    }

    handleScore(score: Score): string {
        const player = score.player1Win ? score.player1 : score.player2;
        return `${WIN_STRING} ${player}`;
    }

    canHandle(score: Score): boolean {
        return score.isBonus && score.diffScore > 1;
    }
}