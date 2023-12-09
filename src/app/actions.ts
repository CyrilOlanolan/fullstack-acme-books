"use server";

import { revalidateTag } from "next/cache";

export async function revalidateByTag(tag: string) {
  revalidateTag(tag);
}
