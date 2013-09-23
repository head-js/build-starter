define(function (require) {
  // FIXME: angular has its own rules to load modules
  //        paths in seajs.config is helpless
  var prefix = {
    api: 'http://asimov.eu01.aws.af.cm/publicapi/',
    // api: 'http://127.0.0.1:5000/publicapi/',
    partials: '/yingyuan/scripts/partials'
  };

  return prefix;
});