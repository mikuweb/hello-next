import React from "react";
import { readFile, writeFile } from "../../helpers/file-helpers";

const DATABASE_PATH = "/src/database.json";

const HitsNumber = () => {
  let { hits } = JSON.parse(readFile(DATABASE_PATH));

  hits = hits + 1;

  writeFile(DATABASE_PATH, JSON.stringify({ hits }));

  return hits;
};

export default HitsNumber;
