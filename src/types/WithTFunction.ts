import { TFunction } from "i18next";

export type WithTFunction<T> = T & { t: TFunction };
