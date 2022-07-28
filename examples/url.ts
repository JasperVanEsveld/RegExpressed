import {
  range,
  charset,
  optional,
  or,
  quantity,
  regex,
  zeroOrMore,
  regexFlag,
} from "./mod.ts";

const urlChar = charset`-@:%._+~#=${range("a", "z")}${range("A", "Z")}${range(
  "0",
  "9"
)}`;

const protocol = regex`http${optional`s`}://`;

const domain = quantity(2, 256)`${urlChar}`;
const domainExt = quantity(2, 6)`${charset`${range("a", "z")}`}`;
const host = regex`${optional`www.`}${domain}.${domainExt}`;

const pathChar = or(urlChar, charset`()?&/=`);
const path = zeroOrMore`${pathChar}`;

const url = regexFlag({ global: true })`${protocol}${host}${path}`;

console.log(
  "Some text with urls : https://www.hello.com/world, https://www.hello.com/world2".match(
    url
  )
);
