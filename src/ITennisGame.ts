export default interface ITennisGame {
  wonPoint(playerName: string): void;
  getScore(): string;
}
