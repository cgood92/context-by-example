import people from "./people.data.js";
import { getRandomIntInclusive } from "../util/common";

const sortAscending = (a, b) => a.name.localeCompare(b.name);
const sortDescending = (a, b) => -a.name.localeCompare(b.name);

const getSort = {
  ASC: sortAscending,
  DSC: sortDescending
};

export const fetchPerson = id =>
  new Promise(resolve => {
    setTimeout(() => resolve(people[id]), getRandomIntInclusive(1000, 3000));
  });

export const fetchPeople = (sort = "ASC") =>
  new Promise(resolve => {
    setTimeout(
      () => resolve(people.sort(getSort[sort])),
      getRandomIntInclusive(500, 2000)
    );
  });
