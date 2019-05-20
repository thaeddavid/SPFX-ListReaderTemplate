## list-reader-spfx

This web part is intended to be used as a starting point to do simple REST list operations within SharePoint using SPFX.

It includes a list picker property from @pnp/spfx-property-controls to pick a list and then displays the list name within the web part.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
