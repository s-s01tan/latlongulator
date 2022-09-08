## <img src="./assets/icon.png" width=26 height=26> <strong>LatLong</strong>ulator Package

<hr/>

### The NPM package which presents utils for geo calculation operations.

<br/>

### Getting the distance between 2 locations:

- By Kilometers (km)

```
// Async Version
getDistanceByKilometers(
  { lattitude: 43.6426723, longtitude: 44.2531532 },
  { lattitude: 50.9483754, longtitude: 49.3948516 },
  function (err, res) {
    if (err) return err;
    console.log(res);
  }
);

// Sync Version
getDistanceByKilometersSync(
  { lattitude: 43.6426723, longtitude: 44.2531532 },
  { lattitude: 50.9483754, longtitude: 49.3948516 }
);

```

- By Miles (ml)

```
// Same code structure like above with names getDistanceByMiles and getDistanceByMilesSync
```

### <strong>Note:</strong> Location point should be declared like below

```
{
    lattitude: number,
    longtitude: number
}
```

### Converters between kilometers and miles scales:

- From kilometers to miles

```
const km = 2.4;
const miles = kilometers2miles(km);
```

- From miles to kilometers

```
const ml = 4.5;
const kilometers = miles2kilometers(ml);
```

<hr/>

### ❤️‍🔥 Source Code: <a href="https://github.com/s-s01tan/latlongulator" target="_blank">https://github.com/s-s01tan/latlongulator</a>

### 🔗 LinkedIn: <a href="https://www.linkedin.com/in/s-s01tan/" target="_blank">https://www.linkedin.com/in/s-s01tan/</a>
