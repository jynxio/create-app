import type names from "./names";

type Names = (typeof names)[number];
type LibraryColor = { [K in Names]: string };

const libraryColor: LibraryColor = {
    vue: "#65b687",
    next: "#cfcfcf",
    react: "#499cc6",
    solid: "#5c87c1",
    astro: "#ec662c",
    vanilla: "#eee170",
};
const normalColor = {
    white: "#fafafa",
    black: "#09090b",
    green: "#bef853",
    red: "#ff0000",
    grey: "#27272a",
} as const;
const color = { ...libraryColor, ...normalColor };

export default color;
