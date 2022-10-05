# Stand alone react component

This library is for a project that is just a react component alone, doesn't mount anything, doesn't include react either.

It has to be mounted by the host page using render, there is an sample index.html showing how to use.

It uses typescript and has a custom webpack configuration.

Initially trying to build a file upload component for an existing legacy site.

# Trying

Actually for testing doing:

```
 npm run build
 cp index.html dist/FileUpload.js /var/www/html/
```

Then go to:
http://localhost/

This assumes that the local document root is at /var/www/html, as is common in linux distros.

# References

* https://stackoverflow.com/questions/41072248/standalone-react-component-with-webpack
* https://codeburst.io/building-react-widget-libraries-using-webpack-e0a140c16ce4
