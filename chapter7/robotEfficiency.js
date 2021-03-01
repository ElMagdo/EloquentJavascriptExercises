const roads = [
"Alice's House-Bob's House",
"Alice's House-Post Office",
"Daria's House-Ernie's House",
"Ernie's House-Grete's House",
"Grete's House-Shop",
"Marketplace-Post Office",
"Marketplace-Town Hall",
"Alice's House-Cabin",
"Bob's House-Town Hall",
"Daria's House-Town Hall",
"Grete's House-Farm",
"Marketplace-Farm",
"Marketplace-Shop",
"Shop-Town Hall"
];

function optimalBot({place, parcels}, route) {
  return ({direction: route[0], memory: route.slice(1)});
}