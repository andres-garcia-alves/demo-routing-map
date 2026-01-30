declare module 'vue-router' {
    import { Router, RouteRecordRaw, RouterHistory } from 'vue-router';
    export function createRouter(options: any): Router;
    export function createWebHashHistory(base?: string): RouterHistory;
    export type { RouteRecordRaw };
}
