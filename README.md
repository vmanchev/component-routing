# Component Routing

Given one component is configured to load up for different route paths, 

This project will prove that the component will be resolved and re-initialized on every route,

Opposite to the statement that a component will be resolved only once.

## How it works
- `ContentComponent` will be loaded every time any of `/content`, `/content/1`, `/content/2` or `/content/1/category/2` routes are requested.
- `ngOnInit` of that component will print in the browser console the time it is requested and the data we have in route configuration.
- title from route configuration will be printed on the screen
