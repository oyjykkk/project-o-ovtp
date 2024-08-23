import HiMap from "./map";

declare module "vue" {
    export interface GlobalComponents {
        HiMap: typeof HiMap
    }
}