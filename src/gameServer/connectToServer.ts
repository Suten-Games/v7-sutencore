// import { PlayerState } from "src/components/playerStateComponent";
// import { Player } from "src/gameObjects/player";
// import { UI } from "src/gameUI/ui";
// import { writeToCl } from "../gameFunctions/writeToCL";
// import { joinSocketsServer } from "./wsConnection";

// export async function connectToServer(ui: UI,json: PlayerState, player: Player) {
//     // log(`debug: 8 Inside connectToServer`)

//     try {
//         let socket = await joinSocketsServer(
//             ui.gc,
//             ui.ab,
//             ui.bp,
//             player,
//             ui.cl
//         );
//     } catch (error) {
//         writeToCl(`:(  Game socket failed to load  :(`, `Please refresh/reload the scene`)

//         return;
//     }
// }