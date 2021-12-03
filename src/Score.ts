import { SCORE_STRINGS } from "./constants";

export default class Score {
  private _p1: number = 0;
  private _p2: number = 0;

  constructor(readonly player1: string, readonly player2: string) {}

  get P1(): number {
    return this._p1;
  }

  get P2(): number {
    return this._p2;
  }

  get diffScore(): number {
    return Math.abs(this._p1 - this._p2);
  }

  get sameScore(): boolean {
    return this.diffScore === 0;
  }

  get player1Win(): boolean {
    return this._p1 > this._p2;
  }

  get player2Win(): boolean {
    return this._p2 > this._p1;
  }

  get isBonus(): boolean {
    return this._p1 >= SCORE_STRINGS.length || this._p2 >= SCORE_STRINGS.length;
  }

  inc(playerName: string): void {
    if (playerName === this.player1)
      this._p1++;

    if (playerName === this.player2)
      this._p2++;
  }
}
