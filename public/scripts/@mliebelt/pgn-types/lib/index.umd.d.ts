type SevenRoosterTagKeys = 'Event' | 'Site' | 'Round' | 'White' | 'Black' | 'Result';
type SevenRoosterTags = {
    [key in SevenRoosterTagKeys]: string;
} & {
    Date?: PgnDate;
};
type PlayerTagKeys = 'WhiteTitle' | 'BlackTitle' | 'WhiteElo' | 'BlackElo' | 'WhiteUSCF' | 'BlackUSCF' | 'WhiteNA' | 'BlackNA' | 'WhiteType' | 'BlackType';
type EventTagKeys = 'EventSponsor' | 'Section' | 'Stage' | 'Board';
type OpeningTagKeys = 'Opening' | 'Variation' | 'SubVariation' | 'ECO' | 'NIC';
type AlternativeStartingKeys = 'SetUp' | 'FEN';
type GameConclusionTagKeys = 'Termination';
type MiscTagKeys = 'Annotator' | 'Mode' | 'PlyCount';
type LichessTagKeys = 'PuzzleEngine' | 'PuzzleMakerVersion' | 'PuzzleCategory' | 'PuzzleWinner' | 'Variant' | 'WhiteRatingDiff' | 'BlackRatingDiff' | 'WhiteFideId' | 'BlackFideId' | 'WhiteTeam' | 'BlackTeam';
type ClockTagKeys = 'Clock' | 'WhiteClock' | 'BlackClock';
type TagKeys = SevenRoosterTagKeys | PlayerTagKeys | EventTagKeys | OpeningTagKeys | AlternativeStartingKeys | GameConclusionTagKeys | MiscTagKeys | LichessTagKeys | ClockTagKeys;
type TimeControlKeys = 'TimeControl';
type TimeControl = {
    kind?: string;
    value?: string;
    moves?: number;
    seconds?: number;
    increment?: number;
};
type DateTagKeys = 'Date' | 'EventDate' | 'UTCDate';
type PgnDate = {
    value?: string;
    year?: number;
    month?: number;
    day?: number;
};
type DateTags = {
    [key in DateTagKeys]: PgnDate;
};
type TimeTagKeys = 'Time' | 'UTCTime';
type PgnTime = {
    value?: string;
    hour?: number;
    minute?: number;
    second?: number;
};
type TimeTags = {
    [key in TimeTagKeys]: PgnTime;
};
type Tags = {
    [key in TagKeys]: string;
} & DateTags & TimeTags & MessagesObject & {
    [key in TimeControlKeys]: TimeControl;
};
type Message = {
    key: string;
    value: string;
    message: string;
};
type MessagesObject = {
    messages: Message[];
};
type GameComment = {
    comment?: string;
    colorArrows?: string[];
    colorFields?: string[];
    clk?: string;
    egt?: string;
    emt?: string;
    mct?: string;
    eval?: string;
};
type PgnMove = {
    drawOffer: boolean;
    moveNumber: number;
    notation: {
        fig?: string | null;
        strike?: 'x' | null;
        col: string;
        row: string;
        check?: string;
        promotion: string | null;
        notation: string;
        disc?: string;
        drop?: boolean;
    };
    variations: PgnMove[][];
    nag: string[];
    commentDiag: GameComment;
    commentMove?: string;
    commentAfter?: string;
    turn: 'w' | 'b';
};
declare const PROMOTIONS: {
    q: string;
    r: string;
    b: string;
    n: string;
};
declare const prom_short: string[];
type PROMOTIONS_SHORT = typeof prom_short[number];
declare const colors: readonly ["white", "black"];
declare const files: readonly ["a", "b", "c", "d", "e", "f", "g", "h"];
declare const ranks: readonly ["1", "2", "3", "4", "5", "6", "7", "8"];
type File = typeof files[number];
type Rank = typeof ranks[number];
type Field = 'a0' | `${File}${Rank}`;
type Color = 'w' | 'b';
type PgnReaderMove = {
    drawOffer?: boolean;
    moveNumber?: number;
    notation: {
        fig?: string | null;
        strike?: 'x' | null;
        col?: string;
        row?: string;
        check?: string;
        ep?: boolean;
        promotion?: string | null;
        notation: string;
        disc?: string;
        drop?: boolean;
    };
    variations: PgnReaderMove[];
    nag: string[];
    commentDiag?: GameComment;
    commentMove?: string;
    commentAfter?: string;
    turn?: Color;
    from: Field;
    to: Field;
    fen?: string;
    index?: number;
    prev?: number;
    next?: number;
    variationLevel?: number;
};
type PgnGame = {
    tags?: Tags;
    gameComment?: GameComment;
    moves: PgnReaderMove[];
};

export { AlternativeStartingKeys, ClockTagKeys, Color, DateTagKeys, DateTags, EventTagKeys, Field, File, GameComment, GameConclusionTagKeys, LichessTagKeys, Message, MessagesObject, MiscTagKeys, OpeningTagKeys, PROMOTIONS, PROMOTIONS_SHORT, PgnDate, PgnGame, PgnMove, PgnReaderMove, PgnTime, PlayerTagKeys, Rank, SevenRoosterTagKeys, SevenRoosterTags, TagKeys, Tags, TimeControl, TimeControlKeys, TimeTagKeys, TimeTags, colors, files, prom_short, ranks };
