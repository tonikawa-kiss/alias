
/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "spotlight",
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
      contentText: `*🕵️‍♂️Spotlight Hour🕵️‍♂️*
  *🕵️‍♂️According to this Date🕵️‍♂️*
*🕵️‍♂️Featured Pokemon🕵️‍♂️*
   *🕵️‍♂️✨According to pokemon✨🕵️‍♂️*
*🕵️‍♂️Featured bonus: According to bonus🕵️* 

*🕵️‍♂️Time is based on India  time🕵️‍♂️.* 


🕵️‍♂️🕵️‍♂️✨ *GOOD LUCK*✨🕵️‍♂️🕵️‍♂️ 

*P* 9:30 am - Kiribiti
1.987708,-157.472268 

*R* 11:30 am - Auckland -37.011092, 174.909598 

*A* 1:30 pm - Sydney -33.858126,151.215593 

*S* 1:30 pm - Brisbane -27.475008,153.025677 

*H* 2:30 pm - Seoul 37.51118,127.098289 

*U* 2:30 pm - Tokyo 35.6892,139.6978 

*P* 3:30 pm - Malaysia 3.15557,101.715711 

*R* 3:30 pm - Singapore 1.284702,103.864685 

*O* 3:30 pm - Taiwan 23.001974,120.211591 

*H* 4:30 pm - Bangkok 13.728304,100.540574 

*U* 6:00 pm -New Delhi 28.5907112,77.0580304 

*N* 6:00 pm - Bangalore 12.953544,77.586251 

*T* 6:30 pm - Tashkent 41.3059682,69.2393294 

*P* 7:30 pm - Dubai 25.077159, 55.133036 

*R* 8:30 pm - Istanbul 41.0622036,28.8070107 

*A* 8:30 pm - Moscow 55.792480,37.616598 

*S* 9:30 pm - Cape Town -33.91547,18.42713 

*H* 9:30 pm - Johannesburg -26.2066643,28.0433482 

*U* 9:30 pm - Paris
48.890712,2.237815 

*P* 9:30 pm - Budapest 47.530760, 19.051266 

         9:30pm - Zaragoza 41.6610,-0.8934

*R* 10:30 pm - London 51.501022,-0.124634 

*O* 11:30pm - Azores 
37.82024,-25.52502 

*🕵️‍♂️According to next Day🕵️‍♂️* 

🕵️‍♂️ *@prashuprohunt*🕵️‍♂️
🕵️‍♂️🕵️‍♂️✨ *GOOD LUCK*✨🕵️‍♂️🕵️‍♂️ 

*H* 12:30 am - Praia
14.90446,-23.51906 

*U* 2:30 am - Brazil Sao Paulo -23.528036,-46.670433 

*N* 3:30 am - New York 40.781532,-73.965547 

*T* 4:30 am - Chicago 41.884191,-87.620050 

*P* 4:30 am - Mexico City 19.432622,-99.133201 

*R* 6:30 am - San Francisco 37.80892,-122.409977 

*O* 7:30 am - Anchorage 61.217674,-149.893249 

9.30am - Honolulu 21.284711,-157.845453 

10:30 am - Samoa island
-14.278384,-170.6906419`,
      footerText: "💝Asuna-BOT💝",
      buttons: buttons,
      headerType: 1,
    };
    await M.reply(buttonMessage, MessageType.buttonsMessage);
  };
}
