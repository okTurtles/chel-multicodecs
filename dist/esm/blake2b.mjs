// File generated by build.js, do not edit
import blakejs from 'blakejs';
import * as bytes from './bytes.mjs';
import { from } from './hasher.mjs';
const { blake2b } = blakejs;
export const blake2b8 = from({
    name: 'blake2b-8',
    code: 0xb201,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 1))
});
export const blake2b16 = from({
    name: 'blake2b-16',
    code: 0xb202,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 2))
});
export const blake2b24 = from({
    name: 'blake2b-24',
    code: 0xb203,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 3))
});
export const blake2b32 = from({
    name: 'blake2b-32',
    code: 0xb204,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 4))
});
export const blake2b40 = from({
    name: 'blake2b-40',
    code: 0xb205,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 5))
});
export const blake2b48 = from({
    name: 'blake2b-48',
    code: 0xb206,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 6))
});
export const blake2b56 = from({
    name: 'blake2b-56',
    code: 0xb207,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 7))
});
export const blake2b64 = from({
    name: 'blake2b-64',
    code: 0xb208,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 8))
});
export const blake2b72 = from({
    name: 'blake2b-72',
    code: 0xb209,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 9))
});
export const blake2b80 = from({
    name: 'blake2b-80',
    code: 0xb20a,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 10))
});
export const blake2b88 = from({
    name: 'blake2b-88',
    code: 0xb20b,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 11))
});
export const blake2b96 = from({
    name: 'blake2b-96',
    code: 0xb20c,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 12))
});
export const blake2b104 = from({
    name: 'blake2b-104',
    code: 0xb20d,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 13))
});
export const blake2b112 = from({
    name: 'blake2b-112',
    code: 0xb20e,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 14))
});
export const blake2b120 = from({
    name: 'blake2b-120',
    code: 0xb20f,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 15))
});
export const blake2b128 = from({
    name: 'blake2b-128',
    code: 0xb210,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 16))
});
export const blake2b136 = from({
    name: 'blake2b-136',
    code: 0xb211,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 17))
});
export const blake2b144 = from({
    name: 'blake2b-144',
    code: 0xb212,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 18))
});
export const blake2b152 = from({
    name: 'blake2b-152',
    code: 0xb213,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 19))
});
export const blake2b160 = from({
    name: 'blake2b-160',
    code: 0xb214,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 20))
});
export const blake2b168 = from({
    name: 'blake2b-168',
    code: 0xb215,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 21))
});
export const blake2b176 = from({
    name: 'blake2b-176',
    code: 0xb216,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 22))
});
export const blake2b184 = from({
    name: 'blake2b-184',
    code: 0xb217,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 23))
});
export const blake2b192 = from({
    name: 'blake2b-192',
    code: 0xb218,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 24))
});
export const blake2b200 = from({
    name: 'blake2b-200',
    code: 0xb219,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 25))
});
export const blake2b208 = from({
    name: 'blake2b-208',
    code: 0xb21a,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 26))
});
export const blake2b216 = from({
    name: 'blake2b-216',
    code: 0xb21b,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 27))
});
export const blake2b224 = from({
    name: 'blake2b-224',
    code: 0xb21c,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 28))
});
export const blake2b232 = from({
    name: 'blake2b-232',
    code: 0xb21d,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 29))
});
export const blake2b240 = from({
    name: 'blake2b-240',
    code: 0xb21e,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 30))
});
export const blake2b248 = from({
    name: 'blake2b-248',
    code: 0xb21f,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 31))
});
export const blake2b256 = from({
    name: 'blake2b-256',
    code: 0xb220,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 32))
});
export const blake2b264 = from({
    name: 'blake2b-264',
    code: 0xb221,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 33))
});
export const blake2b272 = from({
    name: 'blake2b-272',
    code: 0xb222,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 34))
});
export const blake2b280 = from({
    name: 'blake2b-280',
    code: 0xb223,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 35))
});
export const blake2b288 = from({
    name: 'blake2b-288',
    code: 0xb224,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 36))
});
export const blake2b296 = from({
    name: 'blake2b-296',
    code: 0xb225,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 37))
});
export const blake2b304 = from({
    name: 'blake2b-304',
    code: 0xb226,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 38))
});
export const blake2b312 = from({
    name: 'blake2b-312',
    code: 0xb227,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 39))
});
export const blake2b320 = from({
    name: 'blake2b-320',
    code: 0xb228,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 40))
});
export const blake2b328 = from({
    name: 'blake2b-328',
    code: 0xb229,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 41))
});
export const blake2b336 = from({
    name: 'blake2b-336',
    code: 0xb22a,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 42))
});
export const blake2b344 = from({
    name: 'blake2b-344',
    code: 0xb22b,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 43))
});
export const blake2b352 = from({
    name: 'blake2b-352',
    code: 0xb22c,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 44))
});
export const blake2b360 = from({
    name: 'blake2b-360',
    code: 0xb22d,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 45))
});
export const blake2b368 = from({
    name: 'blake2b-368',
    code: 0xb22e,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 46))
});
export const blake2b376 = from({
    name: 'blake2b-376',
    code: 0xb22f,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 47))
});
export const blake2b384 = from({
    name: 'blake2b-384',
    code: 0xb230,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 48))
});
export const blake2b392 = from({
    name: 'blake2b-392',
    code: 0xb231,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 49))
});
export const blake2b400 = from({
    name: 'blake2b-400',
    code: 0xb232,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 50))
});
export const blake2b408 = from({
    name: 'blake2b-408',
    code: 0xb233,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 51))
});
export const blake2b416 = from({
    name: 'blake2b-416',
    code: 0xb234,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 52))
});
export const blake2b424 = from({
    name: 'blake2b-424',
    code: 0xb235,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 53))
});
export const blake2b432 = from({
    name: 'blake2b-432',
    code: 0xb236,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 54))
});
export const blake2b440 = from({
    name: 'blake2b-440',
    code: 0xb237,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 55))
});
export const blake2b448 = from({
    name: 'blake2b-448',
    code: 0xb238,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 56))
});
export const blake2b456 = from({
    name: 'blake2b-456',
    code: 0xb239,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 57))
});
export const blake2b464 = from({
    name: 'blake2b-464',
    code: 0xb23a,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 58))
});
export const blake2b472 = from({
    name: 'blake2b-472',
    code: 0xb23b,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 59))
});
export const blake2b480 = from({
    name: 'blake2b-480',
    code: 0xb23c,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 60))
});
export const blake2b488 = from({
    name: 'blake2b-488',
    code: 0xb23d,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 61))
});
export const blake2b496 = from({
    name: 'blake2b-496',
    code: 0xb23e,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 62))
});
export const blake2b504 = from({
    name: 'blake2b-504',
    code: 0xb23f,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 63))
});
export const blake2b512 = from({
    name: 'blake2b-512',
    code: 0xb240,
    encode: (input) => bytes.coerce(blake2b(input, undefined, 64))
});
