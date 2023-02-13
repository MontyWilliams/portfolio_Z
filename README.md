## Fonts Using Tailwing
In the tailwind config file fonts are added and can be used within classes
```
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Fredericka the Great"],
      signature1: ["Rubik Bubbles"],
    }
```
in this website I use emailJs a popular 3rd party for sending emails directly from an application
this tool is not only compatible with react but also other popular libraries like vue and svelt

if build fails 
export NODE_OPTIONS=--max-old-space-size=8192
