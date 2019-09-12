import { Next } from '@idan-loo/middleware';
import { Context } from '~/types';
export declare function checkPath({ path }: Context, next: Next): Promise<void>;
