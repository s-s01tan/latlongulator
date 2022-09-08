import { Callback } from "./types/callback";
import { Coordinate } from "./types/coordinate";

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

async function getDistance(
  point_a: Coordinate,
  point_b: Coordinate
): Promise<number> {
  const { lattitude: lat1, longtitude: lon1 } = point_a;
  const { lattitude: lat2, longtitude: lon2 } = point_b;

  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return c;
}

async function getDistanceByKilometers(
  point_a: Coordinate,
  point_b: Coordinate,
  callback?: Callback
): Promise<number> {
  const c = await getDistance(point_a, point_b);

  var R = 6371; // Radius of the earth in km
  var d = R * c; // Distance in km

  callback && callback(undefined, d);
  return d;
}

async function getDistanceByMiles(
  point_a: Coordinate,
  point_b: Coordinate,
  callback: Callback
): Promise<number> {
  const c = await getDistance(point_a, point_b);

  var R = 3958.8; // Radius of the earth in mile
  var d = R * c; // Distance in ml

  callback && callback(undefined, d);
  return d;
}

function getDistanceSync(point_a: Coordinate, point_b: Coordinate): number {
  const { lattitude: lat1, longtitude: lon1 } = point_a;
  const { lattitude: lat2, longtitude: lon2 } = point_b;

  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return c;
}

function getDistanceByKilometersSync(
  point_a: Coordinate,
  point_b: Coordinate
): number {
  const c = getDistanceSync(point_a, point_b);

  var R = 6371; // Radius of the earth in km
  var d = R * c; // Distance in km

  return d;
}

function getDistanceByMilesSync(
  point_a: Coordinate,
  point_b: Coordinate
): number {
  const c = getDistanceSync(point_a, point_b);

  var R = 3958.8; // Radius of the earth in km
  var d = R * c; // Distance in km

  return d;
}

function miles2kilometers(ml: number) {
  return ml * 1.6;
}

function kilometers2miles(km: number) {
  return km * 0.621371;
}

export {
  getDistanceByKilometers,
  getDistanceByKilometersSync,
  getDistanceByMiles,
  getDistanceByMilesSync,
  miles2kilometers,
  kilometers2miles,
};
