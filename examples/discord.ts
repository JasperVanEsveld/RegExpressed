import {
  or,
  quantity,
  regexFlag,
  wordChar,
} from "https://deno.land/x/reg_expressed@1.0.1/mod.ts";

const host = or(
  `discord.gg`,
  `discord.media`,
  `discord.com/invite`,
  `discordapp.com/invite`
);

const inviteCode = quantity(0, 12)`${wordChar}`;
const invite = regexFlag({ global: true })`${host}/${inviteCode}`;

const matches = `some invitelinks:
    discord.gg/asad9_asda/,
    discord.media/asdasda or some other code 
    discord.com/invite/asdasd or
    discordapp.com/invite/test
    but not discordapp.gg/stuff`.matchAll(invite);

console.log(invite.source);
for (const match of matches) {
  console.log(match[0]);
}
/**
 * 
 * Logs:
 * (?:(?:discord\.gg)|(?:discord\.media)|(?:discord\.com\/invite)|(?:discordapp\.com\/invite))\/(?:\w){0,12}
 * discord.gg/asad9_asda
 * discord.media/asdasda
 * discord.com/invite/asdasd
 * discordapp.com/invite/test
 */


