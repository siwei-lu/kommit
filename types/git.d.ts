import { Context } from './types';
export declare function isRepository(path: string): Promise<boolean>;
export declare function commit(ctx: Context): Promise<unknown>;
export declare function messageOf({ type, scope, subject, body, footer }: Context): string;
