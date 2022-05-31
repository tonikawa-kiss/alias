/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "hotspot",
      description: "Generally used to check if bot is Up",
      category: "general",
      usage: `${client.config.prefix}hi`,
      baseXp: 10,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    const buttons = [
      {
        buttonId: "help",
        buttonText: { displayText: `${this.client.config.prefix}help` },
        type: 1,
      },
    ];

    const buttonMessage: any = {
      contentText: `https://discord.gg/8nPk4sH4af
*🕵️‍♂️🎀Hotspot s for grinding location for XP &  best Pokemons & shiny Pokemons 🎀🕵️‍♂️*
*Hot Spot*

*🕵️‍♂️@prashuprohunt🕵️‍♂️*
*🕵️‍♂️NSPU Gaming🕵️‍♂️*
https://youtu.be/Ff-WWBufviU
*🕵️‍♂️Good Luck everyone🕵️‍♂️*
*🎗London🎗*
51.510077,-0.123853
*🎗 Paris 🎗*
48.86158451,2.28936430
*🎗California Disneyland 🎗*
 33.811954,-117.919067
*🎗Santa Monica🎗* 34.009033,-118.497279
*🎗 Pier 39🎗*
37.808673,-122.409821
*🎗NY Central Park🎗* 40.770418,-73.974637
*🎗Union Square🎗* =37.787993 ,-122.407437

*🎗Hong Kong 🎗*
22.319051,114.172118
*🎗Tokyo Disneyland🎗* 35.631209,139.880933
*🎗 Busan🎗*
35.15396,129.05957
*🎗Sydney🎗*
 -33.868820,151.209296
*🎗Budapest 🎗*
47.530248,19.051257
*🎗Brazil 🎗*
 -23.549616,-46.655418
*🎗UK🎗*
53.190085,-2.891558
*🎗millennium park Chicago🎗* 
41.886473,-87.626356
*🎗Lincoln park zoo Chicago🎗*
41.920118,-87.633728

*🕵️‍♂️@prashuprohunt🕵️‍♂️*
*🕵️‍♂️NSPU Gaming🕵️‍♂️*
https://youtu.be/Ff-WWBufviU
*🕵️‍♂️Good Luck everyone🕵️‍♂️*

*💝New:💝*

*🎗Cluster spot Peru🎗* -11.562950,-77.270210

*🎗Park Turkey🎗*
 38.463131,27.216493
*🎗Zaragoza , Spain🎗* 41.661609,-0.894640
*🎗Taipei,Taiwan🎗*
25.044004,121.506411
*🎗Ilhas CanÃ¡rias🎗*
 28.1283,-15.4515
*🎗Dubai🎗*
25.077159,55.133036
*🎗GrÃ©cia 🎗*
40.627059,22.952489

*🕵️‍♂️@prashuprohunt🕵️‍♂️*
*🕵️‍♂️NSPU Gaming🕵️‍♂️*
https://youtu.be/Ff-WWBufviU
*🕵️‍♂️Good Luck everyone🕵️‍♂️*`,
      footerText: "©zero two 2022",
      buttons: buttons,
      headerType: 1,
    };
    await M.reply(buttonMessage, MessageType.buttonsMessage);
  };
}
