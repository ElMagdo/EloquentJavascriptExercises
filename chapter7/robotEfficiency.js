function optimalBot({place, parcels}, route) {
  return ({direction: route[0], memory: route.slice(1)});
}