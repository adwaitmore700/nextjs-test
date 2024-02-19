/* All DB Queries */

import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchSomething() {
  noStore(); // to not cache stuffs

  try {
    //get data from sql
  } catch (error) {
    //throw error
  }
}
