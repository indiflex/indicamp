import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from '@/lib/i18n-zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
type WithMessage = { message: string };
export const isErrorWithMessage = (error: unknown): error is WithMessage =>
  typeof error === 'object' &&
  error !== null &&
  'message' in error &&
  typeof error.message === 'string';

export const toErrorMessage = (error: unknown) => {
  if (isErrorWithMessage(error)) {
    return error.message;
  }

  // return new Error(JSON.stringify(error));
  return JSON.stringify(error);
};

export function parseZodErrorMessage(error: z.ZodError) {
  const [err] = JSON.parse(error.message);
  if (!err) return error.message;
  console.log('🚀  err:', err);
  // return `${err.message}(${err.path})`;
  return err.message;
}

const regHangul = new RegExp(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/);
export const isHangul = (str: string) => regHangul.test(str);
