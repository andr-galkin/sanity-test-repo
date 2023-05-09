const p = "Paper";
const r = "Rock";
const s = "Scissors";
const w = "YOU WIN";
const d = "DRAW";
const l = "YOU LOST...";

export const rms = (user: string, random: string): string => {
    if (user === r && random === p) return l;
    else if (user === r && random === s) return w;
    else if (user === p && random === r) return w;
    else if (user === p && random === s) return l;
    else if (user === s && random === r) return l;
    else if (user === s && random === p) return w;
    else return d;
};
