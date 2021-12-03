import Score from "../Score";

export default interface IHandler {
    setNext(handler: IHandler): void;
    handle(score: Score): string;
}