# pgn-parser

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/mliebelt/pgn-parser/Node.js%20CI?logo=github&label=Build%26Test)
![GitHub package.json version](https://img.shields.io/github/package-json/v/mliebelt/pgn-parser?color=33aa33&label=Version&logo=npm)
![npm](https://img.shields.io/npm/dm/@mliebelt/pgn-parser?label=Downloads&logo=npm)
![GitHub](https://img.shields.io/github/license/mliebelt/pgn-parser?label=License)
<!--- ![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/:mliebelt/:pgn-parser)
is currently not working, so it is skipped. Check that later again. --->

Javascript library to allow reading of a PGN (Portable Game Notation) chess game notation, and providing the result as JSON.

## What is it?

[PGN](http://www.saremba.de/chessgml/standards/pgn/pgn-complete.htm) is a shortcut for [portable game notation](https://en.wikipedia.org/wiki/Portable_Game_Notation). It was developed in 1993. It helps standardize how chess games were
notated, so that computer programs like the [PgnViewerJS](https://github.com/mliebelt/PgnViewerJS)  could be developed. PGN is the standard to keep chess games forever. There are huge databases available like those from https://lichess.org.

## Who needs it?

Everyone that wants to implement chess software and has to read PGN notation. The library is a runtime component to be included in the usual way.

    import { parse } from '@mliebelt/pgn-parser'

or

    let parse = require("@mliebelt/pgn-parser").parse

## How to install it?

    npm i @mliebelt/pgn-parser --save

## How to use it?

Look at the many test cases that show how to use it. Have a look at the examples in directory doc.

It does not have an API, just a JSON structure that has to be read then. You have 4 top level rules to use the parser:

* `games`: Reads many games from the string given, returns an array of games (object with keys `tags` and `moves`).
* `game`: Reads a complete game, and returns an object with keys `tags` and `moves`.
* `tags`: Reads only the tags from the given input. The input must not contain any moves.
* `pgn`: Reads only the moves of the game (as array).

A code example to read a complete game then looks like:

    import { parse } from '@mliebelt/pgn-parser'
    let game = parse('[White "Me"] [Black "Magnus"] 1. f4 e5 2. g4 Qh4#', {startRule: "game"})
    console.log(JSON.stringify(res, null, 2))
    ==>
    JSON.stringify(res, null, 2)
    {
      "tags": {
        "White": "Me",
        "Black": "Magnus"
      },
      "moves": [
        {
          "turn": "w",
          "moveNumber": 1,
        ...
        },
        {...},
        ...
      ]
    }

See the example `doc/read-sample.js` that can be directly used in the shell: `node doc/read-sample.js`. The directory contains some more examples how to use it.

## How to use it as an CLI?

You can use `pgn-parser` as a command line tool for parsing PGN files to JSON

``` bash
npm install --global @mliebelt/pgn-parser
pgn-parser file.pgn

# Or

npx @mliebelt/pgn-parser file.pgn
```

The optional parameter `-p` emits the result pretty-printed.

## How to use it in the browser?

There is a UMD version of the library available which works both in node and in the browser. The file `doc/index.html` is an example that shows how it works, and explains what to do for that.

So it is not necessary anymore to build a version of that library with `browserify`.

## References

* [peggy](https://github.com/peggyjs/peggy) Parser Generator implemented in Javascript. Used for regenerating the javascript library completely by an automatic build.
* [PGN Specification](https://github.com/mliebelt/pgn-spec-commented/blob/main/pgn-specification.md): PGN (Portable Game Notation) specification, there the section 8.2. Most other parts of the spec are implemented as well.
* [PGN Supplement](https://github.com/mliebelt/pgn-spec-commented/blob/main/pgn-spec-supplement.md) Additional specification for adding structured comments, like circles, arrows and clock annotations.
* [NAG Specification](http://en.wikipedia.org/wiki/Numeric_Annotation_Glyphs) Definition of the NAGs (Numeric Annotation Glyphs)
