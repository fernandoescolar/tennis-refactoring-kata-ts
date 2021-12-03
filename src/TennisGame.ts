import ITennisGame from './ITennisGame';
import Score from './Score';
import ChainOfResponsibility from './ChainOfResponsibility';

export default class TennisGame implements ITennisGame {
  private score: Score;
  private chain: ChainOfResponsibility;

  constructor(p1N: string, p2N: string) {
    this.score = new Score(p1N, p2N);
    this.chain = new ChainOfResponsibility();
  }

  getScore(): string {
    return this.chain.handle(this.score);
  }

  wonPoint(playerName: string): void {
    this.score.inc(playerName);
  }
}
