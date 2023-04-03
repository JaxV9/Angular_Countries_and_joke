export interface Country {
    "name": {
        "common": string;
    };
    "capital": String[];
    "population": number;
    "flag": string;
    "area": number;
    "currencies": {
        "code": string;
        "name": string;
        "symbol": string;
    };
    "languages": {
        "code": string;
        "name": string;
    };
    "borders": string[];
    "region": string;
    "subregion": string;
    "nativeName": string;
}